import db from "./db";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import {toast} from "sonner";

export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Moses",
      credentials: {
        firstName: {
          label: "firstName",
          type: "text",
          placeholder: "Enter First Name",
        },
        secondName: {
          label: "secondName",
          type: "text",
          placeholder: "Enter Second Name",
        },
        email: {
          label: "email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Your Password",
        },
      },
      async authorize(credentials) {
        try {
          // Checking if the user credentials are correct
          // console.log("step 1 ✅", credentials);
          if (
            !(
              // credentials?.firstName ||
              // credentials?.secondName ||
              credentials?.email
            )
            // ||
            // credentials?.password
          ) {
            // console.log("Step 2 ✅", "No Inputs");
            return null;
          }

          // Checking if user exists
          const existing_user = await db.user.findUnique({
            where: { email: credentials.email },
          });
          // console.log("Step 3 ✅", existing_user);
          if (!existing_user) {
            console.log("No User Found");
            return null;
          }

          // Checking if password is correct
          const passwordMatch = await compare(
            credentials.password,
            existing_user.password
          );
          if (!passwordMatch) {
            // console.log("Step 4 ✅", "Password incorrect", passwordMatch);
            toast.error("The password is incorrect");
            return null;
          }

          // Updating the user data
          const user = {
            id: existing_user.id,
            firstName: existing_user.firstName,
            secondName: existing_user.secondName,
            email: existing_user.email,
            password: existing_user.password,
          };
          // console.log("Step 5 ✅", user);
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // console.log(user);
      // console.log(token);
      // console.log(token);
      const { firstName, secondName } = token;
      session.user.name = `${firstName} ${secondName}`;
      session.user.firstName = firstName;
      session.user.secondName = secondName;

      // console.log(session);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log(user);
      // Spread user data into the token
      if (user) {
        token = { ...token, ...user };
      }
      // console.log(token);
      return token;
    },
  },
};
