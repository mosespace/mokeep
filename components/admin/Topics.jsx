import React from "react";
import Link from "next/link";

export default function Topics({ data }) {
  // console.log(data);
  return (
    <div>
      <div className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6'>
          {data?.map((item, i) => (
            <div className='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none'>
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

                  <div className=' flex gap-2 flex-col'>
                    <Link
                      href={`/admin/topic/${item.id}`}
                      className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg bg-green-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                    >
                      Edit
                    </Link>
                    <button
                      className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                      type='button'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
