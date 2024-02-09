import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params: { id } }) {
  // console.log(id);
  try {
    const { title, VedioLink, author,courseLink, description } = await request.json();
    const updatedVideo = await db.YouTube.update({
      where: {
        id,
      },
      data: {
        title,
        VedioLink,
        courseLink,
        description,
        author,
      },
    });
    // console.log(updatedVideo)
    return NextResponse.json(updatedVideo);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to update a video",
      },
      {
        status: 500,
      }
    );
  }
}
