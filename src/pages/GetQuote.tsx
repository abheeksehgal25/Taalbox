import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "sonner";

const GetQuote = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    const message = `Custom Quote Request:
Name: ${data.name}
Contact: ${data.contact}
Email: ${data.email}
Event Date: ${data.eventDate}
Event Type: ${data.eventType}
Number of Dancers: ${data.dancerCount}
Dance Form: ${data.danceForm}
Theme/Style: ${data.theme}
Costume Preference: ${data.preference}
Additional Notes: ${data.notes}`;
    
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Quote request sent! We'll get back to you within 24 hours.");
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
              Plan My Group Look
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your event and we'll create a custom costume plan with pricing, backup options, and delivery details.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Details */}
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-4">Your Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input id="name" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact">Contact Number *</Label>
                          <Input id="contact" name="contact" type="tel" required />
                        </div>
                      </div>
                      <div className="space-y-2 mt-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" />
                      </div>
                    </div>

                    {/* Event Details */}
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-4">Event Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="eventDate">Event Date *</Label>
                          <Input id="eventDate" name="eventDate" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventType">Event Type *</Label>
                          <Select name="eventType" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="annual-day">Annual Day / School Event</SelectItem>
                              <SelectItem value="competition">Dance Competition</SelectItem>
                              <SelectItem value="recital">Solo/Group Recital</SelectItem>
                              <SelectItem value="wedding">Wedding Performance</SelectItem>
                              <SelectItem value="festival">Festival / Cultural Event</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Costume Requirements */}
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-4">Costume Requirements</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dancerCount">Number of Dancers *</Label>
                          <Input id="dancerCount" name="dancerCount" type="number" min="1" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="danceForm">Dance Form *</Label>
                          <Select name="danceForm" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select dance form" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kathak">Kathak</SelectItem>
                              <SelectItem value="bharatanatyam">Bharatanatyam</SelectItem>
                              <SelectItem value="odissi">Odissi</SelectItem>
                              <SelectItem value="kuchipudi">Kuchipudi</SelectItem>
                              <SelectItem value="folk">Folk / Regional</SelectItem>
                              <SelectItem value="fusion">Fusion / Contemporary</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <Label htmlFor="theme">Theme / Style Preferences *</Label>
                        <Input
                          id="theme"
                          name="theme"
                          placeholder="e.g., Mughal theme, traditional colors, minimal embroidery..."
                          required
                        />
                      </div>

                      <div className="space-y-2 mt-4">
                        <Label htmlFor="preference">Rental or Purchase? *</Label>
                        <Select name="preference" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rent">Rent Only</SelectItem>
                            <SelectItem value="buy">Purchase Only</SelectItem>
                            <SelectItem value="mix">Mix of Rental and Purchase</SelectItem>
                            <SelectItem value="undecided">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Any specific size requirements, color preferences, budget constraints, or special requests?"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-gold border-0 text-white">
                      Get Custom Quote
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">
                        We'll send you a detailed quote within 24 hours including:
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                        <span>• Costume options with photos</span>
                        <span>• Pricing breakdown</span>
                        <span>• Backup availability</span>
                        <span>• Delivery schedule</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Why Get a Quote */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-display font-semibold mb-2">Customized Options</h3>
                    <p className="text-sm text-muted-foreground">
                      Curated costume selections that match your specific theme and requirements
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-display font-semibold mb-2">Bulk Pricing</h3>
                    <p className="text-sm text-muted-foreground">
                      Special rates for group bookings. The more dancers, the better the deal
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-display font-semibold mb-2">No Commitment</h3>
                    <p className="text-sm text-muted-foreground">
                      Free quote with no obligation. Review options and pricing before deciding
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

export default GetQuote;
