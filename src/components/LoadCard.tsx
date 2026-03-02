import { MapPin, Clock, Weight, Tag, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Load } from "@/data/mockData";

const statusStyles: Record<string, string> = {
  open: "bg-info/10 text-info border-info/20",
  bidding: "bg-primary/10 text-primary border-primary/20",
  assigned: "bg-warning/10 text-warning border-warning/20",
  "in-transit": "bg-success/10 text-success border-success/20",
  delivered: "bg-muted text-muted-foreground border-border",
};

interface LoadCardProps {
  load: Load;
  index: number;
  onSelect: (load: Load) => void;
}

const LoadCard = ({ load, index, onSelect }: LoadCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.06, duration: 0.3 }}
    onClick={() => onSelect(load)}
    className="glass-card rounded-xl p-4 hover:border-primary/30 transition-all cursor-pointer group"
  >
    <div className="flex items-start justify-between mb-3">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono text-muted-foreground">{load.id}</span>
          <Badge variant="outline" className={statusStyles[load.status]}>
            {load.status}
          </Badge>
        </div>
        <h3 className="font-semibold text-foreground">{load.title}</h3>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </div>

    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="w-3.5 h-3.5 text-success" />
        <span>{load.origin}</span>
        <span className="text-border">→</span>
        <span>{load.destination}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Weight className="w-3.5 h-3.5" />
          <span>{load.weight}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Tag className="w-3.5 h-3.5" />
          <span>{load.type}</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs text-muted-foreground">{load.postedBy}</span>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>{load.postedAt}</span>
        </div>
      </div>
    </div>

    {load.bids.length > 0 && (
      <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{load.bids.length} bid{load.bids.length > 1 ? "s" : ""}</span>
        {load.price && <span className="text-sm font-semibold text-primary font-mono">₹{load.price.toLocaleString()}</span>}
      </div>
    )}
  </motion.div>
);

export default LoadCard;
