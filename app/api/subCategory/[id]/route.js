import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const subCategory = await db.subCategory.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(subCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch a Sub-subCategory",
      },
      {
        status: 500,
      }
    );
  }
}
