import img1 from "@/assets/costume-1.jpg";
import img2 from "@/assets/costume-2.jpg";
import img3 from "@/assets/costume-3.jpg";
import img4 from "@/assets/costume-4.jpg";
import img5 from "@/assets/costume-5.jpg";
import img6 from "@/assets/costume-6.jpg";
import img7 from "@/assets/costume-7.jpg";
import img8 from "@/assets/costume-8.jpg";
import img9 from "@/assets/costume-9.jpg";
import img10 from "@/assets/costume-10.jpg";

export interface Costume {
  id: string;
  title: string;
  vendorId?: string;
  danceForm: string;
  clusterTag: string;
  colorFamily: string[];
  styleEra: string;
  fabric: string;
  setCount: number;
  sizesAvailable: string[];
  rentPricePerDay: number;
  buyPrice: number;
  deposit: number;
  leadTimeDays: number;
  photos: string[];
  location: string;
  availabilityStatus: 'available' | 'reserved' | 'unavailable';
  backupAvailable: boolean;
  description: string;
  vendor: string;
  
  // Legacy fields for backward compatibility
  styleTag?: string;
  rentPrice?: number;
  sizes?: string[];
  guaranteedBackup?: boolean;
  image?: string;
  colors?: string[];
}

export const costumes: Costume[] = [
  {
    id: "1",
    title: "Red Mughal Kathak Set — Mirrorwork",
    danceForm: "Kathak",
    styleEra: "Mughal",
    clusterTag: "Kathak_Mughal_Red_Flared",
    colorFamily: ["Red", "Gold"],
    fabric: "Pure silk with mirror work",
    setCount: 3,
    sizesAvailable: ["S", "M", "L", "XL"],
    rentPricePerDay: 1500,
    buyPrice: 12000,
    deposit: 2000,
    leadTimeDays: 2,
  photos: [img1],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: true,
    description: "Stunning red flared anarkali with intricate mirror work and gold embroidery. Perfect for Mughal-era Kathak performances. Includes matching dupatta and kamarbandh.",
    vendor: "Suraj Costumes",
    // Legacy fields
    styleTag: "Mughal",
    rentPrice: 1500,
    sizes: ["S", "M", "L", "XL"],
    guaranteedBackup: true,
  image: img1,
    colors: ["Red", "Gold"]
  },
  {
    id: "2",
    title: "Green Traditional Kathak Set — Gold Border",
    danceForm: "Kathak",
    styleEra: "Traditional",
    clusterTag: "Kathak_Traditional_Green",
    colorFamily: ["Green", "Gold"],
    fabric: "Georgette with embroidery",
    setCount: 3,
    sizesAvailable: ["S", "M", "L", "XL"],
    rentPricePerDay: 1200,
    buyPrice: 9000,
    deposit: 1500,
    leadTimeDays: 2,
  photos: [img2],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: true,
    description: "Elegant green anarkali with rich gold border detailing. Classic traditional style perfect for any Kathak performance.",
    vendor: "Dance Couture",
    // Legacy fields
    styleTag: "Traditional",
    rentPrice: 1200,
    sizes: ["S", "M", "L", "XL"],
    guaranteedBackup: true,
  image: img2,
    colors: ["Green", "Gold"]
  },
  {
    id: "3",
    title: "White Anarkali Kathak — Minimal Embroidery",
    danceForm: "Kathak",
    styleEra: "Minimal",
    clusterTag: "Kathak_Minimal_White",
    colorFamily: ["White", "Silver"],
    fabric: "Cotton silk blend",
    setCount: 3,
    sizesAvailable: ["S", "M", "L", "XL"],
    rentPricePerDay: 1000,
    buyPrice: 7500,
    deposit: 1200,
    leadTimeDays: 2,
  photos: [img3],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: false,
    description: "Pure white anarkali with subtle embroidery. Ideal for minimalist choreography or devotional pieces.",
    vendor: "Natyam Designs",
    // Legacy fields
    styleTag: "Minimal",
    rentPrice: 1000,
    sizes: ["S", "M", "L", "XL"],
    guaranteedBackup: false,
  image: img3,
    colors: ["White", "Silver"]
  },
  {
    id: "4",
    title: "Black Temple Bharatanatyam Set — Zari Work",
    danceForm: "Bharatanatyam",
    styleEra: "Temple",
    clusterTag: "Bharat_Temple_Black",
    colorFamily: ["Black", "Gold"],
    fabric: "Kanchipuram silk",
    setCount: 3,
    sizesAvailable: ["S", "M", "L"],
    rentPricePerDay: 1400,
    buyPrice: 11000,
    deposit: 1800,
    leadTimeDays: 2,
  photos: [img4],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: true,
    description: "Traditional black Bharatanatyam costume with gold zari work. Includes full jewelry set: temple necklace, earrings, and waist belt.",
    vendor: "South Heritage",
    // Legacy fields
    styleTag: "Temple",
    rentPrice: 1400,
    sizes: ["S", "M", "L"],
    guaranteedBackup: true,
  image: img4,
    colors: ["Black", "Gold"]
  },
  {
    id: "5",
    title: "Yellow Folk Fusion Set — Lightweight",
    danceForm: "Fusion",
    styleEra: "Folk",
    clusterTag: "Fusion_Yellow",
    colorFamily: ["Yellow", "Orange"],
    fabric: "Cotton blend",
    setCount: 3,
    sizesAvailable: ["S", "M", "L", "XL"],
    rentPricePerDay: 900,
    buyPrice: 6000,
    deposit: 1000,
    leadTimeDays: 2,
  photos: [img5],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: false,
    description: "Bright yellow folk-fusion costume. Lightweight and comfortable for contemporary choreography.",
    vendor: "Modern Dance Co",
    // Legacy fields
    styleTag: "Folk",
    rentPrice: 900,
    sizes: ["S", "M", "L", "XL"],
    guaranteedBackup: false,
  image: img5,
    colors: ["Yellow", "Orange"]
  },
  {
    id: "6",
    title: "Maroon Lehenga + Kamarbandh — Heavy Mirror",
    danceForm: "Kathak",
    styleEra: "Heavy Work",
    clusterTag: "Kathak_Mirror_Maroon",
    colorFamily: ["Maroon", "Gold"],
    fabric: "Velvet with mirror embellishments",
    setCount: 3,
    sizesAvailable: ["S", "M", "L"],
    rentPricePerDay: 1800,
    buyPrice: 14000,
    deposit: 2500,
    leadTimeDays: 2,
  photos: [img6],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: true,
    description: "Luxurious maroon lehenga with heavy mirror work. Includes ornate kamarbandh. Perfect for grand performances.",
    vendor: "Suraj Costumes",
    // Legacy fields
    styleTag: "Heavy Work",
    rentPrice: 1800,
    sizes: ["S", "M", "L"],
    guaranteedBackup: true,
  image: img6,
    colors: ["Maroon", "Gold"]
  },
  {
    id: "7",
    title: "Blue Mughal Kathak (backup cluster)",
    danceForm: "Kathak",
    styleEra: "Mughal",
    clusterTag: "Kathak_Mughal_Blue",
    colorFamily: ["Blue", "Silver"],
    fabric: "Silk with embroidery",
    setCount: 3,
    sizesAvailable: ["S", "M", "L", "XL"],
    rentPricePerDay: 1500,
    buyPrice: 12500,
    deposit: 2000,
    leadTimeDays: 2,
  photos: [img7],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: true,
    description: "Royal blue Mughal-style Kathak costume. Part of backup cluster for reliability. Elaborate embroidery throughout.",
    vendor: "Dance Couture",
    // Legacy fields
    styleTag: "Mughal",
    rentPrice: 1500,
    sizes: ["S", "M", "L", "XL"],
    guaranteedBackup: true,
  image: img7,
    colors: ["Blue", "Silver"]
  },
  {
    id: "8",
    title: "Silver-thread Odissi Set — Bhakti",
    danceForm: "Odissi",
    styleEra: "Bhakti",
    clusterTag: "Odissi_Silver",
    colorFamily: ["Cream", "Silver"],
    fabric: "Tussar silk",
    setCount: 3,
    sizesAvailable: ["S", "M", "L"],
    rentPricePerDay: 1600,
    buyPrice: 13000,
    deposit: 2200,
    leadTimeDays: 2,
  photos: [img8],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: false,
    description: "Traditional Odissi costume with delicate silver thread work. Ideal for devotional Odissi performances.",
    vendor: "Eastern Traditions",
    // Legacy fields
    styleTag: "Bhakti",
    rentPrice: 1600,
    sizes: ["S", "M", "L"],
    guaranteedBackup: false,
  image: img8,
    colors: ["Cream", "Silver"]
  },
  {
    id: "9",
    title: "Purple Stage Saree — Contemporary Kathak",
    danceForm: "Kathak",
    styleEra: "Contemporary",
    clusterTag: "Kathak_Contemporary_Purple",
    colorFamily: ["Purple", "Black"],
    fabric: "Georgette",
    setCount: 1,
    sizesAvailable: ["Free Size"],
    rentPricePerDay: 1100,
    buyPrice: 8000,
    deposit: 1400,
    leadTimeDays: 2,
  photos: [img9],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: false,
    description: "Modern purple stage saree for contemporary Kathak. Pre-stitched for easy wearing and movement.",
    vendor: "Modern Dance Co",
    // Legacy fields
    styleTag: "Contemporary",
    rentPrice: 1100,
    sizes: ["Free Size"],
    guaranteedBackup: false,
  image: img9,
    colors: ["Purple", "Black"]
  },
  {
    id: "10",
    title: "Gold Bridal-style Kathak Set — Heavywork",
    danceForm: "Kathak",
    styleEra: "Bridal",
    clusterTag: "Kathak_Bridal_Gold",
    colorFamily: ["Gold", "Red"],
    fabric: "Heavy silk with stone work",
    setCount: 3,
    sizesAvailable: ["S", "M", "L"],
    rentPricePerDay: 2000,
    buyPrice: 16000,
    deposit: 3000,
    leadTimeDays: 2,
  photos: [img10],
    location: "Gurgaon",
    availabilityStatus: 'available',
    backupAvailable: true,
    description: "Opulent gold bridal-style Kathak costume with heavy embellishments. Show-stopping piece for grand finales.",
    vendor: "Suraj Costumes",
    // Legacy fields
    styleTag: "Bridal",
    rentPrice: 2000,
    sizes: ["S", "M", "L"],
    guaranteedBackup: true,
  image: img10,
    colors: ["Gold", "Red"]
  }
];
