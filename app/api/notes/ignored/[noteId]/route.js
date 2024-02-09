import db from "@/utils/db";
import { NextResponse } from "next/server";

// Getting back the noteId from MongoDB
export async function GET(request, { params: { noteId } }) {
  // console.log("Received id:", noteId);
  try {
    const note = await db.note.findUnique({
      where: {
        id: noteId,
      },
      include: {
        user: true,
      },
    });

    // console.log("User:", user);

    if (!note) {
      // Logging to see is the note is not there in the db
      console.error("Note was not found in the database with id:", noteId);
      return NextResponse.json(
        {
          message: "Note not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(note);
  } catch (error) {
    console.error("Error fetching a single note:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch a single note",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// Update a note using the PUT method;
export async function PUT(request, { params: { noteId } }) {
  try {
    // Get the data from the request
    const { title, description } = await request.json();

    const updatedNote = await db.note.update({
      where: {
        id: noteId,
      },
      data: {
        title,
        description,
      },
    });

    // console.log(updatedNote);

    return NextResponse.json(
      {
        message: "Successfully updated the note",
        data: updatedNote,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unsuccessful PUT",
        error,
      },
      { status: 500 }
    );
  }
}

// Deleting a note using the DELETE method;
export async function DELETE(request, { params: { noteId } }) {
  // console.log(noteId);
  try {
    const deletedNote = await db.note.delete({
      where: { id: noteId },
    });

    // console.log(deletedNote);
    return NextResponse.json(
      {
        message: "Successfully updated the note",
        data: deletedNote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error deleting a note from the note list:", error);

    return NextResponse.json(
      {
        message: "Error deleting a note from the note list",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
