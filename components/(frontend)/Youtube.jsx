"use client";
import { getData } from "@/utils/getData";
import Video from "./Video";

export default async function Youtube() {
  const videos = await getData("youtube");
  // console.log(videos);

  return (
    <div>
      <Video videos={videos} />
    </div>
  );
}
