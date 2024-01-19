import { ObjectId } from "mongoose";
import NextAuth, { DefaultSession } from "next-auth";
import { User } from "@models/User";
import { connect } from "@utils/db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
    };
  }
}
