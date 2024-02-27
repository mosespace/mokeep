import { NotesForm } from "@/Components/admin/NotesForm";
import { getData } from "@/utils/getData";
import React from "react";

export default async function page() {
  const categories = await getData("category");
  const subCategory = await getData("subCategory");
  const topics = await getData("topic");
  return (
    <div>
      <NotesForm
        topics={topics}
        categories={categories}
        subCategory={subCategory}
      />
    </div>
  );
}
