import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const video = await db.YouTube.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(video);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch video",
      },
      {
        status: 500,
      }
    );
  }
}
