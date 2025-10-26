import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Shield, Package, Calendar, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { costumes } from "@/data/costumes";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CostumeDetail = () => {
  const { id } = useParams();
  const costume = costumes.find(c => c.id === id);

  if (!costume) {
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
                  <CarouselItem>
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                      <img
                        src={costume.image}
                        alt={costume.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
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
                  {costume.guaranteedBackup && (
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
                    <span className="text-2xl font-display font-bold text-primary">₹{costume.rentPrice}/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Buy Price</span>
                    <span className="text-2xl font-display font-bold text-primary">₹{costume.buyPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Deposit</span>
                    <span className="font-semibold">₹{costume.deposit}</span>
                  </div>
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
                        <p className="text-sm text-muted-foreground">{costume.sizes.join(", ")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full gradient-gold border-0 text-white text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Rent Now
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg">
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
                      <dd className="font-medium">{costume.colors.join(", ")}</dd>
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
                  <AccordionContent className="text-muted-foreground">
                    Lead time: 2 days minimum for booking. We recommend booking at least 1 week in advance for group orders. 
                    Delivery available across Gurgaon. Pickup arrangements can be made upon request.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fit">
                  <AccordionTrigger className="font-display">Fit & Alterations</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Minor alterations included in rental. For major alterations, additional charges apply. 
                    Trial fittings available for bulk academy bookings. We provide a detailed sizing guide with each order.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="damage">
                  <AccordionTrigger className="font-display">Damage Policy</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Normal wear and tear is expected. Minor stains and loose threads are acceptable. 
                    Major damage (tears, missing embellishments, severe stains) will be charged from the deposit. 
                    Full damage policy details provided at booking.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="return">
                  <AccordionTrigger className="font-display">Return Instructions</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Costumes must be returned within 24 hours of event completion. 
                    Pickup service available. All jewelry pieces must be accounted for. 
                    Return the costume in the provided garment bag with packing list.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CostumeDetail;
