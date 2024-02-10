import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const   {title, resourcelink,description,linkCategoryId} = await request.json();
    // console.log(title)
    const existingLink= await db.link.findFirst({
      where: {
        title: title,
      },
    });
    // console.log(existingLink)
    if (existingLink) {
      return NextResponse.json(
        {
          error: "link with this title  already exists",
          message: "link creation failed",
        },
        {
          status: 400,
        }
      );
    }

    const link = await db.link.create({
      data: {
        title, link:resourcelink,description,linkCategoryId,
      },
    });
    console.log(link)
    return NextResponse.json({
      data: {
        link,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a link",
      },
      {
        status: 500,
      }
    );
  }
}


export async function GET(request) {
  try {
    const link = await db.link.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(link);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch link",
      },
      {
        status: 500,
      }
    );
  }
}
