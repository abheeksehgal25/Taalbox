import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    const message = `Contact Form Submission:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}
Message: ${data.message}`;
    
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Message sent! We'll get back to you soon.");
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? Need a custom quote? We're here to help make your performance a success.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold mb-2">WhatsApp</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Fastest way to reach us
                        </p>
                        <Button
                          variant="link"
                          className="h-auto p-0 text-primary"
                          onClick={() => window.open('https://wa.me/919999999999', '_blank')}
                        >
                          +91 99999 99999
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold mb-2">Phone</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Mon-Sat, 10 AM - 7 PM
                        </p>
                        <a href="tel:+919999999999" className="text-primary hover:underline">
                          +91 99999 99999
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold mb-2">Email</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          We'll respond within 24 hours
                        </p>
                        <a href="mailto:hello@taalbox.com" className="text-primary hover:underline">
                          hello@taalbox.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold mb-2">Service Area</h3>
                        <p className="text-sm text-muted-foreground">
                          Gurgaon & surrounding areas
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input id="name" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" name="email" type="email" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" name="subject" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your event, costume needs, or any questions you have..."
                          required
                          rows={6}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full gradient-gold border-0 text-white">
                        Send Message
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        By submitting this form, you agree to be contacted by TaalBox.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-display font-bold mb-8">Looking for Something Specific?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="hover-lift cursor-pointer" onClick={() => window.location.href = '/for-academies'}>
                  <CardContent className="pt-6">
                    <h3 className="font-display font-semibold mb-2">Academy Bookings</h3>
                    <p className="text-sm text-muted-foreground">
                      Bulk orders, pilot offers, demo requests
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-lift cursor-pointer" onClick={() => window.location.href = '/for-vendors'}>
                  <CardContent className="pt-6">
                    <h3 className="font-display font-semibold mb-2">Vendor Partnership</h3>
                    <p className="text-sm text-muted-foreground">
                      List your costumes, MoU details
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-lift cursor-pointer" onClick={() => window.location.href = '/how-it-works'}>
                  <CardContent className="pt-6">
                    <h3 className="font-display font-semibold mb-2">How It Works</h3>
                    <p className="text-sm text-muted-foreground">
                      Process, policies, FAQs
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

export default Contact;
