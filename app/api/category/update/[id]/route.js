import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params: { id } }) {
  // console.log(id);
  try {
    const { description, title } = await request.json();
    const updatedCategory = await db.category.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    // console.log(updatedCategory)
    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to update category",
      },
      {
        status: 500,
      }
    );
  }
}
