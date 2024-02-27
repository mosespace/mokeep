import React from "react";
import { getData } from "@/utils/getData";
import Head from "@/Components/admin/Head";
import SubCategory from "@/Components/admin/SubCategory";

export default async function page() {
  const subCategories = await getData("subCategory");
  // console.log(subCategories);
  return (
    <div className='flex flex-col p-4'>
      <Head
        title={"Create a new sub-category before you create notes"}
        link={"/admin/subCategory/create"}
      />
      <SubCategory data={subCategories} />
    </div>
  );
}
