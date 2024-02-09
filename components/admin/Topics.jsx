import Link from "next/link";
import React from "react";

export default function Topics({ data }) {
  // console.log(data);
  return (
    <div>
      {/* <!-- Card Section --> */}
      <div className='kmax-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        {/* <!-- Grid --> */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6'>
          {data?.map((item, i) => (
            <Link
              key={i}
              className='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href={`/admin/topic/${item.id}`}
            >
              <div className='p-4 md:p-5'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h3 className='group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'>
                      {item.title}
                    </h3>
                    <p key={i} className='text-sm text-gray-500'>
                      {item.subCategory.title}
                    </p>
                  </div>
                  <div className='ps-3'>
                    <svg
                      className='flex-shrink-0 w-5 h-5'
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
                      <path d='m9 18 6-6-6-6' />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Section --> */}
    </div>
  );
}
