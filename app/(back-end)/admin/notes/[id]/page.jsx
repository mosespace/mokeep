import React from "react";
import { getData } from "@/utils/getData";
import { NotesForm } from "@/components/admin/NotesForm";

export default async function page({ params: { id } }) {
  const noteId = id;
  const note = getData(`note/${noteId}`);
//   console.log(note);

  const categories = await getData("category");
  const subCategory = await getData("subCategory");
  const topics = await getData("topic");

  return (
    <div>
      <NotesForm
        topics={topics}
        categories={categories}
        subCategory={subCategory}
        initialData={note}
      />
    </div>
  );
}
