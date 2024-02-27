import React from "react";
import { getData } from "@/utils/getData";
import { CategoryForm } from "@/Components/admin/Form";

export default async function page({ params: { id } }) {
  const category = await getData(`category/${id}`);
  //   console.log(category);

  return (
    <div>
      <CategoryForm initialData={category} />
    </div>
  );
}
