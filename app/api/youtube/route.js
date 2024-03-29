import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { VedioLink, courseLink, description } = await request.json();
    const existingVideo = await db.YouTube.findFirst({
      where: {
        VedioLink: VedioLink,
      },
    });
    if (existingVideo) {
      return NextResponse.json(
        {
          error: "video with this link  already exists",
          message: "video creation failed",
        },
        {
          status: 400,
        }
      );
    }

    const youtubeVideo = await db.YouTube.create({
      data: {
        VedioLink,
        courseLink,
        description,
      },
    });
    // console.log(video)
    return NextResponse.json(youtubeVideo);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a video",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const videos = await db.YouTube.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(videos);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch videos",
      },
      {
        status: 500,
      }
    );
  }
}
