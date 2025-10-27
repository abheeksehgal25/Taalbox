import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, DollarSign, Sparkles, TrendingUp, FileText, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "sonner";
import { useState } from "react";

const ForVendors = () => {
  const [agreedToMou, setAgreedToMou] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!agreedToMou) {
      toast.error("Please agree to the MoU terms to continue");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    const message = `New Vendor Signup:
Business: ${data.businessName}
Owner: ${data.ownerName}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.cityArea}
Bank Details: ${data.bankDetails}
Notes: ${data.notes || 'None'}

Sample photos and SKU CSV will be shared separately.`;
    
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Vendor signup submitted! We'll contact you within 24 hours.");
    e.currentTarget.reset();
    setAgreedToMou(false);
  };

  const handleDownloadMou = () => {
    toast.info("MoU download will be available soon. Please contact us for a copy.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Grow Your Rental Business — List with TaalBox
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with dance academies across Gurgaon. Earn standby fees and rental income with guaranteed payments.
            </p>
            <Button onClick={handleDownloadMou} size="lg" variant="outline">
              <Download className="mr-2 h-5 w-5" />
              Download Sample MoU
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Standby Fee</h3>
                  <p className="text-sm text-muted-foreground">Earn even when costumes are on backup. Get paid for reserving sets.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">More Bookings</h3>
                  <p className="text-sm text-muted-foreground">Access to academy network. Increase your costume utilization.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Zero Marketing</h3>
                  <p className="text-sm text-muted-foreground">We handle customer acquisition. You focus on quality costumes.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Simple Terms</h3>
                  <p className="text-sm text-muted-foreground">Clear MoU. Transparent pricing. Timely payouts.</p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-bold text-center mb-8">Vendor Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Standby fee for backup reservations", "Guaranteed payment protection", "Free professional photography", "Priority for bulk academy orders", "Damage insurance coverage", "Flexible pickup & delivery support", "Monthly performance reports", "Direct feedback from customers"].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold mb-4">List Your Costumes</h2>
                <p className="text-muted-foreground">Join our network of trusted vendors. Start earning more from your costume inventory.</p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input id="businessName" name="businessName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ownerName">Owner Name *</Label>
                        <Input id="ownerName" name="ownerName" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input id="phone" name="phone" type="tel" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cityArea">City / Area *</Label>
                      <Input id="cityArea" name="cityArea" placeholder="e.g., Sector 14, Gurgaon" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="samplePhotos">Sample Photos Upload *</Label>
                      <Input id="samplePhotos" name="samplePhotos" type="file" accept="image/*" multiple required />
                      <p className="text-xs text-muted-foreground">Upload 3-5 photos of your best costumes</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bankDetails">Bank Details (for payouts) *</Label>
                      <Textarea id="bankDetails" name="bankDetails" placeholder="Account Name, Account Number, IFSC Code, Bank Name" rows={3} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Information</Label>
                      <Textarea id="notes" name="notes" placeholder="Tell us about your business, specialty dance forms, etc." rows={3} />
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox id="agreeMou" checked={agreedToMou} onCheckedChange={(checked) => setAgreedToMou(checked as boolean)} />
                      <label htmlFor="agreeMou" className="text-sm text-muted-foreground cursor-pointer">
                        I agree to the TaalBox Vendor MoU terms and conditions *
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-gold border-0 text-white" disabled={!agreedToMou}>
                      Submit Vendor Signup
                    </Button>
                  </form>
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

export default ForVendors;
