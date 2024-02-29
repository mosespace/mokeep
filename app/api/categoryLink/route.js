import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title } = await request.json();
    console.log(title)
    const existingCategory = await db.linkCategory.findFirst({
      where: {
        title: title,
      },
    });
    console.log(existingCategory)
    if (existingCategory) {
      return NextResponse.json(
        {
          error: "Category with this title  already exists",
          message: "Category creation failed",
        },
        {
          status: 400,
        }
      );
    }

    const category = await db.linkCategory.create({
      data: {
        title,
      },
    });
    console.log(category)
    return NextResponse.json({
      data: {
        category,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a category",
      },
      {
        status: 500,
      }
    );
  }
}


export async function GET(request) {
  try {
    const categories = await db.linkCategory.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch categories",
      },
      {
        status: 500,
      }
    );
  }
}
