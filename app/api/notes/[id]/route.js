import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  // console.log(id);
  try {
    if (!id) {
      throw new Error("ID parameter is missing");
    }
    const note = await db.notes.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
        subCategory: true,
        topic: true,
      },
    });
    return NextResponse.json(note);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch note",
      },
      {
        status: 500,
      }
    );
  }
}
