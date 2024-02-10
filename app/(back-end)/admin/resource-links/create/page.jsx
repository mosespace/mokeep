import LinksForm from '@/components/LinksForm'
import { getData } from '@/utils/getData'
import React from 'react'

export default async function page() {
  const linksCategories=await getData("/categoryLink")
  // console.log(linksCategories)
  return (
    <div>
      <LinksForm linksCategories={linksCategories}/>
    </div>
  )
}
