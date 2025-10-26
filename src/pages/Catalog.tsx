import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { costumes } from "@/data/costumes";
import { MapPin } from "lucide-react";

const Catalog = () => {
  const [mode, setMode] = useState<"rent" | "buy">("rent");
  const [selectedDanceForms, setSelectedDanceForms] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sortBy, setSortBy] = useState("popular");

  const danceForms = Array.from(new Set(costumes.map(c => c.danceForm)));

  const toggleDanceForm = (form: string) => {
    setSelectedDanceForms(prev =>
      prev.includes(form) ? prev.filter(f => f !== form) : [...prev, form]
    );
  };

  const filteredCostumes = costumes.filter(costume => {
    const price = mode === "rent" ? costume.rentPrice : costume.buyPrice;
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    const matchesDanceForm = selectedDanceForms.length === 0 || selectedDanceForms.includes(costume.danceForm);
    return matchesPrice && matchesDanceForm;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Costume Catalog</h1>
            <p className="text-xl text-muted-foreground">Browse our curated collection of classical dance costumes</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 space-y-6">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="font-display font-semibold mb-3">Rent or Buy</h3>
                    <Tabs value={mode} onValueChange={(v) => setMode(v as "rent" | "buy")}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="rent">Rent</TabsTrigger>
                        <TabsTrigger value="buy">Buy</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold mb-3">Dance Form</h3>
                    <div className="space-y-2">
                      {danceForms.map(form => (
                        <div key={form} className="flex items-center space-x-2">
                          <Checkbox
                            id={form}
                            checked={selectedDanceForms.includes(form)}
                            onCheckedChange={() => toggleDanceForm(form)}
                          />
                          <Label htmlFor={form} className="cursor-pointer">{form}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold mb-3">Price Range</h3>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={20000}
                      step={100}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold mb-3">Sort By</h3>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popular">Popular</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="new">Newest First</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedDanceForms([]);
                      setPriceRange([0, 20000]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-muted-foreground">
                  Showing {filteredCostumes.length} {mode === "rent" ? "rentals" : "costumes"}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCostumes.map((costume) => (
                  <Link key={costume.id} to={`/costume/${costume.id}`}>
                    <Card className="overflow-hidden hover-lift border-2 hover:border-gold transition-all h-full">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={costume.image}
                          alt={costume.title}
                          className="w-full h-full object-cover"
                        />
                        {costume.guaranteedBackup && (
                          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0">
                            Guaranteed Backup
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline">{costume.danceForm}</Badge>
                          <Badge variant="secondary" className="text-xs">{costume.styleTag}</Badge>
                        </div>
                        <h3 className="font-display font-semibold mb-2 line-clamp-2">{costume.title}</h3>
                        <div className="space-y-1 mb-3">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Rent</span>
                            <span className="font-semibold">₹{costume.rentPrice}/day</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Buy</span>
                            <span className="font-semibold">₹{costume.buyPrice}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {costume.location}
                          </span>
                          <span>{costume.sizes.join(", ")}</span>
                        </div>
                        <Button className="w-full mt-3 gradient-gold border-0 text-white">
                          {mode === "rent" ? "Rent Now" : "Buy Now"}
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
