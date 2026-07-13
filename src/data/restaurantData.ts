export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "Main" | "Appetizer" | "Bread" | "Dessert";
  priceIndicator: string;
  isVegetarian: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "dishes" | "venue";
  image: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  role: string;
}

export const RESTAURANT_INFO = {
  name: "Peshwa Pavilion",
  hotel: "ITC Maratha, Mumbai",
  address: "ITC Maratha, International Airport, Chhatrapati Shivaji Maharaj International Airport Road, Ashok Nagar, Andheri East, Mumbai, Maharashtra 400099",
  phone: "022 2830 3030",
  phoneLink: "tel:02228303030",
  mapsLink: "https://maps.google.com/?q=ITC+Maratha+Mumbai",
  rating: 4.6,
  reviewsCount: 2786,
  priceRange: "₹2,000+",
  cuisine: "Luxury Multi-Cuisine Restaurant",
  description:
    "An elegant culinary destination inside ITC Maratha, Mumbai, offering exceptional Indian and international cuisine in a sophisticated, sun-bathed atrium setting.",
  longDescription:
    "Located under the majestic glass dome atrium of ITC Maratha, Peshwa Pavilion is the hotel's premier all-day dining destination. Renowned for its architectural grandeur, luxurious buffet displays, and signature Peshawari specialties, it represents the pinnacle of five-star dining in Mumbai. Whether it's our slow-cooked signature Dal Bukhara, chargrilled tandoori kebabs, or curated global cuisines, every culinary creation is crafted to perfection and delivered with legendary Indian hospitality.",
};

// Signature Dishes (8 items requested)
// Images sourced from high-quality Unsplash food representations. 
// TODO: Replace these with official, high-resolution Peshwa Pavilion photography when supplied by the client.
export const SIGNATURE_DISHES: Dish[] = [
  {
    id: "dish-1",
    name: "Dal Bukhara",
    description: "A legendary ITC specialty. Whole black lentils slow-cooked overnight with fresh tomatoes, ginger, garlic, and cream, simmered on charcoal embers.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop",
    category: "Main",
    priceIndicator: "₹2,000+",
    isVegetarian: true,
  },
  {
    id: "dish-2",
    name: "Kebabs",
    description: "Succulent cubes of chicken and minced mutton marinated in yogurt, Kashmiri red chilies, and a proprietary spice blend, charred in a clay tandoor.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop",
    category: "Appetizer",
    priceIndicator: "₹2,000+",
    isVegetarian: false,
  },
  {
    id: "dish-3",
    name: "Butter Naan",
    description: "Classic leavened flatbread baked on the inner walls of the tandoor oven, brushed generously with clarified butter (ghee) for a flaky finish.",
    image: "https://i.pinimg.com/736x/e5/a5/20/e5a520b28c42b9edc13b6478b563b0bd.jpg?q=80&w=600&auto=format&fit=crop",
    category: "Bread",
    priceIndicator: "₹2,000+",
    isVegetarian: true,
  },
  {
    id: "dish-4",
    name: "Sikandari Raan",
    description: "Whole leg of spring lamb marinated in malt vinegar, cinnamon, black cumin, and red chilies, slow-roasted until pull-apart tender.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    category: "Main",
    priceIndicator: "₹2,000+",
    isVegetarian: false,
  },
  {
    id: "dish-5",
    name: "Chicken Makhani",
    description: "Tandoori chicken pieces shredded and simmered in a velvety smooth gravy of fresh tomatoes, cashew paste, honey, butter, and dried fenugreek leaves.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop",
    category: "Main",
    priceIndicator: "₹2,000+",
    isVegetarian: false,
  },
  {
    id: "dish-6",
    name: "Phirni",
    description: "A traditional Kashmiri dessert made from ground basmati rice, condensed milk, and saffron, slow-cooked and chilled in hand-baked clay bowls.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop",
    category: "Dessert",
    priceIndicator: "₹2,000+",
    isVegetarian: true,
  },
  {
    id: "dish-7",
    name: "Gulab Jamun",
    description: "Soft, golden-brown dumplings made of evaporated milk solids, deep-fried and soaked in a warm cardamom-infused sugar syrup.",
    image: "https://i.pinimg.com/736x/3d/b8/e1/3db8e1741bd68b1023d5000060410198.jpg?q=80&w=600&auto=format&fit=crop",
    category: "Dessert",
    priceIndicator: "₹2,000+",
    isVegetarian: true,
  },
  {
    id: "dish-8",
    name: "Kulfi",
    description: "Traditional rich Indian ice cream made from slow-reduced milk, flavored with Kashmiri saffron, cardamoms, pistachios, and almonds.",
    image: "https://i.pinimg.com/736x/b5/a3/5a/b5a35aa8f67632a7ac84603db12d3575.jpg?q=80&w=600&auto=format&fit=crop",
    category: "Dessert",
    priceIndicator: "₹2,000+",
    isVegetarian: true,
  },
];

