"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      title: "Complete React Testing Course",
      description:
        " Everything you need to test your React apps with React Testing Library",
      image:
        "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2FkKp6dGccTTa0XNu73THP&w=384&q=75",
      price: 289,
      status: true,
      statusMessage: "Coming Soon",
      estimatedTime: 6,
      discount: false,
      discountedPrice: null,
    },
    {
      title: "Complete React Testing Course",
      description:
        " Everything you need to test your React apps with React Testing Library",
      image:
        "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FDk8I3q9CSNa8KkINL0yA&w=384&q=75",
      price: 1000,
      status: false,
      statusMessage: null,
      estimatedTime: 5,
      discount: true,
      discountedPrice: 500,
    },
    {
      title: "Complete React Testing Course",
      description:
        " Everything you need to test your React apps with React Testing Library",
      image:
        "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2FIQltVyELTvGe3MyMTDbd&w=384&q=75",
      price: 1000,
      status: false,
      statusMessage: null,
      estimatedTime: 5,
      discount: false,
      discountedPrice: null,
    },
    {
      title: "Complete React Testing Course",
      description:
        " Everything you need to test your React apps with React Testing Library",
      image:
        "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2FbLy3JtIoQ8y8PDs4tFem&w=384&q=75",
      price: 289,
      status: false,
      statusMessage: null,
      estimatedTime: 8,
      discount: false,
      discountedPrice: null,
    },
    {
      title: "Complete React Testing Course",
      description:
        " Everything you need to test your React apps with React Testing Library",
      image:
        "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FKHTdHnlEQsy8RfIAl4Mm&w=384&q=75",
      price: 289,
      status: false,
      statusMessage: null,
      estimatedTime: 6,
      discount: true,
      discountedPrice: 66,
    },
    {
      title: "The Ultimate Git Course",
      description:
        " Everything you need to know to use Git & GitHub to work effectively as a team",
      image:
        "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FtsmP4fdkSmKaiez6t2jl&w=384&q=75",
      price: 289,
      status: false,
      statusMessage: null,
      estimatedTime: 6,
      discount: false,
      discountedPrice: null,
    },
    {
      title: "The Ultimate React Native Series",
      description:
        "Everything you need to build and distribute professional-quality apps with React Native",
      image:
        "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2F4C6yPDywSUeWYLyg1h9G&w=384&q=75",
      price: 289,
      status: false,
      statusMessage: null,
      estimatedTime: 6,
      discount: true,
      discountedPrice: 99,
    },
  ];

  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter courses based on the search query
    const filtered = courses.filter((course) =>
      course.title
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    );
    setFilteredCourses(filtered);
  };
  return (
    <div className='container py-[2rem]'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-wrap mb-5 md:flex-nowrap'>
          <div className='mb-5 w-full md:mr-5 max-w-7xl px-8'>
            <form className='mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300'>
              <input
                type='text'
                placeholder='Search anything'
                className='bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0'
                name='topic'
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button className='flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3'>
                Search
              </button>
            </form>
          </div>
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          <div className='border border-blue-600 hover:dark:border-blue-500 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg dark:bg-blue-700 relative max-w-[350px]'>
            <div className='h-[196px] relative'>
              <Link
                className='relative w-full h-full inline-block'
                // href='/p/complete-react-testing-course'
                href={`/p/complete-react-testing-course`}
              >
                {/* Image */}
                <img
                  alt='Complete React Testing Course'
                  loading='lazy'
                  decoding='async'
                  data-nimg='fill'
                  className='object-cover'
                  sizes='350px'
                  src='https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FA90ijraxStiEoemCcNUn&w=384&q=75'
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
              </Link>
            </div>
            <div className='p-6 bg-[#12172A]/25 backdrop-blur-md'>
              <div className='flex justify-between items-start'>
                <h3 className='mb-2 leading-4'>
                  <Link
                    className='text-white dark:hover:text-violet-60 no-underline transition-colors duration-200 ease-in-out font-semibold text-lg hover:no-underline'
                    href='/p/complete-react-testing-course'
                  >
                    {/* Your course title */}
                    All-Access Subscription
                  </Link>
                </h3>
                <div className='ml-1'>
                  {/* Course duration */}
                  <div className='bg-pink-100 dark:bg-blue-600 font-medium md:font-bold inline px-3 py-1 rounded-2xl text-sm text-pink-500 dark:text-pink-530'>
                    340h
                  </div>
                </div>
              </div>
              <p className='text-base text-white mb-3 selection:bg-pink-500'>
                {/* Course description */}
                Become the best coder you can be with unlimited access to all
                the existing and future courses
              </p>
              <p className='font-bold text-white mb-0' data-testid='price'>
                $29/m
              </p>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <>
              {filteredCourses.slice(0, 5).map((course, i) => {
                return (
                  <div
                    key={i}
                    className='border border-blue-600 hover:dark:border-blue-500 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg dark:bg-blue-700 relative max-w-[350px]'
                  >
                    <div className='h-[196px] relative'>
                      <Link
                        className='relative w-full h-full inline-block'
                        href={`/p/${course.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}}`}
                      >
                        {/* Image */}
                        <img
                          alt='Complete React Testing Course'
                          loading='lazy'
                          decoding='async'
                          data-nimg='fill'
                          className='object-cover'
                          sizes='350px'
                          src={course.image}
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                          }}
                        />
                      </Link>
                    </div>
                    <div className='p-6 bg-[#12172A]/25 backdrop-blur-md'>
                      <div className='flex justify-between items-start'>
                        <h3 className='mb-2 leading-4'>
                          <Link
                            className='text-white dark:hover:text-violet-60 no-underline transition-colors duration-200 ease-in-out font-semibold text-lg hover:no-underline'
                            href={`/p/${course.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}}`}
                          >
                            {/* Your course title */}
                            {course.title}
                          </Link>
                        </h3>
                        <div className='ml-1'>
                          {/* Course duration */}
                          <div className='bg-pink-100 dark:bg-blue-600 font-medium md:font-bold inline px-3 py-1 rounded-2xl text-sm text-pink-500 dark:text-pink-530'>
                            {course.estimatedTime}h
                          </div>
                        </div>
                      </div>
                      <p className='text-base text-white mb-3 selection:bg-pink-500'>
                        {/* Course description */}
                        {course.description}
                      </p>
                      {course.status === true ? (
                        <div className='bg-pink-100 dark:bg-blue-600 font-medium md:font-bold inline px-3 py-1 rounded-2xl text-sm text-pink-500 dark:text-pink-530'>
                          {/* Course status */}
                          {course.statusMessage}
                        </div>
                      ) : (
                        <p
                          className='font-bold text-white mb-0'
                          data-testid='price'
                        >
                          ${course.price}
                          {course.discount && (
                            <span className='ml-2 line-through font-normal text-gray-350 text-sm'>
                              ${course.discountedPrice}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div
              role='alert'
              className='rounded border-s-4 border-red-500 bg-red-50 p-4'
            >
              <div className='flex items-center gap-2 text-red-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fill-rule='evenodd'
                    d='M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z'
                    clip-rule='evenodd'
                  />
                </svg>

                <strong className='block font-medium'>
                  {" "}
                  You searched what we don't have yet!
                </strong>
              </div>

              <p className='mt-2 text-sm text-red-700'>
                We recommend you to purchase the all directions
              </p>
            </div>
          )}
        </div>
        <Button title='View all courses' link='/courses' />
        <p class='my-6 text-base text-white'>
          Not sure where to start? Check out our{" "}
          <Link class='font-semibold font-pink-600' href='/p/learning-paths'>
            learning paths
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
