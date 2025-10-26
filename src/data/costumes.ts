export interface Costume {
  id: string;
  title: string;
  danceForm: string;
  styleTag: string;
  clusterTag: string;
  rentPrice: number;
  buyPrice: number;
  deposit: number;
  sizes: string[];
  location: string;
  guaranteedBackup: boolean;
  image: string;
  description: string;
  fabric: string;
  colors: string[];
  vendor: string;
}

export const costumes: Costume[] = [
  {
    id: "1",
    title: "Red Mughal Kathak Set — Mirrorwork",
    danceForm: "Kathak",
    styleTag: "Mughal",
    clusterTag: "Kathak_Mughal_Red_Flared",
    rentPrice: 1500,
    buyPrice: 12000,
    deposit: 2000,
    sizes: ["S", "M", "L", "XL"],
    location: "Gurgaon",
    guaranteedBackup: true,
    image: "/src/assets/costume-1.jpg",
    description: "Stunning red flared anarkali with intricate mirror work and gold embroidery. Perfect for Mughal-era Kathak performances. Includes matching dupatta and kamarbandh.",
    fabric: "Pure silk with mirror work",
    colors: ["Red", "Gold"],
    vendor: "Suraj Costumes"
  },
  {
    id: "2",
    title: "Green Traditional Kathak Set — Gold Border",
    danceForm: "Kathak",
    styleTag: "Traditional",
    clusterTag: "Kathak_Traditional_Green",
    rentPrice: 1200,
    buyPrice: 9000,
    deposit: 1500,
    sizes: ["S", "M", "L", "XL"],
    location: "Gurgaon",
    guaranteedBackup: true,
    image: "/src/assets/costume-2.jpg",
    description: "Elegant green anarkali with rich gold border detailing. Classic traditional style perfect for any Kathak performance.",
    fabric: "Georgette with embroidery",
    colors: ["Green", "Gold"],
    vendor: "Dance Couture"
  },
  {
    id: "3",
    title: "White Anarkali Kathak — Minimal Embroidery",
    danceForm: "Kathak",
    styleTag: "Minimal",
    clusterTag: "Kathak_Minimal_White",
    rentPrice: 1000,
    buyPrice: 7500,
    deposit: 1200,
    sizes: ["S", "M", "L", "XL"],
    location: "Gurgaon",
    guaranteedBackup: false,
    image: "/src/assets/costume-3.jpg",
    description: "Pure white anarkali with subtle embroidery. Ideal for minimalist choreography or devotional pieces.",
    fabric: "Cotton silk blend",
    colors: ["White", "Silver"],
    vendor: "Natyam Designs"
  },
  {
    id: "4",
    title: "Black Temple Bharatanatyam Set — Zari Work",
    danceForm: "Bharatanatyam",
    styleTag: "Temple",
    clusterTag: "Bharat_Temple_Black",
    rentPrice: 1400,
    buyPrice: 11000,
    deposit: 1800,
    sizes: ["S", "M", "L"],
    location: "Gurgaon",
    guaranteedBackup: true,
    image: "/src/assets/costume-4.jpg",
    description: "Traditional black Bharatanatyam costume with gold zari work. Includes full jewelry set: temple necklace, earrings, and waist belt.",
    fabric: "Kanchipuram silk",
    colors: ["Black", "Gold"],
    vendor: "South Heritage"
  },
  {
    id: "5",
    title: "Yellow Folk Fusion Set — Lightweight",
    danceForm: "Fusion",
    styleTag: "Folk",
    clusterTag: "Fusion_Yellow",
    rentPrice: 900,
    buyPrice: 6000,
    deposit: 1000,
    sizes: ["S", "M", "L", "XL"],
    location: "Gurgaon",
    guaranteedBackup: false,
    image: "/src/assets/costume-5.jpg",
    description: "Bright yellow folk-fusion costume. Lightweight and comfortable for contemporary choreography.",
    fabric: "Cotton blend",
    colors: ["Yellow", "Orange"],
    vendor: "Modern Dance Co"
  },
  {
    id: "6",
    title: "Maroon Lehenga + Kamarbandh — Heavy Mirror",
    danceForm: "Kathak",
    styleTag: "Heavy Work",
    clusterTag: "Kathak_Mirror_Maroon",
    rentPrice: 1800,
    buyPrice: 14000,
    deposit: 2500,
    sizes: ["S", "M", "L"],
    location: "Gurgaon",
    guaranteedBackup: true,
    image: "/src/assets/costume-6.jpg",
    description: "Luxurious maroon lehenga with heavy mirror work. Includes ornate kamarbandh. Perfect for grand performances.",
    fabric: "Velvet with mirror embellishments",
    colors: ["Maroon", "Gold"],
    vendor: "Suraj Costumes"
  },
  {
    id: "7",
    title: "Blue Mughal Kathak (backup cluster)",
    danceForm: "Kathak",
    styleTag: "Mughal",
    clusterTag: "Kathak_Mughal_Blue",
    rentPrice: 1500,
    buyPrice: 12500,
    deposit: 2000,
    sizes: ["S", "M", "L", "XL"],
    location: "Gurgaon",
    guaranteedBackup: true,
    image: "/src/assets/costume-7.jpg",
    description: "Royal blue Mughal-style Kathak costume. Part of backup cluster for reliability. Elaborate embroidery throughout.",
    fabric: "Silk with embroidery",
    colors: ["Blue", "Silver"],
    vendor: "Dance Couture"
  },
  {
    id: "8",
    title: "Silver-thread Odissi Set — Bhakti",
    danceForm: "Odissi",
    styleTag: "Bhakti",
    clusterTag: "Odissi_Silver",
    rentPrice: 1600,
    buyPrice: 13000,
    deposit: 2200,
    sizes: ["S", "M", "L"],
    location: "Gurgaon",
    guaranteedBackup: false,
    image: "/src/assets/costume-8.jpg",
    description: "Traditional Odissi costume with delicate silver thread work. Ideal for devotional Odissi performances.",
    fabric: "Tussar silk",
    colors: ["Cream", "Silver"],
    vendor: "Eastern Traditions"
  },
  {
    id: "9",
    title: "Purple Stage Saree — Contemporary Kathak",
    danceForm: "Kathak",
    styleTag: "Contemporary",
    clusterTag: "Kathak_Contemporary_Purple",
    rentPrice: 1100,
    buyPrice: 8000,
    deposit: 1400,
    sizes: ["Free Size"],
    location: "Gurgaon",
    guaranteedBackup: false,
    image: "/src/assets/costume-9.jpg",
    description: "Modern purple stage saree for contemporary Kathak. Pre-stitched for easy wearing and movement.",
    fabric: "Georgette",
    colors: ["Purple", "Black"],
    vendor: "Modern Dance Co"
  },
  {
    id: "10",
    title: "Gold Bridal-style Kathak Set — Heavywork",
    danceForm: "Kathak",
    styleTag: "Bridal",
    clusterTag: "Kathak_Bridal_Gold",
    rentPrice: 2000,
    buyPrice: 16000,
    deposit: 3000,
    sizes: ["S", "M", "L"],
    location: "Gurgaon",
    guaranteedBackup: true,
    image: "/src/assets/costume-10.jpg",
    description: "Opulent gold bridal-style Kathak costume with heavy embellishments. Show-stopping piece for grand finales.",
    fabric: "Heavy silk with stone work",
    colors: ["Gold", "Red"],
    vendor: "Suraj Costumes"
  }
];