// Gallery Images (Special Dishes and Venue)
// Images represent luxury dining settings and beautiful Indian dishes.
// TODO: Replace with official venue and buffet photos of Peshwa Pavilion, ITC Maratha.
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Signature Dal Bukhara",
    category: "dishes",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop",
    description: "Our signature slow-cooked black lentils, cooked on live coal embers.",
  },
  {
    id: "gal-2",
    title: "Legendary Sikandari Raan",
    category: "dishes",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    description: "A robust Mughlai roast lamb leg marinated in rich spices.",
  },
  {
    id: "gal-3",
    title: "Tandoori Kebab Platter",
    category: "dishes",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop",
    description: "A premium selection of clay-oven grilled kebabs.",
  },
  {
    id: "gal-4",
    title: "Fine Desserts Collection",
    category: "dishes",
    image: "https://images.unsplash.com/photo-1629385738750-5617b763a80b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&auto=format&fit=crop",
    description: "Delectable traditional and contemporary desserts from our live counter.",
  },
  {
    id: "gal-5",
    title: "Sun-Bathed Atrium Seating",
    category: "venue",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop",
    description: "The breathtaking dining area sitting under the hotel's high-glass dome.",
  },
  {
    id: "gal-6",
    title: "Luxury Dining Ambience",
    category: "venue",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    description: "Warm, sophisticated illumination sets the mood for fine dining.",
  },
  {
    id: "gal-7",
    title: "Premium Buffet Display",
    category: "venue",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    description: "An extensive multi-cuisine spread prepared daily by executive chefs.",
  },
  {
    id: "gal-8",
    title: "Intimate Dining Area",
    category: "venue",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop",
    description: "Cozy leather-backed seating corners perfect for private conversations.",
  },
];

// Guest Testimonials
export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Aditya Sen",
    rating: 5,
    date: "July 2026",
    comment: "The buffet at Peshwa Pavilion is easily the best in Mumbai. The selection of Indian and global cuisines is enormous, but the Dal Bukhara is the absolute highlight. Impeccable service and beautiful ambience!",
    role: "Local Guide",
  },
  {
    id: "rev-2",
    author: "Meera Deshmukh",
    rating: 5,
    date: "June 2026",
    comment: "ITC Maratha's hospitality is legendary, and Peshwa Pavilion stands out. The sun-bathed atrium seating is gorgeous. The staff was incredibly attentive during my wedding anniversary celebration.",
    role: "Verified Diner",
  },
  {
    id: "rev-3",
    author: "Robert Chen",
    rating: 4,
    date: "May 2026",
    comment: "An exceptional multi-cuisine dining experience. The live cooking stations were outstanding, especially the freshly baked naans and grilled kebabs. Highly recommend for business dinners.",
    role: "Business Traveler",
  },
  {
    id: "rev-4",
    author: "Priyanka Nair",
    rating: 5,
    date: "April 2026",
    comment: "A true five-star fine dining atmosphere. The Sikandari Raan was cooked to absolute perfection, literally melting in the mouth. The desserts like Phirni and Kulfi were the perfect finish.",
    role: "Food Connoisseur",
  },
];
