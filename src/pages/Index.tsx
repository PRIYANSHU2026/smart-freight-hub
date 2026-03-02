import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import StatsCards from "@/components/StatsCards";
import LoadCard from "@/components/LoadCard";
import BiddingPanel from "@/components/BiddingPanel";
import DriverCard from "@/components/DriverCard";
import ActivityFeed from "@/components/ActivityFeed";
import TrackingView from "@/components/TrackingView";
import PostLoadForm from "@/components/PostLoadForm";
import { loads, drivers, type Load } from "@/data/mockData";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedLoad, setSelectedLoad] = useState<Load | null>(null);
  const [showPostForm, setShowPostForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <p className="text-sm text-muted-foreground mt-0.5">Real-time logistics overview</p>
              </div>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setShowPostForm(true)}
              >
                <Plus className="w-4 h-4 mr-2" /> Post Load
              </Button>
            </div>

            <StatsCards />

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-3">
                <h2 className="text-sm font-semibold text-foreground">Active Loads</h2>
                {loads.filter(l => l.status !== "delivered").map((load, i) => (
                  <LoadCard key={load.id} load={load} index={i} onSelect={setSelectedLoad} />
                ))}
              </div>
              <div>
                <ActivityFeed />
              </div>
            </div>
          </>
        )}

        {/* Marketplace */}
        {activeTab === "marketplace" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Load Marketplace</h1>
                <p className="text-sm text-muted-foreground mt-0.5">Browse and bid on available loads</p>
              </div>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setShowPostForm(true)}
              >
                <Plus className="w-4 h-4 mr-2" /> Post Load
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loads.map((load, i) => (
                <LoadCard key={load.id} load={load} index={i} onSelect={setSelectedLoad} />
              ))}
            </div>
          </>
        )}

        {/* Drivers */}
        {activeTab === "drivers" && (
          <>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Verified Drivers</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Manage and monitor driver fleet</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {drivers.map((driver, i) => (
                <DriverCard key={driver.id} driver={driver} index={i} />
              ))}
            </div>
          </>
        )}

        {/* Tracking */}
        {activeTab === "tracking" && <TrackingView />}
      </main>

      {/* Bidding Side Panel */}
      {selectedLoad && (
        <>
          <div
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
            onClick={() => setSelectedLoad(null)}
          />
          <BiddingPanel load={selectedLoad} onClose={() => setSelectedLoad(null)} />
        </>
      )}

      {/* Post Load Modal */}
      <PostLoadForm open={showPostForm} onClose={() => setShowPostForm(false)} />
    </div>
  );
};

export default Index;
