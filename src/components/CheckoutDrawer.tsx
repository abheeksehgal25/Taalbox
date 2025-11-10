import React, { useMemo, useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CostumeLite {
  _id?: string;
  id?: string;
  title?: string;
  rentPricePerDay?: number;
  rentPrice?: number;
  deposit?: number;
  buyPrice?: number;
}

export interface CheckoutDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  costume: CostumeLite | null | undefined;
  mode: "rent" | "buy";
}

const msPerDay = 1000 * 60 * 60 * 24;

export const CheckoutDrawer: React.FC<CheckoutDrawerProps> = ({ open, onOpenChange, costume, mode }) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const rentDays = useMemo(() => {
    if (!startDate || !endDate) return 1;
    const s = new Date(startDate).getTime();
    const e = new Date(endDate).getTime();
    if (isNaN(s) || isNaN(e) || e < s) return 1;
    return Math.max(1, Math.round((e - s) / msPerDay) + 1); // inclusive
  }, [startDate, endDate]);

  const rentPerDay = Number(costume?.rentPricePerDay || costume?.rentPrice || 0);
  const deposit = Number(costume?.deposit || 0);
  const buyPrice = Number(costume?.buyPrice || 0);

  const rentSubtotal = rentPerDay * rentDays;
  const total = mode === "rent" ? rentSubtotal + deposit : buyPrice;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle className="font-display text-2xl">{mode === "rent" ? "Rent" : "Buy"} "{costume?.title}"</DrawerTitle>
          <DrawerDescription className="text-sm">Fill in your details and review the {mode} summary.</DrawerDescription>
        </DrawerHeader>
        <div className="px-6 space-y-6">
          {mode === "rent" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" />
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-2 bg-muted/40">
            <h3 className="font-semibold">Summary</h3>
            {mode === "rent" ? (
              <ul className="text-sm space-y-1">
                <li className="flex justify-between"><span>Rent ({rentDays} day{rentDays>1?"s":""} @ ₹{rentPerDay})</span><span className="font-medium">₹{rentSubtotal}</span></li>
                <li className="flex justify-between"><span>Refundable Deposit</span><span className="font-medium">₹{deposit}</span></li>
                <li className="flex justify-between border-t pt-1 text-base"><span className="font-semibold">Total Due Now</span><span className="font-bold">₹{total}</span></li>
              </ul>
            ) : (
              <ul className="text-sm space-y-1">
                <li className="flex justify-between"><span>Costume Price</span><span className="font-medium">₹{buyPrice}</span></li>
                <li className="flex justify-between border-t pt-1 text-base"><span className="font-semibold">Total</span><span className="font-bold">₹{total}</span></li>
              </ul>
            )}
          </div>

          <div className="text-xs text-muted-foreground">
            By proceeding you agree to the rental/buy policies shown on the costume details page.
          </div>
        </div>
        <DrawerFooter className="flex flex-col gap-2">
          <Button className="w-full" disabled={!name || !email}>Proceed to Payment</Button>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CheckoutDrawer;
