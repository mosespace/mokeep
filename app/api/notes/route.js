import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, emailId } = await request.json();

    const newNote = await db.note.create({
      data: {
        title,
        description,
        emailId,
      },
    });
    // console.log(newNote);

    return NextResponse.json(newNote, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
