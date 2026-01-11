import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Product from "../models/product.model";
import { COLLECTIONS } from "../schema/product.dto";


const products = [
  {
    name: "Rose Elegance",
    description: "A luxurious floral fragrance with rich rose and soft musk notes.",
    price: 120,
    oldPrice: 150,
    quantity: 40,
    imageUrl: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de"
    ],
    collection: COLLECTIONS.floral
  },
  {
    name: "Midnight Oud",
    description: "Deep woody oud blended with amber and warm spices.",
    price: 180,
    oldPrice: 220,
    quantity: 25,
    imageUrl: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"
    ],
    collection: COLLECTIONS.woody
  },
  {
    name: "Ocean Breeze Men",
    description: "Fresh aquatic scent designed for confidence and daily wear.",
    price: 95,
    quantity: 60,
    imageUrl: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f"
    ],
    collection: COLLECTIONS.men
  },
  {
    name: "Velvet Blossom",
    description: "Soft floral blend with jasmine, vanilla, and white flowers.",
    price: 110,
    quantity: 45,
    imageUrl: [
      "https://images.unsplash.com/photo-1619995745882-f4128ac82ad6"
    ],
    collection: COLLECTIONS.women
  },
  {
    name: "Cedar Nightfall",
    description: "Earthy cedarwood and smoky vetiver for bold personalities.",
    price: 160,
    quantity: 30,
    imageUrl: [
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee"
    ],
    collection: COLLECTIONS.woody
  },
  {
    name: "Golden Lily",
    description: "Bright floral fragrance with lily and citrus top notes.",
    price: 105,
    oldPrice: 130,
    quantity: 50,
    imageUrl: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75"
    ],
    collection: COLLECTIONS.floral
  },
  {
    name: "Urban Man",
    description: "Modern masculine scent with bergamot, leather, and woods.",
    price: 140,
    quantity: 35,
    imageUrl: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    ],
    collection: COLLECTIONS.men
  },
  {
    name: "Amber Queen",
    description: "Warm amber fragrance with hints of vanilla and patchouli.",
    price: 155,
    quantity: 28,
    imageUrl: [
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63"
    ],
    collection: COLLECTIONS.women
  },
  {
    name: "Forest Whisper",
    description: "Natural woody aroma inspired by deep forest trails.",
    price: 135,
    quantity: 42,
    imageUrl: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ],
    collection: COLLECTIONS.woody
  },
  {
    name: "Blush Petals",
    description: "Romantic floral perfume with peony and rose.",
    price: 98,
    quantity: 55,
    imageUrl: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f"
    ],
    collection: COLLECTIONS.floral
  },

  // ===== 15 MORE PRODUCTS =====

  {
    name: "Sapphire Man",
    description: "Cool and fresh masculine fragrance with spicy undertones.",
    price: 125,
    quantity: 48,
    imageUrl: ["https://images.unsplash.com/photo-1541643600914-78b084683601"],
    collection: COLLECTIONS.men
  },
  {
    name: "Soft Orchid",
    description: "Delicate orchid scent with creamy vanilla base.",
    price: 115,
    quantity: 44,
    imageUrl: ["https://images.unsplash.com/photo-1611242320536-f12d354124a8"],
    collection: COLLECTIONS.women
  },
  {
    name: "Dark Sandal",
    description: "Rich sandalwood mixed with exotic spices.",
    price: 170,
    quantity: 20,
    imageUrl: ["https://images.unsplash.com/photo-1585238342028-4bbc7b5f9c77"],
    collection: COLLECTIONS.woody
  },
  {
    name: "Bloom Essence",
    description: "Fresh floral burst with spring garden vibes.",
    price: 90,
    quantity: 65,
    imageUrl: ["https://images.unsplash.com/photo-1585386959984-a4155224a1ad"],
    collection: COLLECTIONS.floral
  },
  {
    name: "Night Pulse",
    description: "Intense men’s fragrance for evening wear.",
    price: 150,
    quantity: 33,
    imageUrl: ["https://images.unsplash.com/photo-1615634260167-c8cdede054de"],
    collection: COLLECTIONS.men
  },
  {
    name: "Ivory Musk",
    description: "Clean feminine scent with musk and white florals.",
    price: 100,
    quantity: 50,
    imageUrl: ["https://images.unsplash.com/photo-1594035910387-fea47794261f"],
    collection: COLLECTIONS.women
  },
  {
    name: "Oak Royale",
    description: "Strong woody fragrance with oak and leather notes.",
    price: 175,
    quantity: 22,
    imageUrl: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"],
    collection: COLLECTIONS.woody
  },
  {
    name: "Flora Mist",
    description: "Light floral fragrance perfect for daytime use.",
    price: 85,
    quantity: 70,
    imageUrl: ["https://images.unsplash.com/photo-1619995745882-f4128ac82ad6"],
    collection: COLLECTIONS.floral
  },
  {
    name: "Iron Man",
    description: "Bold masculine scent with metalic and woody accords.",
    price: 160,
    quantity: 29,
    imageUrl: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"],
    collection: COLLECTIONS.men
  },
  {
    name: "Silk Rose",
    description: "Smooth rose fragrance with powdery finish.",
    price: 110,
    quantity: 46,
    imageUrl: ["https://images.unsplash.com/photo-1588405748880-12d1d2a59f75"],
    collection: COLLECTIONS.women
  },
  {
    name: "Cypress Wood",
    description: "Green woody fragrance with herbal notes.",
    price: 145,
    quantity: 37,
    imageUrl: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"],
    collection: COLLECTIONS.woody
  },
  {
    name: "Petal Dream",
    description: "Sweet floral blend with fruity undertones.",
    price: 92,
    quantity: 58,
    imageUrl: ["https://images.unsplash.com/photo-1611241893603-3c359704e0ee"],
    collection: COLLECTIONS.floral
  },
  {
    name: "Royal Men",
    description: "Elegant masculine perfume with royal depth.",
    price: 165,
    quantity: 27,
    imageUrl: ["https://images.unsplash.com/photo-1541643600914-78b084683601"],
    collection: COLLECTIONS.men
  },
  {
    name: "Vanilla Muse",
    description: "Warm vanilla fragrance with floral harmony.",
    price: 108,
    quantity: 49,
    imageUrl: ["https://images.unsplash.com/photo-1611242320536-f12d354124a8"],
    collection: COLLECTIONS.women
  },
  {
    name: "Smoked Cedar",
    description: "Dark woody scent with smoky cedarwood.",
    price: 172,
    quantity: 24,
    imageUrl: ["https://images.unsplash.com/photo-1585238342028-4bbc7b5f9c77"],
    collection: COLLECTIONS.woody
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ 25 products seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seedProducts();
