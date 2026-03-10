export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  price: number;
  description: string;
  careLevel: "Easy" | "Moderate" | "Advanced";
  lightRequirement: string;
  waterRequirement: string;
  nurseryId: string;
  image: string;
  inStock: boolean;
}

export interface Nursery {
  id: string;
  name: string;
  location: string;
  rating: number;
  description: string;
  phone: string;
  email: string;
  specialties: string[];
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  items: CartItem[];
  totalAmount: number;
  status: "pending" | "packed" | "delivered";
  orderDate: string;
  deliveryPersonNotified: boolean;
}

export const nurseries: Nursery[] = [
  {
    id: "n1",
    name: "Ugaoo Nursery",
    location: "Pune, Maharashtra, India",
    rating: 4.8,
    description:
      "Popular Indian nursery known for indoor plants, seeds, and gardening supplies.",
    phone: "+91 98765 43210",
    email: "support@ugaoo.com",
    specialties: ["Indoor Plants", "Seeds", "Gardening Tools"],
  },
  {
    id: "n2",
    name: "Trust Basket Plants",
    location: "Bangalore, Karnataka, India",
    rating: 4.6,
    description:
      "Well-known online plant nursery offering seeds, planters, and organic gardening products.",
    phone: "+91 99876 54321",
    email: "care@trustbasket.com",
    specialties: ["Flowering Plants", "Vegetable Seeds", "Planters"],
  },
  {
    id: "n3",
    name: "NurseryLive",
    location: "Mumbai, Maharashtra, India",
    rating: 4.7,
    description:
      "One of India’s largest online nurseries with a wide range of plants and gardening accessories.",
    phone: "+91 91234 56789",
    email: "support@nurserylive.com",
    specialties: ["Indoor Plants", "Air Purifying Plants", "Garden Decor"],
  },
  {
    id: "n4",
    name: "MyBageecha",
    location: "Bangalore, Karnataka, India",
    rating: 4.7,
    description:
      "Premium gardening store known for exotic plants and stylish planters.",
    phone: "+91 90123 45678",
    email: "hello@mybageecha.com",
    specialties: ["Exotic Plants", "Terrariums", "Garden Decor"],
  },
  {
    id: "n5",
    name: "GreenGrower Garden Center",
    location: "Delhi, India",
    rating: 4.5,
    description:
      "Local nursery providing herbs, flowering plants, and terrace gardening solutions.",
    phone: "+91 93456 78901",
    email: "info@greengrower.in",
    specialties: ["Herbs", "Flowering Plants", "Terrace Gardening"],
  },
  {
    id: "n6",
    name: "Indore Plant Nursery",
    location: "Indore, Madhya Pradesh, India",
    rating: 4.6,
    description:
      "Local nursery offering ornamental plants, fruit plants, and gardening materials.",
    phone: "+91 97531 24680",
    email: "contact@indorenursery.in",
    specialties: ["Fruit Plants", "Ornamental Plants", "Outdoor Plants"],
  },
];

