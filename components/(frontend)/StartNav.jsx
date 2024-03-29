"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import StickyNav from "./StickyNav";

export const StartNav = ({ courses }) => {
  // console.log(courses);
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  if (pathname === `/dashboard/${userId}` || pathname === `/dashboard`) {
    return null;
  }
  if (pathname.startsWith("/dashboard") && pathname !== "/dashboard") {
    return null;
  }
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const links = [
    {
      title: "Notes",
      link: "/",
    },
    {
      title: "UseFul Links",
      link: "/useful-links",
    },
    {
      title: "YouTube Videos",
      link: "/youtube-videos",
    },
  ];
  return (
    <div className='flex flex-col'>
      <div className='dark:bg-slate-900 dark:border-gray-700'>
        <div className='px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <div className='relative flex items-center justify-between'>
            <Link href='/' className='inline-flex items-center'>
              <Image
                width={500}
                height={310}
                src='/logo-red.png'
                alt='desishub-coding-school'
                className='w-[4.5rem] h-12'
              />
            </Link>
            <ul className='md:flex items-center hidden space-x-8 lg:flex'>
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.link}
                    className='font-medium tracking-wide  text-slate-950 transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href='/register'
                  className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FF57C3]'
                >
                  Sign up
                </Link>
              </li>
            </ul>
            <div className='lg:hidden'>
              <button
                aria-label='Open Menu'
                title='Open Menu'
                className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                  />
                  <path
                    fill='currentColor'
                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                  />
                  <path
                    fill='currentColor'
                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className='absolute top-0 left-0 w-full'>
                  <div className='p-5 bg-white border rounded shadow-sm'>
                    <div className='flex items-center justify-between mb-4'>
                      {/* <div>
                      <Image
                        width={96}
                        height={96}
                        src='/desishub-coding-school-logo.png'
                        alt='desishub-coding-school-logo'
                        className='w-[4.5rem] text-teal-accent-400'
                      />
                    </div> */}
                      <span className='text-xl font-bold tracking-wide  text-[#FF57C3]'>
                        Desis<span className='font-light'>Hub</span>
                      </span>
                      <div>
                        <button
                          aria-label='Close Menu'
                          title='Close Menu'
                          className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className='w-5 text-gray-600'
                            viewBox='0 0 24 24'
                          >
                            <path
                              fill='currentColor'
                              d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className='space-y-4'>
                        {/* <li>
                        <Link
                          href='/'
                          aria-label='About us'
                          title='About us'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          About us
                        </Link>
                      </li> */}
                        <li>
                          <Link
                            href='/register'
                            className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FF57C]'
                          >
                            Sign up
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <StickyNav courses={courses} />
    </div>
  );
};
