import { TopicForm } from "@/components/admin/TopicForm";
import { getData } from "@/utils/getData";
import React from "react";

export default async function page() {
  const catagories = await getData("category");
  const subCatagories = await getData("subCategory");
  return (
    <div>
      <TopicForm subCatagories={subCatagories} catagories={catagories} />
    </div>
  );
}
