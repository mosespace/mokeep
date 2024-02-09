import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params: { id } }) {
  // console.log(id);
  try {
    const { title, categoryId, subCategoryId, topicsId, description, value } = await request.json();
    const updatedNotes = await db.notes.update({
      where: {
        id,
      },
      data: {
        title, categoryId, subCategoryId, topicsId, description, value
      },
    });
    // console.log(updatedNotes)
    return NextResponse.json(updatedNotes);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to update a note",
      },
      {
        status: 500,
      }
    );
  }
}
