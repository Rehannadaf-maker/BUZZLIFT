import StatsCard from "../../components/admin/StatsCard";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Sales" value="₹1,20,000" />
        <StatsCard title="Orders" value="320" />
        <StatsCard title="Users" value="150" />
        <StatsCard title="Revenue" value="₹90,000" />
      </div>
    </div>
  );
}
