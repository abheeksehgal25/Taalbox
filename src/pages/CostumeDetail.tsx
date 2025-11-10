import { useParams, Link } from "react-router-dom";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Shield, Package, Calendar, Share2 } from "lucide-react";
import CheckoutDrawer from "@/components/CheckoutDrawer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { costumes } from "@/data/costumes";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CostumeDetail = () => {
  const { id } = useParams();
  const local = costumes.find(c => c.id === id);

  const { data: apiCostume, isLoading } = useQuery({
    queryKey: ["costume", id],
    queryFn: async () => {
      const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
      const res = await fetch(`${base}/api/costumes/${id}`);
      if (!res.ok) throw new Error("Costume not found");
      return res.json();
    },
    enabled: !!id && !local,
    retry: 1,
  });

  interface CostumeLite {
    _id?: string; id?: string; title?: string; description?: string;
    rentPricePerDay?: number; rentPrice?: number; deposit?: number; buyPrice?: number; lateFeePerDay?: number; groupDiscount?: number; taxIncluded?: boolean;
    photos?: string[]; image?: string; danceForm?: string; styleTag?: string; guaranteedBackup?: boolean; backupAvailable?: boolean;
    location?: string; sizes?: string[]; sizesAvailable?: string[]; colors?: string[]; colorFamily?: string[];
    vendor?: string; clusterTag?: string; availabilityStatus?: string; leadTimeDays?: number; rentalMinDays?: number; rentalMaxDays?: number; bookingNotes?: string;
    adjustable?: boolean; alterationsIncluded?: boolean; fitNotes?: string; damagePolicy?: string; returnPolicy?: string; fabric?: string;
  }
  // Local data takes precedence; then API response
  const costume: CostumeLite | undefined = (local as unknown as CostumeLite) || (apiCostume as unknown as CostumeLite);

  // Checkout drawer state (must be before any early returns)
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState<"rent" | "buy">("rent");

  if (!costume && !isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold mb-4">Costume not found</h1>
            <Button asChild>
              <Link to="/catalog">Back to Catalog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Loading state
  if (isLoading || !costume) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold mb-4">Loading...</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Normalize fields to handle API vs local shapes
  const rentPrice = costume.rentPrice ?? costume.rentPricePerDay ?? 0;
  const buyPrice = costume.buyPrice ?? 0;
  const sizes = costume.sizes || costume.sizesAvailable || [];
  const colors = costume.colors || costume.colorFamily || [];
  const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
  const resolveImageUrl = (raw?: string) => {
    if (!raw) return "";
    const s = String(raw);
    if (s.startsWith("http://") || s.startsWith("https://")) return s;
    if (s.startsWith("/uploads/")) return `${apiBase}${s}`;
    return `${apiBase}/${s.replace(/^\/+/, "")}`;
  };
  const rawPhotos: string[] = Array.isArray(costume.photos) ? costume.photos : [];
  const rawImage = costume.image || (rawPhotos[0] ?? "");
  const image = resolveImageUrl(rawImage);
  const gallery: string[] = Array.from(
    new Set(
      [rawImage, ...rawPhotos]
        .filter(Boolean)
        .map((u: string) => resolveImageUrl(u))
        .filter((u: string) => !!u)
    )
  );
  const PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 533'>` +
        `<defs><linearGradient id='g' x1='0' x2='0' y1='0' y2='1'><stop stop-color='#f3f4f6' offset='0'/><stop stop-color='#e5e7eb' offset='1'/></linearGradient></defs>` +
        `<rect width='400' height='533' fill='url(#g)'/>` +
        `<g fill='#9ca3af' font-family='Arial,Helvetica,sans-serif' font-size='20' text-anchor='middle'>` +
          `<text x='200' y='266'>No image</text>` +
        `</g>` +
      `</svg>`
    );

  

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {(gallery.length > 0 ? gallery : [image]).map((url, idx) => (
                    <CarouselItem key={idx}>
                      <div className="aspect-[3/4] rounded-lg overflow-hidden">
                        <img
                          src={url || PLACEHOLDER}
                          onError={(e) => {
                            if (e.currentTarget.src !== PLACEHOLDER) e.currentTarget.src = PLACEHOLDER;
                          }}
                          alt={`${costume.title} image ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline">{costume.danceForm}</Badge>
                  <Badge variant="secondary">{costume.styleTag}</Badge>
                  {(costume.guaranteedBackup || costume.backupAvailable) && (
                    <Badge className="bg-accent text-accent-foreground border-0">
                      <Shield className="h-3 w-3 mr-1" />
                      Guaranteed Backup
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{costume.title}</h1>
                <p className="text-muted-foreground text-lg">{costume.description}</p>
              </div>

              <Card className="border-2 border-gold">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Rent Price</span>
                    <span className="text-2xl font-display font-bold text-primary">₹{rentPrice}/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Buy Price</span>
                    <span className="text-2xl font-display font-bold text-primary">₹{buyPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Deposit</span>
                    <span className="font-semibold">₹{costume.deposit}</span>
                  </div>
                  {costume.lateFeePerDay ? (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Late Fee</span>
                      <span className="font-semibold">₹{costume.lateFeePerDay}/day</span>
                    </div>
                  ) : null}
                  {(costume.groupDiscount || costume.taxIncluded) && (
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{costume.groupDiscount ? `${costume.groupDiscount}% group discount` : ""}</span>
                      <span>{costume.taxIncluded ? "Tax included" : ""}</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Location</p>
                        <p className="text-sm text-muted-foreground">{costume.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <Package className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Sizes</p>
                        <p className="text-sm text-muted-foreground">{Array.isArray(sizes) ? sizes.join(", ") : "-"}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full gradient-gold border-0 text-white text-lg"
                  onClick={() => { setMode("rent"); setOpen(true); }}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Rent Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-lg"
                  onClick={() => { setMode("buy"); setOpen(true); }}
                >
                  <Package className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
                <Button size="lg" variant="ghost" className="w-full text-lg">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold mb-3">Details</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Fabric</dt>
                      <dd className="font-medium">{costume.fabric}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Colors</dt>
                      <dd className="font-medium">{Array.isArray(colors) ? colors.join(", ") : "-"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Vendor</dt>
                      <dd className="font-medium">{costume.vendor}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Cluster Tag</dt>
                      <dd className="font-medium text-xs">{costume.clusterTag}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="availability">
                  <AccordionTrigger className="font-display">Availability & Booking</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="font-medium">{costume.availabilityStatus || "available"}</span></div>
                    {typeof costume.leadTimeDays === "number" && (
                      <div className="flex justify-between"><span className="text-muted-foreground">Lead Time</span><span className="font-medium">{costume.leadTimeDays} day(s)</span></div>
                    )}
                    {(costume.rentalMinDays || costume.rentalMaxDays) && (
                      <div className="flex justify-between"><span className="text-muted-foreground">Rental Window</span><span className="font-medium">{costume.rentalMinDays || 1}–{costume.rentalMaxDays || 7} days</span></div>
                    )}
                    {costume.bookingNotes && <p>{costume.bookingNotes}</p>}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fit">
                  <AccordionTrigger className="font-display">Fit & Alterations</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2 text-sm">
                    {(costume.adjustable !== undefined) && (
                      <div className="flex justify-between"><span className="text-muted-foreground">Adjustable</span><span className="font-medium">{costume.adjustable ? "Yes" : "No"}</span></div>
                    )}
                    {(costume.alterationsIncluded !== undefined) && (
                      <div className="flex justify-between"><span className="text-muted-foreground">Alterations Included</span><span className="font-medium">{costume.alterationsIncluded ? "Yes" : "No"}</span></div>
                    )}
                    {costume.fitNotes && <p>{costume.fitNotes}</p>}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="damage">
                  <AccordionTrigger className="font-display">Damage Policy</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {costume.damagePolicy || "Normal wear and tear is expected. Major damage will be charged from the deposit."}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="return">
                  <AccordionTrigger className="font-display">Return Instructions</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {costume.returnPolicy || "Return within 24 hours of event completion. All accessories must be returned."}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CheckoutDrawer open={open} onOpenChange={setOpen} costume={costume} mode={mode} />
    </div>
  );
};

export default CostumeDetail;
