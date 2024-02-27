import DetailedNotes from "@/Components/(frontend)/DetailedNotes";
import { getData } from "@/utils/getData";
import React from "react";

export default async function page({ params: { id } }) {
  // console.log(id);
  // 65c9e12c7e46d8fb929f2122
  const notes = await getData("notes");
  const filteredNote = notes.find((note) => note.topicId === id);
  // console.log(notes);
  // console.log(filteredNote);

  return (
    <div>
      <DetailedNotes data={filteredNote}></DetailedNotes>
    </div>
  );
}
