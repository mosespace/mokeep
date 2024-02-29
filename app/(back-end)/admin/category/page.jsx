import React from "react";
import { getData } from "@/utils/getData";
import Categories from "@/components/admin/Categories";
import Head from "@/components/admin/Head";

export default async function page() {
  const categories = await getData("category");
  return (
    <div className='flex flex-col'>
      <Head
        title={"Create a new category before you create notes"}
        link={"/admin/category/create"}
      />
      <Categories data={categories} />
    </div>
  );
}
