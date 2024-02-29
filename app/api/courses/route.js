import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, slug, image, description, price, discount, comingSoon } =
      await request.json();
    //  console.log({ description,title })
    const existingCourse = await db.course.findFirst({
      where: {
        title: title,
      },
    });
    // console.log(existingCategory)

    if (existingCourse) {
      return NextResponse.json(
        {
          error: "Course with this title  already exists",
          message: "Course creation failed",
        },
        {
          status: 400,
        }
      );
    }

    const course = await db.course.create({
      data: {
        title,
        slug,
        image,
        description,
        price,
        discount,
        comingSoon,
      },
    });

    return NextResponse.json({
      data: {
        course,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a course",
      },
      {
        status: 500,
      }
    );
  }
}
