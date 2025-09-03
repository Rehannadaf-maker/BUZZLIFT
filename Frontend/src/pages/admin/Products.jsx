import ProductForm from "../../components/admin/ProductForm";

export default function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Products</h2>
      <ProductForm />
      {/* Later: Add a product list table here */}
    </div>
  );
}
