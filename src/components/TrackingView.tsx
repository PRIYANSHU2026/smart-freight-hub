import { MapPin, Truck, Clock, Package } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { loads } from "@/data/mockData";

const activeLoads = loads.filter((l) => l.status === "in-transit" || l.status === "assigned");

const TrackingView = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-bold text-foreground">Live Tracking</h2>

    {/* Simulated Map */}
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="relative h-64 md:h-80 bg-secondary/50 flex items-center justify-center">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="relative z-10 text-center">
          <MapPin className="w-10 h-10 text-primary mx-auto mb-2 animate-bounce" />
          <p className="text-sm text-muted-foreground">Live map view</p>
          <p className="text-xs text-muted-foreground mt-1">{activeLoads.length} active shipment{activeLoads.length > 1 ? "s" : ""} being tracked</p>
        </div>

        {/* Simulated route dots */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-success animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-primary animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-info animate-pulse" />
      </div>
    </div>

    {/* Active Shipments */}
    <div className="grid gap-3">
      {activeLoads.map((load, i) => (
        <motion.div
          key={load.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card rounded-xl p-4"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">{load.id}</span>
                <Badge variant="outline" className={
                  load.status === "in-transit"
                    ? "bg-success/10 text-success border-success/20"
                    : "bg-warning/10 text-warning border-warning/20"
                }>
                  {load.status}
                </Badge>
              </div>
              <h3 className="font-semibold text-foreground mt-1">{load.title}</h3>
            </div>
            <Truck className="w-5 h-5 text-primary" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="w-3.5 h-3.5 text-success" />
            <span>{load.origin}</span>
            <span className="text-border">→</span>
            <span>{load.destination}</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-secondary rounded-full h-1.5 mb-2">
            <div
              className="bg-primary h-1.5 rounded-full transition-all"
              style={{ width: load.status === "in-transit" ? "65%" : "15%" }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Package className="w-3 h-3" />
              Driver: {load.assignedDriver}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {load.deadline}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TrackingView;
