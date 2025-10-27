import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Built by Dancers, for Dancers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passion project born from 12+ years of classical dance experience and countless costume headaches
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  TaalBox was born out of frustration — the kind every dancer knows too well. Last-minute costume disasters, ill-fitting rentals, and the anxiety of group performances where even one missing costume could derail the entire show.
                </p>
                
                <p className="text-lg text-muted-foreground mb-6">
                  As a Kathak dancer for over 12 years, I've experienced it all. The vendor who promised delivery but never showed up. The beautiful costume that looked nothing like its photo. The panic when a dancer's size changed a week before the recital. The sleepless nights wondering if we'd have enough costumes for the entire troupe.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  After choreographing my fifth annual day event, I realized: this shouldn't be so hard. Dance is about art, expression, and joy — not logistics nightmares. That's when TaalBox started taking shape.
                </p>

                <div className="my-12 p-8 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-xl font-display italic text-primary mb-2">
                    "What if every costume had a guaranteed backup? What if vendors and dancers could trust each other through a reliable platform?"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — The founding vision of TaalBox
                  </p>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  We started in Gurgaon because that's home. We know the dance academies here. We understand the challenges they face. And we're building a solution that actually works for the local dance community.
                </p>

                <p className="text-lg text-muted-foreground">
                  This is our pilot phase. We're learning, improving, and growing with every event. Our manual support might seem old-fashioned, but it ensures no dancer is left without their costume on performance day. As we scale, the technology will improve, but our commitment to reliability will never change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">Dancers First</h3>
                  <p className="text-muted-foreground">
                    Every decision we make starts with one question: "Does this help dancers focus on their art rather than logistics?"
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">Community Trust</h3>
                  <p className="text-muted-foreground">
                    Building trust between academies and vendors through transparency, reliability, and fair practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">Reliability</h3>
                  <p className="text-muted-foreground">
                    The backup guarantee isn't just marketing. It's our promise that your show will never be compromised by costume issues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">We're Still Growing</h2>
              <p className="text-lg text-muted-foreground mb-8">
                TaalBox is in its pilot phase, which means you're part of something special. Your feedback directly shapes how we build this platform. Every academy that trusts us, every vendor that partners with us, and every dancer that performs in our costumes is helping create a better future for the dance community.
              </p>
              <p className="text-lg text-muted-foreground">
                Thank you for being part of this journey. Together, we're making stage-ready looks accessible, reliable, and stress-free for everyone.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