export const plants: Plant[] = [
  {
    id: "p1",
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    category: "Indoor",
    price: 29.99,
    description:
      "Popular tropical plant with beautiful split leaves. Perfect for bright, indirect light.",
    careLevel: "Easy",
    lightRequirement: "Bright indirect light",
    waterRequirement: "Weekly",
    nurseryId: "n1",
    image:
      "https://images.unsplash.com/photo-1648528203163-8604bf696e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50JTIwaW5kb29yfGVufDF8fHx8MTc3MDE0NTM2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p2",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    category: "Indoor",
    price: 19.99,
    description:
      "Low-maintenance air-purifying plant. Tolerates low light and irregular watering.",
    careLevel: "Easy",
    lightRequirement: "Low to bright light",
    waterRequirement: "Every 2-3 weeks",
    nurseryId: "n1",
    image:
      "https://images.unsplash.com/photo-1613498630970-f2a333cb4974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFrZSUyMHBsYW50JTIwc2Fuc2V2aWVyaWF8ZW58MXx8fHwxNzcwMTE4MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p3",
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    category: "Indoor",
    price: 24.99,
    description:
      "Elegant flowering plant with white blooms. Excellent air purifier.",
    careLevel: "Easy",
    lightRequirement: "Low to moderate light",
    waterRequirement: "Weekly",
    nurseryId: "n1",
    image:
      "https://images.unsplash.com/photo-1701835427833-fc45547b8cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZSUyMGxpbHklMjB3aGl0ZSUyMGZsb3dlcnxlbnwxfHx8fDE3NzAxOTY0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p4",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    category: "Indoor",
    price: 45.99,
    description:
      "Statement plant with large, violin-shaped leaves. Needs consistent care.",
    careLevel: "Moderate",
    lightRequirement: "Bright indirect light",
    waterRequirement: "Weekly",
    nurseryId: "n1",
    image:
      "https://images.unsplash.com/photo-1673297352939-e308a901b5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWRkbGUlMjBsZWFmJTIwZmlnJTIwdHJlZXxlbnwxfHx8fDE3NzAxMzQ2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p5",
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    category: "Indoor",
    price: 15.99,
    description:
      "Easy-care trailing plant. Great for beginners and low-light spaces.",
    careLevel: "Easy",
    lightRequirement: "Low to bright light",
    waterRequirement: "Weekly",
    nurseryId: "n1",
    image:
      "https://images.unsplash.com/photo-1764271728253-d381475517bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3Rob3MlMjBwbGFudCUyMHRyYWlsaW5nfGVufDF8fHx8MTc3MDE5NjQzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p6",
    name: "Lavender",
    scientificName: "Lavandula",
    category: "Flowering",
    price: 18.99,
    description:
      "Fragrant flowering herb. Perfect for gardens and aromatherapy.",
    careLevel: "Moderate",
    lightRequirement: "Full sun",
    waterRequirement: "Moderate",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1654799564991-663428f6bcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMHB1cnBsZSUyMGZsb3dlcnN8ZW58MXx8fHwxNzcwMTUwMTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p7",
    name: "Rosemary",
    scientificName: "Rosmarinus officinalis",
    category: "Herbs",
    price: 12.99,
    description:
      "Aromatic culinary herb. Great for cooking and medicinal uses.",
    careLevel: "Easy",
    lightRequirement: "Full sun",
    waterRequirement: "Moderate",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1702131193140-703fb886b194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlbWFyeSUyMGhlcmIlMjBwbGFudHxlbnwxfHx8fDE3NzAxOTY0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p8",
    name: "Basil",
    scientificName: "Ocimum basilicum",
    category: "Herbs",
    price: 9.99,
    description:
      "Essential culinary herb. Perfect for fresh cooking and pesto.",
    careLevel: "Easy",
    lightRequirement: "Full sun",
    waterRequirement: "Regular",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1577356938906-79375b81b3b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNpbCUyMGhlcmIlMjBncmVlbnxlbnwxfHx8fDE3NzAxOTY0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p9",
    name: "Cherry Tomato",
    scientificName: "Solanum lycopersicum",
    category: "Vegetables",
    price: 14.99,
    description:
      "Compact tomato plant perfect for home gardens. Produces sweet cherry tomatoes.",
    careLevel: "Moderate",
    lightRequirement: "Full sun",
    waterRequirement: "Daily",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1665503451366-aba9a268a3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjB0b21hdG8lMjBwbGFudHxlbnwxfHx8fDE3NzAwODM1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p10",
    name: "Jade Plant",
    scientificName: "Crassula ovata",
    category: "Succulents",
    price: 16.99,
    description:
      "Lucky succulent with thick, glossy leaves. Very low maintenance.",
    careLevel: "Easy",
    lightRequirement: "Bright light",
    waterRequirement: "Every 2 weeks",
    nurseryId: "n3",
    image:
      "https://images.unsplash.com/photo-1597334133882-7027ac9bd95e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWRlJTIwcGxhbnQlMjBzdWNjdWxlbnR8ZW58MXx8fHwxNzcwMTUwMTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p11",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis",
    category: "Succulents",
    price: 13.99,
    description: "Medicinal succulent with soothing gel. Great for skin care.",
    careLevel: "Easy",
    lightRequirement: "Bright indirect light",
    waterRequirement: "Every 2-3 weeks",
    nurseryId: "n3",
    image:
      "https://images.unsplash.com/photo-1643717101835-ea24088aef16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9lJTIwdmVyYSUyMHN1Y2N1bGVudHxlbnwxfHx8fDE3NzAxNTAxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p12",
    name: "Bird of Paradise",
    scientificName: "Strelitzia reginae",
    category: "Flowering",
    price: 39.99,
    description: "Exotic tropical plant with stunning orange and blue flowers.",
    careLevel: "Advanced",
    lightRequirement: "Bright light",
    waterRequirement: "Weekly",
    nurseryId: "n3",
    image:
      "https://images.unsplash.com/photo-1631122751597-cdc5d56d561e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwb2YlMjBwYXJhZGlzZSUyMGZsb3dlcnxlbnwxfHx8fDE3NzAxOTY0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p13",
    name: "Rubber Plant",
    scientificName: "Ficus elastica",
    category: "Indoor",
    price: 32.99,
    description:
      "Bold plant with large, glossy leaves. Great air purifier and statement piece.",
    careLevel: "Easy",
    lightRequirement: "Bright indirect light",
    waterRequirement: "Weekly",
    nurseryId: "n1",
    image:
      "https://images.unsplash.com/photo-1623032693199-e9abd35e0a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWJiZXIlMjBwbGFudCUyMGZpY3VzfGVufDF8fHx8MTc3MDE4ODM2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p14",
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    category: "Indoor",
    price: 14.99,
    description:
      "Classic houseplant with cascading foliage. Very easy to care for and propagate.",
    careLevel: "Easy",
    lightRequirement: "Indirect light",
    waterRequirement: "Weekly",
    nurseryId: "n1",
    image:
      "https://images.unsplash.com/photo-1689004396413-c738357d1a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlkZXIlMjBwbGFudCUyMGdyZWVufGVufDF8fHx8MTc3MDE5NjkyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p15",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    category: "Indoor",
    price: 28.99,
    description:
      "Nearly indestructible plant with glossy leaves. Perfect for low-light areas.",
    careLevel: "Easy",
    lightRequirement: "Low to bright light",
    waterRequirement: "Every 2-3 weeks",
    nurseryId: "n1",
    image:
      "https://images.unsplash.com/photo-1659554416323-e2e222832f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6eiUyMHBsYW50JTIwaW5kb29yfGVufDF8fHx8MTc3MDE5NjkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p16",
    name: "Calathea",
    scientificName: "Calathea ornata",
    category: "Indoor",
    price: 26.99,
    description:
      "Stunning foliage plant with decorative leaf patterns. Prayer plant family.",
    careLevel: "Moderate",
    lightRequirement: "Low to moderate light",
    waterRequirement: "Weekly",
    nurseryId: "n4",
    image:
      "https://images.unsplash.com/photo-1658524136379-6b697258b58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxhdGhlYSUyMHBsYW50JTIwbGVhdmVzfGVufDF8fHx8MTc3MDE5NjkzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p17",
    name: "Philodendron",
    scientificName: "Philodendron hederaceum",
    category: "Indoor",
    price: 21.99,
    description:
      "Versatile trailing or climbing plant. Heart-shaped leaves, easy care.",
    careLevel: "Easy",
    lightRequirement: "Low to bright light",
    waterRequirement: "Weekly",
    nurseryId: "n4",
    image:
      "https://images.unsplash.com/photo-1727242758766-e746d17d56bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsb2RlbmRyb24lMjBwbGFudHxlbnwxfHx8fDE3NzAxMTYzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p18",
    name: "Boston Fern",
    scientificName: "Nephrolepis exaltata",
    category: "Indoor",
    price: 23.99,
    description:
      "Lush, feathery fern perfect for hanging baskets. Loves humidity.",
    careLevel: "Moderate",
    lightRequirement: "Indirect light",
    waterRequirement: "Every 2-3 days",
    nurseryId: "n4",
    image:
      "https://images.unsplash.com/photo-1497877164981-9c2afdf31e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJuJTIwYm9zdG9uJTIwcGxhbnR8ZW58MXx8fHwxNzcwMTk2OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p19",
    name: "Orchid",
    scientificName: "Phalaenopsis",
    category: "Flowering",
    price: 35.99,
    description:
      "Elegant flowering plant with long-lasting blooms. Perfect for home decor.",
    careLevel: "Advanced",
    lightRequirement: "Bright indirect light",
    waterRequirement: "Weekly",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1671561555251-ab5ae7deab7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjBwdXJwbGUlMjBmbG93ZXJ8ZW58MXx8fHwxNzcwMTk2OTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p20",
    name: "Rose Bush",
    scientificName: "Rosa",
    category: "Flowering",
    price: 27.99,
    description:
      "Classic flowering shrub. Beautiful blooms and lovely fragrance.",
    careLevel: "Moderate",
    lightRequirement: "Full sun",
    waterRequirement: "Regular",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1747535126335-bf506d1fb16a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwcGxhbnQlMjBwaW5rfGVufDF8fHx8MTc3MDE5NjkzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p21",
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    category: "Flowering",
    price: 11.99,
    description:
      "Cheerful annual flower that follows the sun. Easy to grow from seed.",
    careLevel: "Easy",
    lightRequirement: "Full sun",
    waterRequirement: "Regular",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1705635952334-7f8fc503ea3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjB5ZWxsb3clMjBnYXJkZW58ZW58MXx8fHwxNzcwMTcyNjU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p22",
    name: "Mint",
    scientificName: "Mentha",
    category: "Herbs",
    price: 8.99,
    description: "Refreshing herb for teas and cooking. Grows vigorously.",
    careLevel: "Easy",
    lightRequirement: "Partial sun",
    waterRequirement: "Regular",
    nurseryId: "n5",
    image:
      "https://images.unsplash.com/photo-1633916872730-7199a52e483b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW50JTIwaGVyYiUyMHBsYW50fGVufDF8fHx8MTc3MDE5NjkzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p23",
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    category: "Herbs",
    price: 10.99,
    description: "Classic Mediterranean herb. Essential for many recipes.",
    careLevel: "Easy",
    lightRequirement: "Full sun",
    waterRequirement: "Moderate",
    nurseryId: "n5",
    image:
      "https://images.unsplash.com/photo-1625128143202-bd596f7639d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHltZSUyMGhlcmIlMjBncmVlbnxlbnwxfHx8fDE3NzAxOTY5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p24",
    name: "Cilantro",
    scientificName: "Coriandrum sativum",
    category: "Herbs",
    price: 7.99,
    description:
      "Fresh herb for Mexican and Asian cuisine. Also known as coriander.",
    careLevel: "Easy",
    lightRequirement: "Partial sun",
    waterRequirement: "Regular",
    nurseryId: "n5",
    image:
      "https://images.unsplash.com/photo-1601493700603-43461216807a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaWxhbnRybyUyMGNvcmlhbmRlciUyMGhlcmJ8ZW58MXx8fHwxNzcwMTk2OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p25",
    name: "Parsley",
    scientificName: "Petroselinum crispum",
    category: "Herbs",
    price: 8.99,
    description:
      "Versatile herb rich in vitamins. Perfect for garnishing and cooking.",
    careLevel: "Easy",
    lightRequirement: "Partial sun",
    waterRequirement: "Regular",
    nurseryId: "n5",
    image:
      "https://images.unsplash.com/photo-1635088361849-06d3fcfdf64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJzbGV5JTIwaGVyYiUyMGdyZWVufGVufDF8fHx8MTc3MDE5NjkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p26",
    name: "Bell Pepper",
    scientificName: "Capsicum annuum",
    category: "Vegetables",
    price: 16.99,
    description:
      "Colorful vegetable plant. Produces sweet peppers in various colors.",
    careLevel: "Moderate",
    lightRequirement: "Full sun",
    waterRequirement: "Regular",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1604488943825-f95dc6796ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVyJTIwcGxhbnR8ZW58MXx8fHwxNzcwMTk2OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p27",
    name: "Lettuce",
    scientificName: "Lactuca sativa",
    category: "Vegetables",
    price: 6.99,
    description: "Fast-growing salad green. Perfect for container gardening.",
    careLevel: "Easy",
    lightRequirement: "Partial sun",
    waterRequirement: "Regular",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1736757614152-d500988741db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0dWNlJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc3MDE5NjkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p28",
    name: "Spinach",
    scientificName: "Spinacia oleracea",
    category: "Vegetables",
    price: 7.99,
    description: "Nutritious leafy green. Grows well in cool weather.",
    careLevel: "Easy",
    lightRequirement: "Partial sun",
    waterRequirement: "Regular",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1602193815349-525071f27564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWNoJTIwZ3JlZW4lMjBsZWF2ZXN8ZW58MXx8fHwxNzcwMTYzMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p29",
    name: "Strawberry",
    scientificName: "Fragaria × ananassa",
    category: "Vegetables",
    price: 13.99,
    description:
      "Sweet fruit-bearing plant. Perfect for containers or hanging baskets.",
    careLevel: "Moderate",
    lightRequirement: "Full sun",
    waterRequirement: "Regular",
    nurseryId: "n2",
    image:
      "https://images.unsplash.com/photo-1668888500730-19727996caee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwcGxhbnQlMjBmcnVpdHxlbnwxfHx8fDE3NzAxOTY5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p30",
    name: "Echeveria",
    scientificName: "Echeveria elegans",
    category: "Succulents",
    price: 11.99,
    description:
      "Rose-shaped succulent with beautiful coloring. Low water needs.",
    careLevel: "Easy",
    lightRequirement: "Bright light",
    waterRequirement: "Every 2 weeks",
    nurseryId: "n6",
    image:
      "https://images.unsplash.com/photo-1761370366123-1e253e38e10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2hldmVyaWElMjBzdWNjdWxlbnQlMjBwaW5rfGVufDF8fHx8MTc3MDE5Njk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p31",
    name: "Haworthia",
    scientificName: "Haworthia cooperi",
    category: "Succulents",
    price: 14.99,
    description:
      "Small, striped succulent. Perfect for small spaces and terrariums.",
    careLevel: "Easy",
    lightRequirement: "Bright indirect light",
    waterRequirement: "Every 2-3 weeks",
    nurseryId: "n6",
    image:
      "https://images.unsplash.com/photo-1768278929570-59332555f22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXdvcnRoaWElMjBzdWNjdWxlbnQlMjBwbGFudHxlbnwxfHx8fDE3NzAxOTY5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p32",
    name: "Sedum",
    scientificName: "Sedum rubrotinctum",
    category: "Succulents",
    price: 9.99,
    description:
      "Jelly bean succulent with plump leaves. Very drought tolerant.",
    careLevel: "Easy",
    lightRequirement: "Full sun",
    waterRequirement: "Every 2-3 weeks",
    nurseryId: "n6",
    image:
      "https://images.unsplash.com/photo-1687669889311-506d6fb7c0a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWR1bSUyMHN1Y2N1bGVudCUyMGdyZWVufGVufDF8fHx8MTc3MDE5Njk0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p33",
    name: "Desert Cactus",
    scientificName: "Various species",
    category: "Succulents",
    price: 18.99,
    description:
      "Classic desert cactus. Extremely low maintenance and drought tolerant.",
    careLevel: "Easy",
    lightRequirement: "Full sun",
    waterRequirement: "Monthly",
    nurseryId: "n6",
    image:
      "https://images.unsplash.com/photo-1643717094992-5ab09ef07263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWN0dXMlMjBkZXNlcnQlMjBwbGFudHxlbnwxfHx8fDE3NzAxOTY5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p34",
    name: "Bamboo Palm",
    scientificName: "Chamaedorea seifrizii",
    category: "Tropical",
    price: 42.99,
    description:
      "Elegant tropical palm. Excellent air purifier and humidity lover.",
    careLevel: "Moderate",
    lightRequirement: "Bright indirect light",
    waterRequirement: "Weekly",
    nurseryId: "n4",
    image:
      "https://images.unsplash.com/photo-1609615819404-8f64ef6b463f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBwbGFudCUyMGdyZWVufGVufDF8fHx8MTc3MDE5Njk0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "p35",
    name: "Bonsai Tree",
    scientificName: "Various species",
    category: "Specialty",
    price: 89.99,
    description:
      "Miniature tree art form. Requires patience and careful pruning.",
    careLevel: "Advanced",
    lightRequirement: "Bright light",
    waterRequirement: "Regular",
    nurseryId: "n3",
    image:
      "https://images.unsplash.com/photo-1624162872504-e57ceca8874f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib25zYWklMjB0cmVlJTIwbWluaWF0dXJlfGVufDF8fHx8MTc3MDE5Njk0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
];

export const categories = [
  "All",
  "Indoor",
  "Flowering",
  "Herbs",
  "Vegetables",
  "Succulents",
  "Tropical",
  "Specialty",
];
