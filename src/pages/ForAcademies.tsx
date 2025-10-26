import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Users, Shield, HeadphonesIcon, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "sonner";

const ForAcademies = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Create WhatsApp message
    const message = `New Academy Demo Request:
Academy: ${data.academy}
Choreographer: ${data.choreographer}
Event Date: ${data.eventDate}
Dancers: ${data.dancerCount}
Theme: ${data.theme}
Contact: ${data.contact}`;
    
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Demo request sent! We'll contact you soon.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Group Looks for Academies — We Make Shows Stress-Free
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Reliable costume rentals with guaranteed backup support. Designed specifically for dance academies and group performances.
            </p>
            <div className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold">
              <Gift className="h-5 w-5" />
              <span>Pilot Offer: First 2 events — no service fee</span>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Bulk Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    Special rates for group bookings. The more dancers, the better the price.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <HeadphonesIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Manual Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated support during pilot phase. We're here to help at every step.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Trial Runs</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule trial fittings before the big day. Ensure perfect fit for all dancers.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift border-2 border-accent">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Pilot Offer</h3>
                  <p className="text-sm text-muted-foreground">
                    First 2 events: absolutely no service fee. Just costume rental costs.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Features List */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-bold text-center mb-8">Why Choose NrityaReady?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Guaranteed backup costumes for every order",
                  "Complete jewelry sets included",
                  "Flexible delivery and pickup schedules",
                  "Same-day emergency replacements",
                  "Dedicated academy relationship manager",
                  "Custom choreography costume consultation",
                  "Bulk storage solutions for repeat events",
                  "Priority booking for registered academies"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Form Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold mb-4">Book a Demo</h2>
                <p className="text-muted-foreground">
                  Let's discuss your upcoming event and create the perfect costume plan for your academy.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="academy">Academy Name *</Label>
                        <Input id="academy" name="academy" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="choreographer">Choreographer Name *</Label>
                        <Input id="choreographer" name="choreographer" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Event Date *</Label>
                        <Input id="eventDate" name="eventDate" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dancerCount">Number of Dancers *</Label>
                        <Input id="dancerCount" name="dancerCount" type="number" min="1" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme / Style *</Label>
                      <Input id="theme" name="theme" placeholder="e.g., Mughal Kathak, Folk Fusion" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact Number *</Label>
                      <Input id="contact" name="contact" type="tel" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Any specific requirements or questions?"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-gold border-0 text-white">
                      Submit Demo Request
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to be contacted by NrityaReady regarding your demo request.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">What Academies Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "The guaranteed backup feature is a game-changer. We had a last-minute size issue and they had a replacement ready within hours. Absolutely reliable!"
                  </p>
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Natya Kala Academy, Gurgaon</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "Working with NrityaReady has simplified our costume planning significantly. The pilot offer helped us try their service risk-free. Now we're permanent clients!"
                  </p>
                  <div>
                    <p className="font-semibold">Anjali Mehta</p>
                    <p className="text-sm text-muted-foreground">Rhythms Dance Studio</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForAcademies;
