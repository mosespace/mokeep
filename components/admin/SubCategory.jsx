import Link from "next/link";
import React from "react";

export default function SubCategory({ data }) {
  //   console.log(categories);
  return (
    <>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data?.map((item, i) => (
            <Link
              key={i}
              href={`/admin/subCategory/${item.id}`}
              className='h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700'
            >
              <span className='flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto'>
                <svg
                  className='flex-shrink-0 w-7 h-7 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect width='18' height='10' x='3' y='11' rx='2' />
                  <circle cx='12' cy='5' r='2' />
                  <path d='M12 7v4' />
                  <line x1='8' x2='8' y1='16' y2='16' />
                  <line x1='16' x2='16' y1='16' y2='16' />
                </svg>
              </span>

              <span className='mt-3'>
                <h3 className='text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200'>
                  {item.title}
                </h3>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
