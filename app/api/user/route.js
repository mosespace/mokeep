import db from "@/utils/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, secondName, password, email } = await request.json();

    // console.log(firstName, secondName, password, email);
    // Checking if the user already exists in the database
    const user_exists = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (user_exists) {
      return NextResponse.json(
        {
          message: "User Already exists",
          user: null,
        },
        {
          status: 409,
        }
      );
    }

    // Do $ yarn add bcrypt before using hash
    const hashedPassword = await hash(password, 8);
    const new_user = await db.user.create({
      data: {
        firstName,
        secondName,
        email,
        password: hashedPassword,
      },
    });
    // console.log(new_user);
    return NextResponse.json(new_user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
