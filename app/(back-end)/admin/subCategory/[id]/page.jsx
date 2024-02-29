import React from "react";
import { getData } from "@/utils/getData";
import { SubCategoriesForm } from "@/components/admin/SubCategoriesForm";

export default async function page({ params: { id } }) {
  const subCategories = await getData(`subCategory/${id}`);
  const categories = await getData("category");
  // console.log(subCategories);

  return (
    <div>
      <SubCategoriesForm categories={categories} initialData={subCategories} />
    </div>
  );
}
