import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params: { id } }) {
  console.log(id);
  try {
    const { categoryId, title } = await request.json();
    const updatedSubCategory = await db.subCategory.update({
      where: {
        id,
      },
      data: {
        categoryId,
        title,
      },
    });
    // console.log(updatedSubCategory)
    return NextResponse.json(updatedSubCategory);
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
