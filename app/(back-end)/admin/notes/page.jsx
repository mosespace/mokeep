import React from "react";
import { getData } from "@/utils/getData";
import { NotesForm } from "@/components/admin/NotesForm";
import GridSection from "@/components/dashboard/GridSection";

export default async function page() {
  const categories = await getData("category");
  const subCategory = await getData("subCategory");
  const topics = await getData("topic");
  const notes = await getData("notes");
  return (
    <div className='flex flex-col'>
      <NotesForm
        topics={topics}
        categories={categories}
        subCategory={subCategory}
      />
      <GridSection data={notes}/>
    </div>
  );
}
