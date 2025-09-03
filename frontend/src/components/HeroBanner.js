import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const featured = [
    { id: 1, name: "Smartwatch", price: "$199", img: "/products/watch.jpg" },
    { id: 2, name: "Sneakers", price: "$89", img: "/products/shoes.jpg" },
  ];

  return (
    <div>
      <HeroBanner />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

