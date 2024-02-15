import Link from "next/link";
import React from "react";

export default function Button({ title, link }) {
  return (
    <div className='flex flex-col justify-center gap-3 mt-10 sm:flex-row'>
      <Link
        href={link}
        className='uppercase items-center inline-flex focus:outline-none justify-center text-white bg-[#5b03e3] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-full text-center w-full'
      >
        {title}
      </Link>
    </div>
  );
}
