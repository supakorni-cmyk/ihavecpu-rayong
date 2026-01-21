import { getStore } from "@netlify/blobs";

// 1. We include the initial data directly here to ensure the database 
// can be seeded immediately upon the first deployment/load.
const INITIAL_DATA = {
  "exteriorLogo": {
    "name": "Exterior Logo",
    "layoutImages": ["images/exterior_logo.jpg"],
    "spots": {
      "EX1": { "name": "EX1", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX2": { "name": "EX2", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX3": { "name": "EX3", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX4": { "name": "EX4", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX5": { "name": "EX5", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX6": { "name": "EX6", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX7": { "name": "EX7", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX8": { "name": "EX8", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" }
    }
  },
  "exteriorSticker": {
    "name": "Exterior Sticker",
    "layoutImages": ["images/exterior_sticker.jpg"],
    "spots": {
      "FST-1": { "name": "FST-1", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-2": { "name": "FST-2", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-3": { "name": "FST-3", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-4": { "name": "FST-4", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-5": { "name": "FST-5", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-6": { "name": "FST-6", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-7": { "name": "FST-7", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-8": { "name": "FST-8", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-9": { "name": "FST-9", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" }
    }
  },
  "interiorSticker": {
    "name": "Interior Sticker",
    "layoutImages": ["images/ist1-2.jpg", "images/ist3-6.jpg", "images/ist7.jpg"],
    "spots": {
      "IST-1": { "name": "IST-1", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-2": { "name": "IST-2", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-3": { "name": "IST-3", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "IST-4": { "name": "IST-4", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" },
      "IST-5": { "name": "IST-5", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" },
      "IST-6": { "name": "IST-6", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" },
      "IST-7": { "name": "IST-7", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" }
    }
  },
  "interiorLogo": {
    "name": "Interior Logo",
    "layoutImages": ["images/A1-6.jpg", "images/A7-10.jpg", "images/A11-12.jpg", "images/A13-19.jpg"],
    "spots": {
      "A1": { "name": "A1 - CPU", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A2": { "name": "A2 - CPU", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A3": { "name": "A3 - CASE & COOLING", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A4": { "name": "A4 - CASE & COOLING", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A5": { "name": "A5 - CASE & COOLING", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A6": { "name": "A6 - CASE & COOLING", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A7": { "name": "A7 - MONITOR", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A8": { "name": "A8 - MONITOR", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A9": { "name": "A9 - MONITOR", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A10": { "name": "A10 - MONITOR", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A11": { "name": "A11 - GAMING GEAR", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A12": { "name": "A12 - GAMING GEAR", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A13": { "name": "A13 - GAMING GEAR", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A14": { "name": "A14 - GAMING GEAR", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A15": { "name": "A15 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A16": { "name": "A16 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A17": { "name": "A17 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A18": { "name": "A18 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A19": { "name": "A19 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" }
    }
  }
};

export default async (req) => {
    try {
        const spotsStore = getStore("spots");
        
        // 2. Try to get existing data
        let adSpots = await spotsStore.get("spots-data", { type: "json" });
        
        // 3. IF DATA IS MISSING (First load), use INITIAL_DATA and save it
        if (!adSpots) {
            console.log("Database empty. Seeding with initial data...");
            adSpots = INITIAL_DATA;
            await spotsStore.setJSON("spots-data", adSpots);
        }

        return new Response(JSON.stringify(adSpots), { headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.error("API Error:", error);
        return new Response(JSON.stringify({ message: "Error reading data" }), { status: 500 });
    }
};