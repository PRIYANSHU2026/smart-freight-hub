import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface PostLoadFormProps {
  open: boolean;
  onClose: () => void;
}

const PostLoadForm = ({ open, onClose }: PostLoadFormProps) => {
  const [form, setForm] = useState({
    title: "",
    origin: "",
    destination: "",
    weight: "",
    type: "",
    deadline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Load posted successfully! Drivers will start bidding soon.");
    setForm({ title: "", origin: "", destination: "", weight: "", type: "", deadline: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-xl p-6 w-full max-w-lg border border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">Post New Load</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-sm text-muted-foreground">Load Description</Label>
                <Input
                  id="title"
                  placeholder="e.g. Steel Coils — 18T"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  className="mt-1 bg-secondary border-border"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="origin" className="text-sm text-muted-foreground">Origin</Label>
                  <Input id="origin" placeholder="City, State" value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} required className="mt-1 bg-secondary border-border" />
                </div>
                <div>
                  <Label htmlFor="dest" className="text-sm text-muted-foreground">Destination</Label>
                  <Input id="dest" placeholder="City, State" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} required className="mt-1 bg-secondary border-border" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="weight" className="text-sm text-muted-foreground">Weight (kg)</Label>
                  <Input id="weight" placeholder="e.g. 18000" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} required className="mt-1 bg-secondary border-border" />
                </div>
                <div>
                  <Label htmlFor="type" className="text-sm text-muted-foreground">Cargo Type</Label>
                  <Input id="type" placeholder="e.g. Heavy Machinery" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} required className="mt-1 bg-secondary border-border" />
                </div>
              </div>
              <div>
                <Label htmlFor="deadline" className="text-sm text-muted-foreground">Deadline</Label>
                <Input id="deadline" placeholder="e.g. Today, 6:00 PM" value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} required className="mt-1 bg-secondary border-border" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" /> Post Load
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PostLoadForm;
