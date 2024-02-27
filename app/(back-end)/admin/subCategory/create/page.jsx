import { SubCategoriesForm } from "@/Components/admin/SubCategoriesForm";
import { getData } from "@/utils/getData";
import React from "react";

export default async function page() {
  const categories = await getData("category");

  return (
    <div>
      <SubCategoriesForm categories={categories} />
    </div>
  );
}
