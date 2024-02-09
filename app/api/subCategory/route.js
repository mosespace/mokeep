import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { categoryId, title } = await request.json();
    //  console.log({ categoryId,title  })
    const existingSubCategory = await db.subCategory.findFirst({
      where: {
        title: title,
      },
    });
    // console.log(existingSubCategory)
    if (existingSubCategory) {
      return NextResponse.json(
        {
          error: "subCategory with this title  already exists",
          message: "subCategory creation failed",
        },
        {
          status: 400,
        }
      );
    }

    const subCategory = await db.subCategory.create({
      data: {
        title,
        categoryId,
      },
    });
    // console.log(subCategory)
    return NextResponse.json({
      data: {
        subCategory,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a subCategory",
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET(request) {
  try {
    const subcategories = await db.subCategory.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(subcategories);
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
