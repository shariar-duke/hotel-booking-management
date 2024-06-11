import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClientPromise from "./database/mongoClientPromise";
import { userModel } from "./models/user-model";
import bcrypt from "bcrypt";

export  const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),

  session:{
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {}, // ei duta k empty rakhar karon holo amader kase already ui ase
        password: {},
      },
      async authorize(credentials) {
        if (credentials == null) {
          return null; // ei ta tokhn hbe jokhn holo keu username and password ta dbei na tokhn.
        }

        try {
          // user model theke amra email id dia anar try korbo j ase naki ei email. jode email thake tahoel pore emai r passwor ta match kore dekhb

          const user = await userModel.findOne({ email: credentials.email });

          if (user) {
            // email ta abar milay dekhalm
            const isMatch =  bcrypt.compare(credentials.password, user.password);

            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or password mismatch");
            }

            // jode mile jay then...
          } else {
            throw new Error("User not found");
          }

          // jdoe user pia tahoel password ta mile dekhbo
          // jdoe na pai tahle abar error throw kora jete pre ...
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
