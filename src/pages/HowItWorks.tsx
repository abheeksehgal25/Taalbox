import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, Truck, Sparkles, Shield, Package, Clock, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              How TaalBox Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four simple steps to stage-ready costumes with guaranteed backup support
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              {/* Step 1 */}
              <Card className="border-2 hover-lift">
                <CardContent className="pt-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center">
                        <Search className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-5xl font-display font-bold text-primary/20">01</span>
                        <h3 className="text-2xl font-display font-bold">Choose Your Look</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Browse our catalog by dance form, style, color, and price range. Each listing shows rental and purchase prices, available sizes, and whether it's part of a guaranteed backup cluster. Filter by location to find costumes in Gurgaon.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Full catalog with photos</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Detailed size guides</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Backup availability visible</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-2 hover-lift">
                <CardContent className="pt-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center">
                        <Calendar className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-5xl font-display font-bold text-primary/20">02</span>
                        <h3 className="text-2xl font-display font-bold">Reserve & Confirm</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Check availability calendar and select your event dates. Minimum 2-day lead time (1 week recommended for groups). Submit booking with event details: number of dancers, preferred sizes, and any special requirements. Provide deposit to confirm your reservation.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Real-time availability</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Instant booking confirmation</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Secure deposit payment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-2 hover-lift">
                <CardContent className="pt-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center">
                        <Truck className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-5xl font-display font-bold text-primary/20">03</span>
                        <h3 className="text-2xl font-display font-bold">Delivery & Fit Kit</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Costumes delivered across Gurgaon 1-2 days before your event. Each order includes a fit kit with safety pins, thread, and emergency repair supplies. For academy bookings, optional trial fitting available. All jewelry and accessories included in garment bags with packing list.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Pre-event delivery</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Complete accessory sets</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Emergency kit included</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="border-2 hover-lift border-accent">
                <CardContent className="pt-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center">
                        <Sparkles className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-5xl font-display font-bold text-primary/20">04</span>
                        <h3 className="text-2xl font-display font-bold">Performance & Pickup</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Rock your performance! Return costumes within 24 hours of event completion via our pickup service. Use the provided packing list to ensure all items are returned. Deposit refunded after inspection (minus any damage charges). Share your performance photos with us!
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Convenient pickup</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Quick deposit return</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                          <span>Fair damage policy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Backup Cluster Explanation */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-display font-bold mb-4">Understanding Backup Clusters</h2>
                <p className="text-xl text-muted-foreground">
                  Your peace of mind guarantee — same-city costume backups for group events
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <Package className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-display font-semibold mb-2">What is a Cluster?</h3>
                    <p className="text-sm text-muted-foreground">
                      Multiple identical or very similar costumes tagged together. If your booked costume has an issue, we have immediate backups ready.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Clock className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-display font-semibold mb-2">Same-City Priority</h3>
                    <p className="text-sm text-muted-foreground">
                      Backup costumes are always in Gurgaon. Emergency replacements can reach you within hours, not days.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-display font-semibold mb-2">Manual Pilot Support</h3>
                    <p className="text-sm text-muted-foreground">
                      During pilot phase, our team personally monitors every booking. We proactively check backup availability before your event.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="lead-time">
                  <AccordionTrigger className="font-display">How much advance notice do I need?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Minimum 2 days for individual rentals. For academy group bookings, we recommend at least 1 week to ensure proper fitting and backup coordination. Rush orders may be accommodated based on availability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="alterations">
                  <AccordionTrigger className="font-display">Can I get alterations done?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Minor alterations (hemming, taking in) are included for rental costumes. Major alterations require approval and may incur additional charges. Trial fittings are available for academy bookings.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="deposits">
                  <AccordionTrigger className="font-display">How do deposits work?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Deposits range from ₹1,000-₹3,000 depending on costume value. Refunded within 48 hours after return and inspection. Normal wear and tear is expected; only major damage or missing items are deducted from deposit.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pickup">
                  <AccordionTrigger className="font-display">What if I can't do pickup/delivery?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our standard service includes delivery and pickup across Gurgaon. You can also choose to pick up from vendor locations to save on delivery fees. For locations outside Gurgaon, contact us for custom arrangements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="damage">
                  <AccordionTrigger className="font-display">What happens if something gets damaged?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Minor stains and loose threads are normal and covered. Major tears, missing embellishments, or lost jewelry pieces will be assessed fairly. Damage charges are deducted from your deposit. We provide a detailed damage policy with every rental.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="bulk">
                  <AccordionTrigger className="font-display">Do you offer bulk discounts?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Academy and group bookings (5+ costumes) qualify for bulk pricing. Pilot program participants get first 2 events with no service fee. Contact us for custom quotes on large group bookings.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="backup-guarantee">
                  <AccordionTrigger className="font-display">Is the backup guarantee really reliable?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely. During our pilot phase, we manually verify backup availability for every booking. If a costume becomes unavailable, we proactively offer similar alternatives or emergency replacements. Our manual support ensures you're never left without costumes on performance day.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="jewelry">
                  <AccordionTrigger className="font-display">Is jewelry included?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most of our costume sets include matching jewelry (necklace, earrings, waist belt). Items are clearly listed on each product page. All jewelry must be returned with the costume using the provided packing list.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
