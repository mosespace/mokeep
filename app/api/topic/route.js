import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, SubCategoryId } = await request.json();
    const existingTopic = await db.topic.findFirst({
      where: {
        title: title,
      },
    });
    if (existingTopic) {
      return NextResponse.json(
        {
          error: "topic with this title  already exists",
          message: "topic creation failed",
        },
        {
          status: 400,
        }
      );
    }

    const topic = await db.topic.create({
      data: {
        title,
        subCategory: {
          connect: { id: SubCategoryId },
        },
      },
    });
    // console.log(topic)
    return NextResponse.json({
      data: {
        topic,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a topic",
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET(request) {
  try {
    const topics = await db.topic.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        subCategory: true,
      },
    });
    return NextResponse.json(topics);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch a topic",
      },
      {
        status: 500,
      }
    );
  }
}
