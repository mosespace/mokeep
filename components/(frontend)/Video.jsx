"use client";
import Link from "next/link";
import { Mic, Play } from "lucide-react";
import { useEffect, useState } from "react";
const youtube = require("youtube-metadata-from-url");

export default function Video({ mainTitle = "Learn From Youtube 🫣", videos }) {
  const [videoData, setVideoData] = useState([]);
  //   console.log(videoData);

  useEffect(() => {
    const fetchVideoData = async () => {
      const videoDataPromises = videos.map(async (video) => {
        const url = video.VedioLink;
        const metadata = await youtube.metadata(url);
        return { ...video, metadata }; // Including both original data and metadata
      });

      const fetchedVideoData = await Promise.all(videoDataPromises);
      setVideoData(fetchedVideoData);
    };

    fetchVideoData();
  }, [videos]);

  return (
    <div>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='w-[90%] max-w-[50rem] mx-auto'>
          <header className='my-12 text-xl text-center md:my-32'>
            <Mic className='w-16 h-16 mx-auto mb-12 text-yellow-400 md:w-24 md:h-24' />
            <h1 className='mb-6 text-2xl flex flex-col font-bold md:text-5xl font-title'>
              <span>{mainTitle}</span>
              <span className='text-xl mt-4 text-yellow-400 uppercase md:text-3xl'>
                The Desishub Podcast
              </span>
            </h1>
            <p className='my-2 text-base md:text-xl'>
              Join us as we delve into the dynamic worlds of tech, education,
              and entrepreneurship.
            </p>
            <p className='my-2 text-base md:text-xl'>
              Each youtube-video offers insightful discussions and
              thought-provoking topics on the latest trends and challenges
              shaping the tech industry, economy, and beyond.
            </p>
          </header>

          <div className='flex flex-col'>
            {videoData.map((video, i) => (
              <span key={i}>
                <h2 className='mb-4 text-xl font-bold md:text-2xl font-title'>
                  {video.metadata.title}
                </h2>
                <div className='flex flex-col items-center gap-2 p-4 mb-4 bg-purple-800 rounded-md md:gap-8 md:flex-row'>
                  {video.metadata.thumbnail_url ? (
                    <img
                      src={video.metadata.thumbnail_url}
                      alt='{video.metadata.author_name}'
                      className='block object-cover w-32 rounded-md'
                    />
                  ) : (
                    <div>Loading Thumbnail...</div>
                  )}
                  <div className='flex-1'>
                    <Link
                      href={video.VedioLink}
                      className='px-4 py-1 text-xl font-bold text-gray-900 bg-purple-300 rounded-md'
                    >
                      Watch Video
                    </Link>
                    <div className='mt-4'>
                      <span className='line-clamp-2'>{video.description}</span>
                    </div>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </div>

        {/* <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {videos?.map((video, i) => (
            <div
              key={i}
              className='group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'
            >
              <div className='h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl'>
                {video.image}
              </div>
              <div className='p-4 md:p-6'>
                <span className='block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500'>
                  {video.author}
                </span>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white'>
                  {video.title}
                </h3>
                <p className='mt-3 text-gray-500'>{video.description}</p>
              </div>

              <div className='mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700'>
                <Link
                  className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href={video.courseLink}
                >
                  Enroll Course
                </Link>
                <Link
                  className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href={video.videoLink}
                >
                  Watch Video
                </Link>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
