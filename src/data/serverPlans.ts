export interface ServerPlan {
  id: string;
  name: string;
  price: number;
  location: string;
  ram: string;
  cores: string;
  storage: string;
  bandwidth: string;
  latency?: string;
  speed?: string;
  validity: string;
  warranty: string;
  category: "bandwidth-limit" | "renewal" | "best-offer";
  featured?: boolean;
  extras?: string[];
  tag?: string;
}

export const serverPlans: ServerPlan[] = [
  // BANDWIDTH-LIMIT PLANS
  {
    id: "DO1",
    name: "DO1",
    price: 350,
    location: "USA, India, Singapore, Europe",
    ram: "8GB",
    cores: "4 Core",
    storage: "160GB NVMe",
    bandwidth: "5TB",
    latency: "95ms",
    speed: "2 Gbps",
    validity: "30 Days",
    warranty: "15 Days",
    category: "bandwidth-limit",
    featured: true,
    tag: "⚡ Starter Pack",
  },
  {
    id: "OC1",
    name: "OC1",
    price: 950,
    location: "USA, India, Singapore, Europe",
    ram: "16GB",
    cores: "8 Core",
    storage: "512GB NVMe",
    bandwidth: "8TB",
    speed: "3 Gbps",
    validity: "30 Days",
    warranty: "15 Days",
    category: "bandwidth-limit",
    tag: "🚀 Powerful",
  },
  // RENEWAL SERVER PLANS
  {
    id: "SR1",
    name: "SR1",
    price: 1450,
    location: "Canada",
    ram: "16GB",
    cores: "4 Core",
    storage: "512GB NVMe",
    bandwidth: "10TB",
    speed: "5 Gbps",
    validity: "Renewable",
    warranty: "Full until plan runs",
    category: "renewal",
    extras: ["Extra storage add-on available"],
    tag: "⚡ Super Fast",
  },
  {
    id: "SR2",
    name: "SR2",
    price: 2500,
    location: "Canada",
    ram: "32GB",
    cores: "8 Core",
    storage: "1TB NVMe",
    bandwidth: "20TB",
    speed: "5 Gbps",
    validity: "Renewable",
    warranty: "Full until plan runs",
    category: "renewal",
    featured: true,
    extras: ["Extra storage add-on available"],
    tag: "🔥 Beast Mode",
  },
  {
    id: "SR3",
    name: "SR3",
    price: 1200,
    location: "Europe",
    ram: "8GB",
    cores: "4 Core",
    storage: "256 NVMe",
    bandwidth: "Unlimited (Per day 3TB Bandwidth 5Gbps After 300Mbps Until Next Day)",
    speed: "5 Gbps",
    validity: "Renewable",
    warranty: "Full until plan runs",
    category: "renewal",
    tag: "🌍 Europe Value",
  },
  // UNLIMITED BANDWIDTH - BEST OFFER
  {
    id: "NP250",
    name: "NP250",
    price: 1000,
    location: "Amsterdam",
    ram: "8GB DDR5",
    cores: "4 Core",
    storage: "256GB + 1000GB NVMe",
    bandwidth: "Unlimited (Per day 3TB Bandwidth 2.5Gbps After 300Mbps Until Next Day)",
    speed: "2.5 Gbps",
    validity: "30 Days",
    warranty: "20 Days",
    category: "best-offer",
    featured: true,
    tag: "💎 Best Value | AMD Ryzen 3.7 GHz",
    extras: ["Extra storage add-on available (applicable charges, up to 5TB, ₹180 per additional 1TB)"],
  },
  {
    id: "NP450",
    name: "NP450",
    price: 1500,
    location: "Amsterdam, USA",
    ram: "16GB DDR5",
    cores: "8 Core",
    storage: "512GB NVMe",
    bandwidth: "Unlimited (Per day 3TB Bandwidth 2.5Gbps After 200Mbps Until Next Day)",
    speed: "2.5 Gbps",
    validity: "30 Days",
    warranty: "20 Days",
    category: "best-offer",
    featured: true,
    tag: "🚀 High Performance",
    extras: ["Extra storage add-on available (applicable charges, up to 5TB, ₹180 per additional 1TB)"],
  },
  {
    id: "NP350",
    name: "NP350",
    price: 2000,
    location: "Asia Singapore",
    ram: "16GB DDR5",
    cores: "8 Core",
    storage: "512GB NVMe",
    bandwidth: "Unlimited (Per day 3TB Bandwidth 2.5Gbps After 200Mbps Until Next Day)",
    speed: "2.5 Gbps",
    validity: "30 Days",
    warranty: "20 Days",
    category: "best-offer",
    tag: "🌏 Asia Optimized",
    extras: ["Extra storage add-on available (applicable charges, up to 5TB, ₹180 per additional 1TB)"],
  },
  {
    id: "NP550",
    name: "NP550",
    price: 1700,
    location: "Amsterdam, USA",
    ram: "32GB DDR5",
    cores: "12 Core",
    storage: "1024GB NVMe",
    bandwidth: "Unlimited (Per day 3TB Bandwidth 2.5Gbps After 200Mbps Until Next Day)",
    speed: "2.5 Gbps",
    validity: "30 Days",
    warranty: "20 Days",
    category: "best-offer",
    tag: "💪 Very Powerful",
    extras: ["Extra storage add-on available (applicable charges, up to 5TB, ₹180 per additional 1TB)"],
  },
  {
    id: "NP550-SG",
    name: "NP550",
    price: 2200,
    location: "Asia Singapore",
    ram: "32GB DDR5",
    cores: "12 Core",
    storage: "1024GB NVMe",
    bandwidth: "Unlimited (Per day 3TB Bandwidth 2.5Gbps After 200Mbps Until Next Day)",
    speed: "2.5 Gbps",
    validity: "30 Days",
    warranty: "20 Days",
    category: "best-offer",
    tag: "🌏 Asia Beast",
    extras: ["Extra storage add-on available (applicable charges, up to 5TB, ₹180 per additional 1TB)"],
  },
  {
    id: "NP1450",
    name: "NP1450",
    price: 2500,
    location: "Amsterdam, USA",
    ram: "64GB DDR5",
    cores: "16 Core",
    storage: "2000GB NVMe",
    bandwidth: "Unlimited (Per day 3TB Bandwidth 2.5Gbps After 200Mbps Until Next Day)",
    speed: "2.5 Gbps",
    validity: "30 Days",
    warranty: "20 Days",
    category: "best-offer",
    tag: "🔥 Ultra Powerful",
    extras: ["Extra storage add-on available (applicable charges, up to 5TB, ₹180 per additional 1TB)"],
  },
  {
    id: "NP1650",
    name: "NP1650",
    price: 2700,
    location: "Asia Singapore",
    ram: "64GB DDR5",
    cores: "16 Core",
    storage: "2000GB NVMe",
    bandwidth: "Unlimited (Per day 3TB Bandwidth 2.5Gbps After 200Mbps Until Next Day)",
    speed: "2.5 Gbps",
    validity: "30 Days",
    warranty: "20 Days",
    category: "best-offer",
    tag: "👑 Supreme Beast",
    extras: ["Extra storage add-on available (applicable charges, up to 5TB, ₹180 per additional 1TB)"],
  },
];

export const faqData = [
  {
    question: "What is Validity?",
    answer: "Validity means the expected time the server will run as per the plan.",
  },
  {
    question: "What is Warranty?",
    answer: "If the server is banned from the seller's side and rules are followed, a free full replacement is provided.",
  },
  {
    question: "What is your Backup Policy?",
    answer: "Users must take regular backups. Seller is not responsible for data loss.",
  },
];

export const termsAndConditions = [
  "BTC mining",
  "Brute force",
  "RDP/VPS cracking",
  "BTC wallet cracking",
  "IP or web crawling",
  "DDoS / flooding",
  "Website shell hacking",
  "Phishing pages",
  "Direct VPN usage",
  "Port scanning",
  "Password sharing",
  "Torrent usage",
];

export interface BroadcastMessage {
  id: string;
  message: string;
  type: "info" | "warning" | "success";
  date: string;
}

export const broadcastMessages: BroadcastMessage[] = [
  {
    id: "price-update-2026",
    message: "📢 All plans prices slightly increased due to RAM & storage price hike globally. We appreciate your understanding!",
    type: "warning",
    date: "Feb 2026",
  },
];
