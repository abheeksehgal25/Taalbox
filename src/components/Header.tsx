import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ mobile = false }) => (
    <>
      <Link
        to="/catalog"
        className={`${mobile ? 'block py-2' : ''} text-foreground hover:text-primary transition-colors font-medium`}
        onClick={() => mobile && setIsOpen(false)}
      >
        Catalog
      </Link>
      <Link
        to="/for-academies"
        className={`${mobile ? 'block py-2' : ''} text-foreground hover:text-primary transition-colors font-medium`}
        onClick={() => mobile && setIsOpen(false)}
      >
        For Academies
      </Link>
      <Link
        to="/for-vendors"
        className={`${mobile ? 'block py-2' : ''} text-foreground hover:text-primary transition-colors font-medium`}
        onClick={() => mobile && setIsOpen(false)}
      >
        For Vendors
      </Link>
      <Link
        to="/how-it-works"
        className={`${mobile ? 'block py-2' : ''} text-foreground hover:text-primary transition-colors font-medium`}
        onClick={() => mobile && setIsOpen(false)}
      >
        How It Works
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-2xl font-display font-bold text-primary">NrityaReady</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:inline-flex gradient-gold border-0 text-white font-semibold">
              <Link to="/get-quote">Plan My Group Look</Link>
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col space-y-4 mt-8">
                  <NavLinks mobile />
                  <Button asChild className="gradient-gold border-0 text-white font-semibold mt-4">
                    <Link to="/get-quote" onClick={() => setIsOpen(false)}>Plan My Group Look</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
