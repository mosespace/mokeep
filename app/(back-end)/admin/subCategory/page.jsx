import { CategoryForm } from '@/components/admin/Form'
import { SubCategoriesForm } from '@/components/admin/SubCategoriesForm'
import { getData } from '@/utils/getData'
import React from 'react'

export default async function page() {
const categories= await getData("category")
  return (
    <div className="flex p-4 ">
        <SubCategoriesForm categories={categories}/>
    </div>
  )
}
