import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);


import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

export async function connectDB() {
  try {
    console.log("==================================");
    console.log("Connecting to MongoDB...");
    console.log("URI exists:", !!process.env.MONGODB_URI);
    console.log(
      "URI:",
      process.env.MONGODB_URI?.replace(/\/\/(.*):(.*)@/, "//****:****@")
    );

    const conn = await mongoose.connect(MONGODB_URI);

    console.log("✅ MongoDB Connected Successfully");
    console.log("==================================");

    return conn;
  } catch (error) {
    console.error("==================================");
    console.error("❌ MongoDB Connection Error:");
    console.error(error);
    console.error("==================================");

    throw error;
  }
}