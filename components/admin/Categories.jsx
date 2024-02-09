import React from "react";
import Link from "next/link";

export default function Categories({ data }) {
  //   console.log(data);
  return (
    <>
      <div className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data?.map((item, i) => (
            <div
              key={i}
              className='relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl'
            >
              <div className='p-6'>
                <h5 className='block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
                  {item.title}
                </h5>
                <p className='text-sm'>
                  Belongs to:
                  <span className='font-bold line-clamp-1'>
                    {item.description}
                  </span>
                </p>
              </div>
              <div className=' flex justify-between p-6 pt-0'>
                <Link
                  href={`/admin/category/${item.id}`}
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
          ))}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Icon Blocks --> */}
    </>
  );
}
