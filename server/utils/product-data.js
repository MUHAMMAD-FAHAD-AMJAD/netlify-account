
// =================================================================================
// THIS IS YOUR MASTER PRODUCT LIST
// =================================================================================
// This is the ONLY file you need to edit to add, remove, or change your products.
// After you edit this file, run the following command in your terminal
// to update your live database:
//
// npm run seed --prefix server
//
// =================================================================================

const mockProducts = [
  // == INSECTICIDES ==
  {
    id: 'insect-1',
    name: 'Coragen Insecticide',
    brand: 'FMC',
    price: 1250,
    originalPrice: 1400,
    images: ['https://placehold.co/400x400.png', 'https://placehold.co/400x400.png'],
    rating: 4.8,
    reviews: 215,
    isSoldOut: false,
    imageHint: 'insecticide bottle',
    category: 'insecticides',
    subcategory: 'systemic',
    tags: ['pest-control', 'fast-acting', 'coragen', 'fmc'],
    description: 'A powerful, fast-acting systemic insecticide that provides immediate and long-lasting control of a wide range of pests. Ideal for protecting various crops from sucking and chewing insects.'
  },
  {
    id: 'insect-2',
    name: 'Belt Expert Insecticide',
    brand: 'Bayer',
    price: 1800,
    originalPrice: null,
    images: ['https://placehold.co/400x400.png'],
    rating: 4.7,
    reviews: 150,
    isSoldOut: false,
    imageHint: 'pest control bottle',
    category: 'insecticides',
    subcategory: 'contact',
    tags: ['bayer', 'broad-spectrum', 'pest-control'],
    description: 'Belt Expert from Bayer offers broad-spectrum control against a variety of damaging pests, ensuring healthier crops and better yields. Its unique mode of action provides quick results.'
  },

  // == HERBICIDES ==
  {
    id: 'herbi-1',
    name: 'Roundup Quick Pro',
    brand: 'Monsanto',
    price: 3500,
    originalPrice: 4000,
    images: ['https://placehold.co/400x400.png'],
    rating: 4.6,
    reviews: 180,
    isSoldOut: false,
    imageHint: 'herbicide container',
    category: 'herbicides',
    subcategory: 'non-selective',
    tags: ['weed-killer', 'roundup', 'non-selective'],
    description: 'A non-selective, post-emergence herbicide for complete weed control. Roundup Quick Pro is fast-acting and effective against a wide range of broadleaf weeds and grasses.'
  },
  {
    id: 'herbi-2',
    name: 'Sencor 70 WP',
    brand: 'Bayer',
    price: 950,
    originalPrice: null,
    images: ['https://placehold.co/400x400.png'],
    rating: 4.5,
    reviews: 95,
    isSoldOut: true,
    imageHint: 'weed killer powder',
    category: 'herbicides',
    subcategory: 'pre-emergence',
    tags: ['sencor', 'bayer', 'selective-herbicide'],
    description: 'Sencor 70 WP is a selective pre-emergence and post-emergence herbicide for effective control of weeds in sugarcane, potatoes, tomatoes, and other crops.'
  },

  // == FUNGICIDES ==
  {
    id: 'fungi-1',
    name: 'Antracol Fungicide',
    brand: 'Bayer',
    price: 850,
    originalPrice: null,
    images: ['https://placehold.co/400x400.png'],
    rating: 4.7,
    reviews: 130,
    isSoldOut: false,
    imageHint: 'fungicide bag',
    category: 'fungicides',
    subcategory: 'preventive',
    tags: ['antracol', 'bayer', 'disease-control'],
    description: 'Antracol is a preventive contact fungicide with a broad spectrum of activity against fungal diseases in various crops like rice, chili, grapes, and potato.'
  },

  // == FERTILIZERS ==
  {
    id: 'fert-1',
    name: 'Zarai Tara Urea',
    brand: 'Engro',
    price: 4800,
    originalPrice: 5200,
    images: ['https://placehold.co/400x400.png'],
    rating: 4.9,
    reviews: 350,
    isSoldOut: false,
    imageHint: 'fertilizer bag urea',
    category: 'fertilizers',
    subcategory: 'urea',
    tags: ['engro', 'urea', 'nitrogen', 'plant-growth'],
    description: 'High-quality nitrogen fertilizer from Engro, essential for vigorous plant growth, lush green foliage, and increased crop yield. Suitable for all types of soil.'
  },
  {
    id: 'fert-2',
    name: 'Sona DAP Fertilizer',
    brand: 'Fauji Fertilizer',
    price: 9500,
    originalPrice: null,
    images: ['https://placehold.co/400x400.png'],
    rating: 4.8,
    reviews: 280,
    isSoldOut: false,
    imageHint: 'dap fertilizer bag',
    category: 'fertilizers',
    subcategory: 'dap',
    tags: ['dap', 'fauji', 'phosphorus', 'root-development'],
    description: 'Sona DAP provides an excellent source of phosphate and nitrogen for plants. It is ideal for promoting strong root development and early plant growth.'
  },

  // == SEEDS ==
  {
    id: 'seed-1',
    name: 'Pioneer Hybrid Corn Seed',
    brand: 'Pioneer',
    price: 7500,
    originalPrice: null,
    images: ['https://placehold.co/400x400.png'],
    rating: 4.9,
    reviews: 190,
    isSoldOut: false,
    imageHint: 'corn seed bag',
    category: 'seeds',
    subcategory: 'corn',
    tags: ['pioneer', 'hybrid', 'corn', 'high-yield'],
    description: 'High-yielding hybrid corn seeds from Pioneer, known for their strong plant vigor, disease resistance, and excellent grain quality.'
  },
];

module.exports = { mockProducts };
