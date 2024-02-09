"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function StickyNav() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const courses = [
    {
      title: "HTML-5",
      link: "/html-5",
    },
    {
      title: "CSS",
      link: "/css",
    },
    {
      title: "BootStrap",
      link: "/bootstrap",
    },
    {
      title: "JavaScript",
      link: "/javascript",
    },
    {
      title: "MY-SQL",
      link: "/my-sql",
    },
    {
      title: "PHP",
      link: "/php",
    },
    {
      title: "Python",
      link: "/python",
    },
    {
      title: "React",
      link: "/react",
    },
    {
      title: "Tailwind",
      link: "/tailwind",
    },
    {
      title: "Angular",
      link: "/angular",
    },
    {
      title: "TypeScript",
      link: "/typescript",
    },
    {
      title: "C",
      link: "/c-programming",
    },
    {
      title: "C++",
      link: "/c++-programming",
    },
    {
      title: "Git",
      link: "/git",
    },
    {
      title: "GitHub",
      link: "/git-hub",
    },

    //    HTML CSS JAVASCRIPT SQL PYTHON JAVA PHP HOW TO W3.CSS C C++ C# BOOTSTRAP REACT MYSQL JQUERY EXCEL XML DJANGO NUMPY PANDAS NODEJS R TYPESCRIPT ANGULAR GIT POSTGRESQL MONGODB ASP AI GO KOTLIN SASS VUE DSA GEN AI SCIPY AWS CYBERSECURITY DATA SCIENCE      ❯
    //    Learn to Code
  ];

  const pathname = usePathname();

  // Check if the current route is "/"
  const isHomePage = pathname === "/";

  return (
    <main id='content' role='main'>
      <nav
        className={`${
          isSticky
            ? "fixed top-0 left-0 md:left-64 right-0 z-50 mx-auto bg-[#0D1224] text-sm font-medium text-white ring-1 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px"
            : "sticky -top-px bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px"
        } ${isHomePage ? "!left-0" : ""}`}
        aria-label='Jump links'
      >
        <div className='max-w-7xl snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900'>
          {courses.map((course, i) => (
            <div
              key={i}
              className='snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0'
            >
              <Link
                className='inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                href={`start/${course.title.toLowerCase()}`}
              >
                {course.title}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </main>
  );
}
