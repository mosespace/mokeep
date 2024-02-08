import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, categoryId, subCategoryId, topicsId, description, value } = await request.json();

    if (!topicsId) {
      return NextResponse.json(
        {
          error: "Invalid request",
          message: "Topic ID is required",
        },
        {
          status: 400,
        }
      );
    }

    const existingNotes = await db.notes.findFirst({
      where: {
        title: title,
      },
    });

    if (existingNotes) {
      return NextResponse.json(
        {
          error: "Notes with this title already exists",
          message: "Notes creation failed",
        },
        {
          status: 400,
        }
      );
    }

    const notes = await db.notes.create({
      data: {
        title,
        category: {
          connect: { id: categoryId }
        },
        subCategory: {
          connect: { id: subCategoryId }
        },
        topic: {
          connect: { id: topicsId }
        },
        description,
        content: value
      },
    });

    return NextResponse.json({
      data: {
        notes,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Notes",
      },
      {
        status: 500,
      }
    );
  }
}


export async function GET(request) {
    try {
      const  notes = await db.notes.findMany({
        orderBy: {
         createdAt : "desc" 
        },
      });
      return NextResponse.json(notes);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch notes",
        },
        {
         status: 500,
        }
      );
    }
  }