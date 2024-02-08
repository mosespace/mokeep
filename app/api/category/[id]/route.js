import db from "@/utils/db";
import { NextResponse } from "next/server";
import { MdCategory } from "react-icons/md";

export async function GET(request, { params: { id } }) {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch category",
      },
      {
        status: 500,
      }
    );
  }
}
