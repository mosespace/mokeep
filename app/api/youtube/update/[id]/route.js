import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params: { id } }) {
  // console.log(id);
  try {
    const { VedioLink, courseLink, description } = await request.json();
    const updatedVideo = await db.YouTube.update({
      where: {
        id,
      },
      data: {
        VedioLink,
        courseLink,
        description,
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

export async function DELETE(request, { params: { id } }) {
  // console.log(id);
  try {
    const notFound = await db.YouTube.findFirst({
      where: {
        id,
      },
    });

    // console.log("notFound below", notFound);

    if (!notFound) {
      return NextResponse.json(
        {
          error,
          message: `Video with id: ${id} has not been found in our database. Please crosscheck again`,
        },
        {
          status: 500,
        }
      );
    }
    const deletedVideo = await db.YouTube.delete({
      where: {
        id,
      },
    });
    console.log(deletedVideo);
    return NextResponse.json(deletedVideo);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to delete video",
      },
      {
        status: 500,
      }
    );
  }
}
