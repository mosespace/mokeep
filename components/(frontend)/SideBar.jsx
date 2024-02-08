import React from "react";
import Link from "next/link";

export default function SideBar() {
  const places = [
    {
      title: "React Home",
      link: "/",
    },
    {
      title: "React Intro",
      link: "/",
    },
    {
      title: "React Get Started",
      link: "/",
    },
    {
      title: "React Upgrade",
      link: "/",
    },
    {
      title: "React Get Started",
      link: "/",
    },
    {
      title: "React Upgrade",
      link: "/",
    },
    {
      title: "React Get Started",
      link: "/",
    },
    {
      title: "React Upgrade",
      link: "/",
    },
    {
      title: "React Home",
      link: "/",
    },
    {
      title: "React Intro",
      link: "/",
    },
    {
      title: "React ES6",
      link: "/",
    },
    {
      title: "React Render HTML",
      link: "/",
    },
    {
      title: "React Home",
      link: "/",
    },
    {
      title: "React Intro",
      link: "/",
    },
  ];

  return (
    <div className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-[#0D1224] border-e border-gray-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500'>
      <div className='px-6'>
        <Link
          href='#'
          className='flex-none text-xl font-semibold text-[#FF57C3] focus:outline-none focus:ring-1 focus:ring-gray-600'
          aria-label='Brand'
        >
          {/* {"{{Name}}"} Tutorial */}
          React Tutorial
        </Link>
      </div>
      <div className='mt-2'>
        {places.map((place, i) => (
          <nav className='px-6 py-2 w-full flex flex-col flex-wrap'>
            <ul className='w-full' key={i}>
              <li>
                <Link
                  className='py-2 px-2.5k bg-gray-700k w-full text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600'
                  href={place.link}
                >
                  {place.title}
                </Link>
              </li>
            </ul>
          </nav>
        ))}
      </div>
    </div>
  );
}
