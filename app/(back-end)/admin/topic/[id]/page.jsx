import React from "react";
import { getData } from "@/utils/getData";
import { TopicForm } from "@/Components/admin/TopicForm";

export default async function page({ params: { id } }) {
  const catagories = await getData("category");
  const subCatagories = await getData("subCategory");
  const topic = await getData(`topic/${id}`);
  //   console.log(topic);
  return (
    <div>
      <TopicForm
        subCatagories={subCatagories}
        catagories={catagories}
        initialData={topic}
      />
    </div>
  );
}
