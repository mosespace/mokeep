import React from "react";
import { getData } from "@/utils/getData";
import GridSection from "@/components/dashboard/GridSection";
import Head from "@/components/admin/Head";

export default async function page() {
  const notes = await getData("notes");
  return (
    <div className='flex flex-col'>
      <Head
        title={
          "NOTE : Before creating notes first choose the subCategories , categories , and the topics"
        }
        link={"/admin/notes/create"}
      />
      <GridSection data={notes} />
    </div>
  );
}
