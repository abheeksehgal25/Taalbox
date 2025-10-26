import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in NrityaReady costume rentals.");
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg gradient-gold border-0 hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
