import { Star, MapPin, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Driver } from "@/data/mockData";

const statusStyles: Record<string, string> = {
  available: "bg-success/10 text-success border-success/20",
  "on-trip": "bg-primary/10 text-primary border-primary/20",
  offline: "bg-muted text-muted-foreground border-border",
};

const DriverCard = ({ driver, index }: { driver: Driver; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.06, duration: 0.3 }}
    className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all"
  >
    <div className="flex items-start gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary">
        {driver.avatar}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-foreground">{driver.name}</h3>
          {driver.verified && <ShieldCheck className="w-4 h-4 text-success" />}
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <Star className="w-3.5 h-3.5 text-primary fill-primary" />
          <span className="text-sm font-medium text-foreground">{driver.rating}</span>
          <span className="text-xs text-muted-foreground ml-1">· {driver.completedTrips} trips</span>
        </div>
      </div>
      <Badge variant="outline" className={statusStyles[driver.status]}>{driver.status}</Badge>
    </div>

    <div className="space-y-2 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Truck className="w-3.5 h-3.5" />
        <span>{driver.vehicleType}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-3.5 h-3.5" />
        <span>{driver.location}</span>
      </div>
      <div className="text-xs font-mono">{driver.licenseNumber}</div>
    </div>
  </motion.div>
);

export default DriverCard;
