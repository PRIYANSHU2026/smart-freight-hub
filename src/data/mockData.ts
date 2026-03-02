export interface Load {
  id: string;
  title: string;
  origin: string;
  destination: string;
  weight: string;
  type: string;
  status: "open" | "bidding" | "assigned" | "in-transit" | "delivered";
  postedBy: string;
  postedAt: string;
  deadline: string;
  bids: Bid[];
  assignedDriver?: string;
  price?: number;
}

export interface Bid {
  id: string;
  driverName: string;
  driverRating: number;
  amount: number;
  eta: string;
  vehicleType: string;
  timestamp: string;
}

export interface Driver {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  completedTrips: number;
  vehicleType: string;
  licenseNumber: string;
  verified: boolean;
  status: "available" | "on-trip" | "offline";
  location: string;
}

export interface Stats {
  totalLoads: number;
  activeShipments: number;
  deliveredToday: number;
  avgBidTime: string;
  revenue: number;
  drivers: number;
}

export const stats: Stats = {
  totalLoads: 1284,
  activeShipments: 47,
  deliveredToday: 23,
  avgBidTime: "4.2 min",
  revenue: 892450,
  drivers: 312,
};

export const loads: Load[] = [
  {
    id: "LD-7821",
    title: "Steel Coils — 18T",
    origin: "Mumbai, MH",
    destination: "Pune, MH",
    weight: "18,000 kg",
    type: "Heavy Machinery",
    status: "bidding",
    postedBy: "Tata Steel Ltd.",
    postedAt: "12 min ago",
    deadline: "Today, 6:00 PM",
    price: 45000,
    bids: [
      { id: "B1", driverName: "Rajesh Kumar", driverRating: 4.8, amount: 42000, eta: "6h", vehicleType: "Flatbed 20T", timestamp: "8 min ago" },
      { id: "B2", driverName: "Suresh Patel", driverRating: 4.5, amount: 44500, eta: "7h", vehicleType: "Trailer 22T", timestamp: "5 min ago" },
      { id: "B3", driverName: "Amit Singh", driverRating: 4.9, amount: 41000, eta: "5.5h", vehicleType: "Flatbed 20T", timestamp: "2 min ago" },
    ],
  },
  {
    id: "LD-7822",
    title: "Electronics — 4T",
    origin: "Bengaluru, KA",
    destination: "Chennai, TN",
    weight: "4,000 kg",
    type: "Fragile Goods",
    status: "open",
    postedBy: "Wipro Technologies",
    postedAt: "25 min ago",
    deadline: "Tomorrow, 10:00 AM",
    bids: [],
  },
  {
    id: "LD-7823",
    title: "Cement Bags — 25T",
    origin: "Hyderabad, TS",
    destination: "Visakhapatnam, AP",
    weight: "25,000 kg",
    type: "Construction",
    status: "in-transit",
    postedBy: "UltraTech Cement",
    postedAt: "2h ago",
    deadline: "Today, 8:00 PM",
    assignedDriver: "Vikram Reddy",
    price: 62000,
    bids: [
      { id: "B4", driverName: "Vikram Reddy", driverRating: 4.7, amount: 62000, eta: "8h", vehicleType: "Truck 28T", timestamp: "1h ago" },
    ],
  },
  {
    id: "LD-7824",
    title: "Textiles — 8T",
    origin: "Ahmedabad, GJ",
    destination: "Delhi, DL",
    weight: "8,000 kg",
    type: "Consumer Goods",
    status: "assigned",
    postedBy: "Arvind Mills",
    postedAt: "1h ago",
    deadline: "Tomorrow, 2:00 PM",
    assignedDriver: "Manoj Sharma",
    price: 78000,
    bids: [
      { id: "B5", driverName: "Manoj Sharma", driverRating: 4.6, amount: 78000, eta: "14h", vehicleType: "Container 10T", timestamp: "45 min ago" },
    ],
  },
  {
    id: "LD-7825",
    title: "Pharma Supplies — 2T",
    origin: "Pune, MH",
    destination: "Nagpur, MH",
    weight: "2,000 kg",
    type: "Temperature Controlled",
    status: "delivered",
    postedBy: "Cipla Ltd.",
    postedAt: "6h ago",
    deadline: "Today, 12:00 PM",
    assignedDriver: "Sanjay Jadhav",
    price: 35000,
    bids: [
      { id: "B6", driverName: "Sanjay Jadhav", driverRating: 4.9, amount: 35000, eta: "8h", vehicleType: "Reefer 5T", timestamp: "5h ago" },
    ],
  },
];

export const drivers: Driver[] = [
  { id: "D1", name: "Rajesh Kumar", avatar: "RK", rating: 4.8, completedTrips: 342, vehicleType: "Flatbed 20T", licenseNumber: "MH-12-AB-1234", verified: true, status: "available", location: "Mumbai, MH" },
  { id: "D2", name: "Suresh Patel", avatar: "SP", rating: 4.5, completedTrips: 218, vehicleType: "Trailer 22T", licenseNumber: "GJ-05-CD-5678", verified: true, status: "available", location: "Ahmedabad, GJ" },
  { id: "D3", name: "Amit Singh", avatar: "AS", rating: 4.9, completedTrips: 567, vehicleType: "Flatbed 20T", licenseNumber: "DL-01-EF-9012", verified: true, status: "on-trip", location: "Delhi, DL" },
  { id: "D4", name: "Vikram Reddy", avatar: "VR", rating: 4.7, completedTrips: 189, vehicleType: "Truck 28T", licenseNumber: "TS-08-GH-3456", verified: true, status: "on-trip", location: "Hyderabad, TS" },
  { id: "D5", name: "Manoj Sharma", avatar: "MS", rating: 4.6, completedTrips: 421, vehicleType: "Container 10T", licenseNumber: "RJ-14-IJ-7890", verified: true, status: "available", location: "Jaipur, RJ" },
  { id: "D6", name: "Sanjay Jadhav", avatar: "SJ", rating: 4.9, completedTrips: 612, vehicleType: "Reefer 5T", licenseNumber: "MH-14-KL-2345", verified: true, status: "offline", location: "Pune, MH" },
];

export const recentActivity = [
  { id: 1, text: "Bid accepted for LD-7823 — Vikram Reddy", time: "1h ago", type: "bid" as const },
  { id: 2, text: "Load LD-7825 delivered successfully", time: "2h ago", type: "delivery" as const },
  { id: 3, text: "New load posted — LD-7822 by Wipro", time: "25 min ago", type: "load" as const },
  { id: 4, text: "Driver Amit Singh started trip for LD-7820", time: "3h ago", type: "trip" as const },
  { id: 5, text: "3 new bids on LD-7821", time: "8 min ago", type: "bid" as const },
];
