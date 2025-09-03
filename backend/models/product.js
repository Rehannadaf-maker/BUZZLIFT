import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import CategoryTile from "../components/CategoryTile";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
  const categories = [
    { name: "Hoodies", img: "https://images.unsplash.com/photo-1602810318383-e74f438cfdf6" },
    { name: "Sneakers", img: "https://images.unsplash.com/photo-1606813902917-52de6f8d6c4d" },
    { name: "Jackets", img: "https://images.unsplash.com/photo-1544441893-675973e3198f" },
    { name: "Accessories", img: "https://images.unsplash.com/photo-1512499617640-c2f999098f29" },
  ];

  const featured = [
    { id: 1, name: "Buzzlift Hoodie", price: "₹1,999", img: "https://images.unsplash.com/photo-1602810318383-e74f438cfdf6" },
    { id: 2, name: "Buzzlift Sneakers", price: "₹3,499", img: "https://images.unsplash.com/photo-1606813902917-52de6f8d6c4d" },
    { id: 3, name: "Buzzlift Backpack", price: "₹1,299", img: "https://images.unsplash.com/photo-1603782292293-dc2e6b8a2a2d" },
  ];

  const reviews = [
    "Amazing quality products, I love the Buzzlift hoodie! – Aditi",
    "Fast delivery & trendy designs 🔥 – Rahul",
    "Best online shopping experience ever 🚀 – Sneha",
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroBanner />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <CategoryTile key={i} category={cat} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Why Buzzlift?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <TestimonialCard key={i} review={r} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-700 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Lift Off?</h2>
        <p className="mt-4 text-lg">Shop now and experience fashion beyond limits.</p>
        <a
          href="/products"
          className="mt-8 inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Start Shopping
        </a>
      </section>
    </div>
  );
};

export default Home;
