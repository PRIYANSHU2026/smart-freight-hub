import { Package, Truck, CheckCircle, Clock, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";
import { stats } from "@/data/mockData";

const cards = [
  { label: "Total Loads", value: stats.totalLoads.toLocaleString(), icon: Package, change: "+12%" },
  { label: "Active Shipments", value: stats.activeShipments.toString(), icon: Truck, change: "+5" },
  { label: "Delivered Today", value: stats.deliveredToday.toString(), icon: CheckCircle, change: "+8" },
  { label: "Avg Bid Time", value: stats.avgBidTime, icon: Clock, change: "-0.3 min" },
  { label: "Revenue (₹)", value: `₹${(stats.revenue / 1000).toFixed(0)}K`, icon: DollarSign, change: "+18%" },
  { label: "Active Drivers", value: stats.drivers.toString(), icon: Users, change: "+14" },
];

const StatsCards = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
    {cards.map((card, i) => (
      <motion.div
        key={card.label}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05, duration: 0.3 }}
        className="glass-card rounded-xl p-4 hover:border-primary/30 transition-colors group"
      >
        <div className="flex items-center justify-between mb-3">
          <card.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-xs font-mono text-success">{card.change}</span>
        </div>
        <p className="text-xl font-bold text-foreground">{card.value}</p>
        <p className="text-xs text-muted-foreground mt-1">{card.label}</p>
      </motion.div>
    ))}
  </div>
);

export default StatsCards;
