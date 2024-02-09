import React from "react";
import { getData } from "@/utils/getData";
import Categories from "@/components/admin/Categories";
import SubCategory from "@/components/admin/SubCategory";
import { SubCategoriesForm } from "@/components/admin/SubCategoriesForm";

export default async function page() {
  const categories = await getData("category");
  const subCategories = await getData("subCategory");
  // console.log(subCategories);
  return (
    <div className='flex flex-col p-4'>
      <SubCategoriesForm categories={categories} />
      <SubCategory data={subCategories} />
    </div>
  );
}
