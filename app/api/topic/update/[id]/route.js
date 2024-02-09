import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params: { id } }) {
  // console.log(id);
  try {
    const { title, SubCategoryId } = await request.json();
    const updatedTopic = await db.topic.update({
      where: {
        id,
      },
      data: {
        title,
        subCategory: {
          connect: { id: SubCategoryId },
        },
      },
    });
    // console.log(updatedTopic)
    return NextResponse.json(updatedTopic);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to update a topic",
      },
      {
        status: 500,
      }
    );
  }
}
