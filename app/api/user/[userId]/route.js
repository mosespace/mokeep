import db from "@/utils/db";
import { NextResponse } from "next/server";

// Getting back the user from MongoDB
export async function GET(request, { params: { userId } }) {
  // console.log("Received id:", userId);

  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        notes: true,
      },
    });

    // console.log("User:", user);

    if (!user) {
      // Logging to see is the user is not there in the db
      console.error("User not found in the database with id:", userId);
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching a single user:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch a single user",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
