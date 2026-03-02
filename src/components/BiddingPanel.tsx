import { X, Star, Clock, Truck, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Load } from "@/data/mockData";
import { useState } from "react";
import { toast } from "sonner";

interface BiddingPanelProps {
  load: Load | null;
  onClose: () => void;
}

const BiddingPanel = ({ load, onClose }: BiddingPanelProps) => {
  const [acceptedBid, setAcceptedBid] = useState<string | null>(null);

  if (!load) return null;

  const handleAcceptBid = (bidId: string, driverName: string) => {
    setAcceptedBid(bidId);
    toast.success(`Bid accepted! ${driverName} has been assigned to ${load.id}`);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed right-0 top-0 h-full w-full max-w-md glass-card border-l border-border/50 z-50 overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-muted-foreground">{load.id}</span>
              <h2 className="text-lg font-bold text-foreground">{load.title}</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="glass-card rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">Route</div>
              <div className="text-sm font-medium text-foreground">
                {load.origin} → {load.destination}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">Weight</div>
                <div className="text-sm font-medium text-foreground">{load.weight}</div>
              </div>
              <div className="glass-card rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">Deadline</div>
                <div className="text-sm font-medium text-foreground">{load.deadline}</div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Bids ({load.bids.length})
            </h3>
            {load.bids.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No bids yet. Waiting for drivers...
              </div>
            ) : (
              <div className="space-y-3">
                {load.bids.map((bid) => (
                  <motion.div
                    key={bid.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`glass-card rounded-lg p-4 transition-all ${
                      acceptedBid === bid.id ? "border-success/50 glow-amber" : "hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary">
                          {bid.driverName.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-medium text-sm text-foreground">{bid.driverName}</div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-primary fill-primary" />
                            <span className="text-xs text-muted-foreground">{bid.driverRating}</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-primary font-mono">₹{bid.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ETA: {bid.eta}
                      </div>
                      <div className="flex items-center gap-1">
                        <Truck className="w-3 h-3" />
                        {bid.vehicleType}
                      </div>
                    </div>
                    {acceptedBid === bid.id ? (
                      <Badge className="bg-success/10 text-success border-success/20">
                        <CheckCircle className="w-3 h-3 mr-1" /> Accepted
                      </Badge>
                    ) : !acceptedBid ? (
                      <Button
                        size="sm"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => handleAcceptBid(bid.id, bid.driverName)}
                      >
                        Accept Bid
                      </Button>
                    ) : null}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BiddingPanel;
