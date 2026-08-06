import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!process.env.MONGODB_URL) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Prevent multiple connections during hot reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.MONGODB_URL);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(process.env.MONGODB_URL);
  clientPromise = client.connect();
}

export default clientPromise;
