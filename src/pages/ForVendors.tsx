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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreedToMou) {
      toast.error("Please agree to the MoU terms to continue");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Extract files separately
    const files = formData.getAll("samplePhotos") as File[];
    if (files.length === 0) {
      toast.error("Please upload at least one photo");
      return;
    }

    // Create multipart FormData for the request
    const requestData = new FormData();
    
    // Add form fields
    requestData.append("name", formData.get("businessName") as string);
    requestData.append("email", formData.get("email") as string);
    requestData.append("phone", formData.get("phone") as string);
    requestData.append("city", formData.get("cityArea") as string);
    requestData.append("address", formData.get("address") || "");

    // Add files
    files.forEach((file) => {
      requestData.append("samplePhotos", file);
    });

    // Add inventory as JSON string
    // Build rich inventory item from form inputs
    const toBool = (v: FormDataEntryValue | null) => {
      const s = String(v || "").toLowerCase().trim();
      return s === "true" || s === "yes" || s === "1";
    };
    const toNum = (v: FormDataEntryValue | null) => {
      const n = Number(v);
      return isNaN(n) ? undefined : n;
    };
    const toArray = (v: FormDataEntryValue | null) =>
      String(v || "")
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);

    const inventory = [
      {
        title: `${formData.get("businessName")} — Sample Set`,
        danceForm: formData.get("danceForm") || "Unknown",
        styleTag: formData.get("styleTag") || "",
        description: formData.get("description") || "",
        location: formData.get("cityArea") || "",
        sizesAvailable: toArray(formData.get("sizesAvailable")),
        fabric: formData.get("fabric") || "",
        colorFamily: toArray(formData.get("colorFamily")),
        rentPricePerDay: toNum(formData.get("rentPricePerDay")) ?? 0,
        buyPrice: toNum(formData.get("buyPrice")) ?? 0,
        deposit: toNum(formData.get("deposit")),
        leadTimeDays: toNum(formData.get("leadTimeDays")),
        availabilityStatus: (formData.get("availabilityStatus") as string) || "available",
        rentalMinDays: toNum(formData.get("rentalMinDays")),
        rentalMaxDays: toNum(formData.get("rentalMaxDays")),
        bookingNotes: formData.get("bookingNotes") || "",
        adjustable: toBool(formData.get("adjustable")),
        fitNotes: formData.get("fitNotes") || "",
        alterationsIncluded: toBool(formData.get("alterationsIncluded")),
        damagePolicy: formData.get("damagePolicy") || "",
        returnPolicy: formData.get("returnPolicy") || "",
        backupAvailable: true,
      },
    ];
    requestData.append("inventory", JSON.stringify(inventory));

    try {
      const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
      const res = await fetch(`${base}/api/vendors`, {
        method: "POST",
        body: requestData, // Don't set Content-Type header; browser will set it to multipart/form-data
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to submit vendor signup");
      }

      toast.success("Vendor signup submitted — your inventory is now listed in the catalog.");
      form.reset();
      setAgreedToMou(false);
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.error(error);
      toast.error(error.message || "Submission failed. Please try again.");
    }
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
                  <form onSubmit={handleSubmit} className="space-y-10">
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

                    {/* Inventory Details Section */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-display font-semibold">Inventory Item (Sample)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="danceForm">Dance Form *</Label>
                          <Input id="danceForm" name="danceForm" placeholder="e.g., Bharatanatyam" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="styleTag">Style Tag</Label>
                          <Input id="styleTag" name="styleTag" placeholder="Traditional / Fusion" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" name="description" rows={3} placeholder="Brief description of this costume set" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="sizesAvailable">Sizes (comma separated)</Label>
                          <Input id="sizesAvailable" name="sizesAvailable" placeholder="S,M,L" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="fabric">Fabric</Label>
                          <Input id="fabric" name="fabric" placeholder="Silk, Cotton" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="colorFamily">Colors (comma separated)</Label>
                          <Input id="colorFamily" name="colorFamily" placeholder="Maroon, Gold" />
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="space-y-4">
                        <h4 className="font-semibold">Pricing</h4>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="rentPricePerDay">Rent / Day (₹)</Label>
                            <Input id="rentPricePerDay" name="rentPricePerDay" type="number" min="0" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="buyPrice">Buy Price (₹)</Label>
                            <Input id="buyPrice" name="buyPrice" type="number" min="0" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="deposit">Deposit (₹)</Label>
                            <Input id="deposit" name="deposit" type="number" min="0" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="leadTimeDays">Lead Time (days)</Label>
                            <Input id="leadTimeDays" name="leadTimeDays" type="number" min="0" />
                          </div>
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="space-y-4">
                        <h4 className="font-semibold">Availability & Booking</h4>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="availabilityStatus">Status</Label>
                            <Input id="availabilityStatus" name="availabilityStatus" placeholder="available" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="rentalMinDays">Min Days</Label>
                            <Input id="rentalMinDays" name="rentalMinDays" type="number" min="1" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="rentalMaxDays">Max Days</Label>
                            <Input id="rentalMaxDays" name="rentalMaxDays" type="number" min="1" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="bookingNotes">Booking Notes</Label>
                            <Input id="bookingNotes" name="bookingNotes" placeholder="Book 48h in advance" />
                          </div>
                        </div>
                      </div>

                      {/* Fit & Alterations */}
                      <div className="space-y-4">
                        <h4 className="font-semibold">Fit & Alterations</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="adjustable">Adjustable?</Label>
                            <Input id="adjustable" name="adjustable" placeholder="yes/no" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="fitNotes">Fit Notes</Label>
                            <Input id="fitNotes" name="fitNotes" placeholder="Tie-back blouse" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="alterationsIncluded">Alterations Included?</Label>
                            <Input id="alterationsIncluded" name="alterationsIncluded" placeholder="yes/no" />
                          </div>
                        </div>
                      </div>

                      {/* Policies */}
                      <div className="space-y-4">
                        <h4 className="font-semibold">Policies</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="damagePolicy">Damage Policy</Label>
                            <Textarea id="damagePolicy" name="damagePolicy" rows={2} placeholder="Normal wear ok; tears billed." />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="returnPolicy">Return Policy</Label>
                            <Textarea id="returnPolicy" name="returnPolicy" rows={2} placeholder="Return within 24h." />
                          </div>
                        </div>
                      </div>
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
                      Submit Vendor & Sample Inventory
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
