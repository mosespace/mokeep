"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SideBar({ subCategories }) {
  const params = useSearchParams();
  const id = params.get("id");

  const subCategory = subCategories.filter((item) => item.categoryId === id);
  // console.log(subCategory);
  return (
    <div className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-[#0D1224] border-e border-gray-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500'>
      <div className='px-6'>
        {subCategory.map((item, i) => (
          <>
            <span
              // href={`/start/${item.id}`}
              className='flex-col text-lg font-semibold text-[#FF57C3] focus:outline-none focus:ring-1 focus:ring-gray-600'
            >
              {item.title}
            </span>
            <div className='mt-2 mb-4'>
              {item.topics.map((topic, i) => (
                <nav className='py-2 w-full flex flex-col flex-wrap'>
                  <ul className='w-full' key={i}>
                    <li>
                      <Link
                        className='py-2 px-2.5k w-full text-sm text-white rounded-lg'
                        href={`/start/topic/${topic.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${topic.id}?id=${id}`}
                      >
                        {topic.title}
                      </Link>
                    </li>
                  </ul>
                </nav>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
