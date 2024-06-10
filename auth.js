import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import mongoClientPromise from "./database/mongoClientPromise";
// import { userModel } from "./models/user-model";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
