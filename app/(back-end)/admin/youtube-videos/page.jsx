import React from "react";
import Head from "@/components/admin/Head";
import Videos from "@/components/admin/Videos";
import { getData } from "@/utils/getData";

export default async function page() {
  const videos = await getData("youtube");
  //   console.log(videos);
  return (
    <div>
      <Head title='Youtube Video' link='/admin/youtube-videos/create' />
      <div className='mt-5'>
        <Videos data={videos} />
      </div>
    </div>
  );
}
