"use client";
import Video from "./Video";
import { getData } from "@/utils/getData";

export default async function Youtube() {
  const videos = await getData("youtube");
  // console.log(videos);

  return (
    <div>
      <Video videos={videos} />
    </div>
  );
}
