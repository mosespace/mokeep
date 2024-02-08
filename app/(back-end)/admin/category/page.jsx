import React from "react";
import { getData } from "@/utils/getData";
import Categories from "@/components/admin/Categories";
import { CategoryForm } from "@/components/admin/Form";

export default async function page() {
  const categories = await getData("category");

  return (
    <div className='flex flex-col p-4 '>
      <CategoryForm />
      <Categories data={categories} />
    </div>
  );
}
