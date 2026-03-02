import { Package, CheckCircle, Gavel, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { recentActivity } from "@/data/mockData";

const icons = {
  bid: Gavel,
  delivery: CheckCircle,
  load: Package,
  trip: Navigation,
};

const iconColors = {
  bid: "text-primary",
  delivery: "text-success",
  load: "text-info",
  trip: "text-warning",
};

const ActivityFeed = () => (
  <div className="glass-card rounded-xl p-5">
    <h3 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h3>
    <div className="space-y-3">
      {recentActivity.map((item, i) => {
        const Icon = icons[item.type];
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3"
          >
            <div className={`mt-0.5 ${iconColors[item.type]}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground truncate">{item.text}</p>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default ActivityFeed;
