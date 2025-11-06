import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Package, Users, ArrowRight, CheckCircle2, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { costumes } from "@/data/costumes";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <Carousel opts={{
          align: "start",
          loop: true
        }} plugins={[Autoplay({
          delay: 5000
        })]} className="w-full">
            <CarouselContent>
              {[hero1, hero2, hero3].map((image, index) => <CarouselItem key={index}>
                  <div className="relative h-[70vh] md:h-[80vh]">
                    <img src={image} alt={`Stage performance ${index + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="container mx-auto px-4 text-center text-white">
                        <Badge className="mb-4 bg-accent text-accent-foreground border-0 text-sm px-4 py-1">
                          Serving Gurgaon Dance Academies
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 max-w-5xl mx-auto leading-tight">Stage-ready costumes and essentials for your next performance</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">Rent costumes, jewelry, and performance essentials. Delivery &amp; pickup in Gurgaon. Guaranteed backup for group shows.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button asChild size="lg" className="gradient-gold border-0 text-white text-lg px-8">
                            <Link to="/catalog">
                              Browse Looks <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                          <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg px-8">
                            <Link to="/get-quote">Get a Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 hover-lift">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">Guaranteed Backup</h3>
                  <p className="text-muted-foreground">
                    Same-city backup clusters ensure you're never without costumes for your show.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover-lift">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">Costume + Jewelry Sets</h3>
                  <p className="text-muted-foreground">
                    Complete looks with matching jewelry. Everything you need in one rental.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover-lift">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">Academy Bulk Bookings</h3>
                  <p className="text-muted-foreground">
                    Special pricing and dedicated support for dance academy group bookings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Costumes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Costumes</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Handpicked stage-ready looks from our collection
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {costumes.slice(0, 4).map(costume => <Link key={costume.id} to={`/costume/${costume.id}`}>
                  <Card className="overflow-hidden hover-lift border-2 hover:border-gold transition-all">
                    <div className="aspect-[3/4] relative">
                      <img src={costume.image} alt={costume.title} className="w-full h-full object-cover" />
                      {costume.guaranteedBackup && <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0">
                          Guaranteed Backup
                        </Badge>}
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2">{costume.danceForm}</Badge>
                      <h3 className="font-display font-semibold mb-2 line-clamp-2">{costume.title}</h3>
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-muted-foreground">Rent</span>
                        <span className="font-semibold">₹{costume.rentPrice}/day</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Buy</span>
                        <span className="font-semibold">₹{costume.buyPrice}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>)}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="gradient-gold border-0 text-white">
                <Link to="/catalog">
                  View Full Catalog <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 gradient-gold border-0 text-white">Early Pilot Program</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trusted by Leading Academies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "TaalBox saved our annual day! The backup guarantee meant we could focus on choreography, not costume stress."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">PS</span>
                    </div>
                    <div>
                      <p className="font-semibold">Priya Sharma</p>
                      <p className="text-sm text-muted-foreground">Natya Kala Academy, Gurgaon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Amazing quality costumes and the jewelry sets are perfect. Professional service from start to finish."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">AM</span>
                    </div>
                    <div>
                      <p className="font-semibold">Anjali Mehta</p>
                      <p className="text-sm text-muted-foreground">Rhythms Dance Studio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="flex flex-wrap justify-center gap-6 items-center">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">First 2 events: No service fee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Manual support during pilot</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Trial runs available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to make your show stress-free?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book a demo or get a custom quote for your upcoming event
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <Link to="/for-academies">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-red-500 hover:bg-white/10 hover:text-red-600 text-lg px-8">
                <Link to="/get-quote">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;