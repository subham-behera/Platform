import React from "react";
import Header from "./DashboardPage/Header";
import Sidebar from "./DashboardPage/Sidebar";
import StatCard from "./DashboardPage/StatCard";

const DashboardPage = () => {
  const stats = [
    { id: 1, title: "Total Users", value: 1500, icon: "👥" },
    { id: 2, title: "Monthly Revenue", value: "$12,000", icon: "💰" },
    { id: 3, title: "New Signups", value: 75, icon: "📝" },
    { id: 4, title: "Active Users", value: 850, icon: "✅" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(stat => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
