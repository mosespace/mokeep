import Categories from "@/components/admin/Categories";
import { CategoryForm } from "@/components/admin/Form";
import React from "react";

export default function page() {
  return (
    <div className='flex flex-col p-4 '>
      <CategoryForm />
      <Categories />
    </div>
  );
}
