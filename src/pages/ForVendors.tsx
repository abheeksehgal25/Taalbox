import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign, TrendingUp, FileText, Upload } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "sonner";

const ForVendors = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    const message = `New Vendor Signup:
Business: ${data.business}
Address: ${data.address}
Contact: ${data.contact}
Email: ${data.email}
Description: ${data.description}`;
    
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Application sent! We'll contact you within 24 hours.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Grow Your Rental Business — List with NrityaReady
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our growing network of costume vendors. Earn extra revenue from your inventory while we handle booking, delivery, and customer support.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Why Partner with NrityaReady?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Extra Revenue Stream</h3>
                  <p className="text-sm text-muted-foreground">
                    Monetize your idle inventory. Earn rental income plus standby fees for backup clusters.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Grow Your Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to dance academies and event organizers you wouldn't reach otherwise.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Simple Terms</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear MoU with transparent revenue sharing. No hidden fees or complicated contracts.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* How It Works */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-display font-bold text-center mb-8">Simple Onboarding Process</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 text-white font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-2">Submit Application</h4>
                        <p className="text-sm text-muted-foreground">
                          Fill out the vendor signup form with your business details and sample photos of your top 20 SKUs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 text-white font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-2">Review & Agreement</h4>
                        <p className="text-sm text-muted-foreground">
                          We'll review your inventory and schedule a meeting to discuss terms. Sign our vendor MoU outlining revenue share and responsibilities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 text-white font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-2">Photography & Listing</h4>
                        <p className="text-sm text-muted-foreground">
                          We'll photograph your costumes (or use your professional photos) and list them on our platform with detailed descriptions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 text-white font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-2">Start Earning</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive bookings, coordinate logistics, and get paid! We handle customer service and payment processing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* MoU Download */}
            <div className="text-center mb-16">
              <Card className="max-w-2xl mx-auto border-2 border-primary">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-display font-bold mb-4">Download Sample MoU</h3>
                  <p className="text-muted-foreground mb-6">
                    Review our vendor agreement before applying. Transparent terms, fair revenue sharing.
                  </p>
                  <Button className="gradient-gold border-0 text-white">
                    <FileText className="mr-2 h-5 w-5" />
                    Download Vendor MoU (PDF)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold mb-4">List Your Costumes</h2>
                <p className="text-muted-foreground">
                  Join our vendor network and start earning from your costume inventory.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Name *</Label>
                      <Input id="business" name="business" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Business Address *</Label>
                      <Textarea id="address" name="address" required rows={2} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact">Contact Number *</Label>
                        <Input id="contact" name="contact" type="tel" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Describe Your Inventory *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Tell us about your costume collection, specialties, approximate inventory size..."
                        required
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="photos">Top 20 SKUs</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload photos of your top 20 costume pieces
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Or send them via WhatsApp after submission
                        </p>
                        <Input
                          id="photos"
                          name="photos"
                          type="file"
                          multiple
                          accept="image/*"
                          className="mt-4"
                        />
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-gold border-0 text-white">
                      Submit Vendor Application
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to be contacted by NrityaReady and accept our vendor terms.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-center mb-8">Vendor FAQs</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">What is the revenue split?</h3>
                    <p className="text-sm text-muted-foreground">
                      Standard split is 70% vendor, 30% NrityaReady. Higher volume vendors may qualify for better rates.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">What are standby fees?</h3>
                    <p className="text-sm text-muted-foreground">
                      Standby fees compensate vendors for holding backup costumes. Even if not rented, you earn a holding fee for being part of the backup cluster.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Who handles delivery and returns?</h3>
                    <p className="text-sm text-muted-foreground">
                      Typically coordinated by NrityaReady, but vendors can opt to handle their own logistics for nearby customers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">What if a costume gets damaged?</h3>
                    <p className="text-sm text-muted-foreground">
                      Customers pay deposits that cover damage. NrityaReady facilitates damage assessment and ensures fair compensation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForVendors;
