import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";
import Users from "./Users";
import Settings from "./Settings";

export default function Admin() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      case "users":
        return <Users />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto">{renderPage()}</main>
      </div>
    </div>
  );
}
