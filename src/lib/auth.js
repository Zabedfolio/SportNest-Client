import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getAuthBaseURL } from "./auth-url";

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db("SportNest");

export const auth = betterAuth({
  baseURL: getAuthBaseURL(),
  database: mongodbAdapter(db, {
  }),

  emailAndPassword: { 
    enabled: true, 
  }, 
  trustedOrigins: [
    "http://localhost:3000",
    "https://sport-nest-zabedfolio.vercel.app",
  ], 
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});