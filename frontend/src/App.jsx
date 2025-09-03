import { Routes, Route } from "react-router-dom";
import Navbar from "./components/admin/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Products from "./pages/admin/Products";
import About from "./pages/admin/About";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Floating Rocket Scroll-to-Top Button */}
      <ScrollToTop />

      <Footer />
    </div>
  );
}

export default App;
