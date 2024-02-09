import React from "react";
import { getData } from "@/utils/getData";
import Categories from "@/components/admin/Categories";
import SubCategory from "@/components/admin/SubCategory";
import { SubCategoriesForm } from "@/components/admin/SubCategoriesForm";
import Head from "@/components/admin/Head";

export default async function page() {
  const subCategories = await getData("subCategory");
  // console.log(subCategories);
  return (
    <div className='flex flex-col p-4'>
      <Head title={"Create a new sub-category before you create notes"} link={"/admin/subCategory/create"}/>
      <SubCategory data={subCategories} />
    </div>
  );
}
