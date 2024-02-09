import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const topic = await db.topic.findUnique({
      where: {
        id,
      },
      include: {
        subCategory: true,
      },
    });
    return NextResponse.json(topic);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch a topic",
      },
      {
        status: 500,
      }
    );
  }
}
