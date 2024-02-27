import React from "react";
import { getData } from "@/utils/getData";
import { CreateVideo } from "@/Components/admin/CreateVideo";

export default async function page({ params: { id } }) {
  const video = await getData(`/youtube/${id}`);
  //   console.log(video);

  return (
    <div>
      <CreateVideo initialData={video} />
    </div>
  );
}
