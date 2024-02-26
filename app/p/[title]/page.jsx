import {
  BarChartBig,
  CaptionsOff,
  Clock1,
  Code,
  DownloadCloud,
  Medal,
  MonitorPlay,
  PlayCircle,
  RefreshCw,
  Star,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaVideo } from "react-icons/fa";

export default function page({ params: { title } }) {
  const accordionData = [
    {
      id: "item-1",
      title: "Getting Started (16min)",
      content: [
        { text: "Welcome", icon: <FaVideo />, previewStatus: true },
        { text: "What is JavaScript", icon: <FaVideo />, previewStatus: true },
        {
          text: "Setting Up the Development Environment",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "JavaScript in Browsers",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "Separation of Concerns",
          icon: <FaVideo />,
          previewStatus: true,
        },
        { text: "JavaScript in Node", icon: <FaVideo />, previewStatus: true },
        { text: "Source Code", icon: <FaVideo />, previewStatus: false },
        { text: "Follow Me Around", icon: <FaVideo />, previewStatus: false },
        { text: "Learning Paths", icon: <FaVideo />, previewStatus: false },
      ],
    },
    {
      id: "item-2",
      title: "Basics (31min)",
      content: [
        { text: "Welcome", icon: <FaVideo />, previewStatus: true },
        { text: "What is JavaScript", icon: <FaVideo />, previewStatus: true },
        {
          text: "Setting Up the Development Environment",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "JavaScript in Browsers",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "Separation of Concerns",
          icon: <FaVideo />,
          previewStatus: true,
        },
        { text: "JavaScript in Node", icon: <FaVideo />, previewStatus: true },
        { text: "Source Code", icon: <FaVideo />, previewStatus: false },
        { text: "Follow Me Around", icon: <FaVideo />, previewStatus: false },
        { text: "Learning Paths", icon: <FaVideo />, previewStatus: false },
      ],
    },
    {
      id: "item-3",
      title: "Operators (37min)",
      content: [
        { text: "Welcome", icon: <FaVideo />, previewStatus: true },
        { text: "What is JavaScript", icon: <FaVideo />, previewStatus: true },
        {
          text: "Setting Up the Development Environment",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "JavaScript in Browsers",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "Separation of Concerns",
          icon: <FaVideo />,
          previewStatus: true,
        },
        { text: "JavaScript in Node", icon: <FaVideo />, previewStatus: true },
        { text: "Source Code", icon: <FaVideo />, previewStatus: false },
        { text: "Follow Me Around", icon: <FaVideo />, previewStatus: false },
        { text: "Learning Paths", icon: <FaVideo />, previewStatus: false },
      ],
    },
    {
      id: "item-4",
      title: "Control Flow (1hr)",
      content: [
        { text: "Welcome", icon: <FaVideo />, previewStatus: true },
        { text: "What is JavaScript", icon: <FaVideo />, previewStatus: true },
        {
          text: "Setting Up the Development Environment",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "JavaScript in Browsers",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "Separation of Concerns",
          icon: <FaVideo />,
          previewStatus: true,
        },
        { text: "JavaScript in Node", icon: <FaVideo />, previewStatus: true },
        { text: "Source Code", icon: <FaVideo />, previewStatus: false },
        { text: "Follow Me Around", icon: <FaVideo />, previewStatus: false },
        { text: "Learning Paths", icon: <FaVideo />, previewStatus: false },
      ],
    },
    {
      id: "item-5",
      title: "Objects (1hr)",
      content: [
        { text: "Welcome", icon: <FaVideo />, previewStatus: true },
        { text: "What is JavaScript", icon: <FaVideo />, previewStatus: true },
        {
          text: "Setting Up the Development Environment",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "JavaScript in Browsers",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "Separation of Concerns",
          icon: <FaVideo />,
          previewStatus: true,
        },
        { text: "JavaScript in Node", icon: <FaVideo />, previewStatus: true },
        { text: "Source Code", icon: <FaVideo />, previewStatus: false },
        { text: "Follow Me Around", icon: <FaVideo />, previewStatus: false },
        { text: "Learning Paths", icon: <FaVideo />, previewStatus: false },
      ],
    },
    {
      id: "item-6",
      title: "Arrays (1hr)",
      content: [
        { text: "Welcome", icon: <FaVideo />, previewStatus: true },
        { text: "What is JavaScript", icon: <FaVideo />, previewStatus: true },
        {
          text: "Setting Up the Development Environment",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "JavaScript in Browsers",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "Separation of Concerns",
          icon: <FaVideo />,
          previewStatus: true,
        },
        { text: "JavaScript in Node", icon: <FaVideo />, previewStatus: true },
        { text: "Source Code", icon: <FaVideo />, previewStatus: false },
        { text: "Follow Me Around", icon: <FaVideo />, previewStatus: false },
        { text: "Learning Paths", icon: <FaVideo />, previewStatus: false },
      ],
    },
    {
      id: "item-7",
      title: "Functions (1hr)",
      content: [
        { text: "Welcome", icon: <FaVideo />, previewStatus: true },
        { text: "What is JavaScript", icon: <FaVideo />, previewStatus: true },
        {
          text: "Setting Up the Development Environment",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "JavaScript in Browsers",
          icon: <FaVideo />,
          previewStatus: true,
        },
        {
          text: "Separation of Concerns",
          icon: <FaVideo />,
          previewStatus: true,
        },
        { text: "JavaScript in Node", icon: <FaVideo />, previewStatus: true },
        { text: "Source Code", icon: <FaVideo />, previewStatus: false },
        { text: "Follow Me Around", icon: <FaVideo />, previewStatus: false },
        { text: "Learning Paths", icon: <FaVideo />, previewStatus: false },
      ],
    },
  ];

  return (
    <div
      className={`px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 `}
    >
      <div className='flex flex-col lg:flex-row items-start justify-between gap-2 relative'>
        <div className='text-white max-w-xl text-center md:text-left pt-5 lg:pt-24'>
          <h1 className='mt-0 text-4xl font-bold'>
            The Ultimate Full-stack JavaScript Developer Bundle (2024)
          </h1>
          <p className='text-xl md:text-2xl leading-7 md:leading-9 my-5'>
            Master all the JavaScript skills you need to land Link full-stack
            developer job
          </p>
          <div className='my-8'>
            <div className='flex items-center justify-center md:justify-start'>
              <span className='font-bold' data-testid='trust-score'>
                4.7
              </span>
              <div className='bg-green-500 p-1 mx-1'>
                <Star className='w-3 h-3 text-white fill-white' />
              </div>
              <div className='bg-green-500 p-1 mx-1'>
                <Star className='w-3 h-3 text-white fill-white' />
              </div>
              <div className='bg-green-500 p-1 mx-1'>
                <Star className='w-3 h-3 text-white fill-white' />
              </div>
              <div className='bg-green-500 p-1 mx-1'>
                <Star className='w-3 h-3 text-white fill-white' />
              </div>
              <span className='text-sm' data-testid='trust-reviews'>
                3425 reviews
              </span>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <p className='text-base mb-0'>
              Subscribe to access all courses. Cancel anytime!
            </p>
            <Link
              className='group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600  transition-all duration-200 ease-out hover:text-white hover:no-underline mt-3 w-full md:w-auto'
              role='button'
              href='https://sso.teachable.com/secure/146684/checkout/2954151/all-access'
            >
              Subscribe for $29/m
            </Link>
          </div>
          <div className='mt-4 flex items-center justify-center md:justify-start'>
            <hr className='inline-block w-6 mr-2' />
            or
            <hr className='inline-block w-6 ml-2' />
          </div>
          <div>
            <Link
              className='group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline mt-3 w-full md:w-auto'
              role='button'
              href='https://sso.teachable.com/secure/146684/checkout/5243253/the-ultimate-full-stack-javascript-developer-bundle-2024-edition?coupon_code=PPP62XA'
            >
              Buy this Course for $69
              <span className='line-through ml-1 text-xs'>$499</span>
            </Link>
          </div>
        </div>
        <div className='pt-5 lg:pt-24'>
          <div className='shadow-2xl shadow-gray-50 dark:shadow-none border border-violet-50 dark:border-blue-850 bg-white dark:bg-blue-750 rounded-md relative'>
            <div className='flex justify-center -translate-y-[1px]'>
              <div className='w-3/4'>
                <div className='flex flex-row'>
                  <div className='h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full'></div>
                  <div className='h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full'></div>
                </div>
              </div>
            </div>
            <div className='p-6 md:p-10 lg:p-12 whitespace-nowrap'>
              <h2 className='font-semibold text-lg uppercase tracking-wide mb-0'>
                Course Overview
              </h2>
              <div className='h-[5px] bg-gradient-to-r from-pink-500 to-violet-600 w-16 mt-4 mb-10'></div>
              <ul className='space-y-4 font-semibold text-blue-550 dark:text-blue-300'>
                <li>
                  <BarChartBig className='mr-4 inline text-violet-500 dark:text-blue-350' />
                  Beginner to Pro
                </li>
                <li>
                  <PlayCircle className='mr-4 inline text-violet-500 dark:text-blue-350' />
                  50 hours of HD video
                </li>
                <li>
                  <DownloadCloud className='mr-4 inline text-violet-500 dark:text-blue-350' />
                  Downloadable content
                </li>
                <li>
                  <Code className='mr-4 inline text-violet-500 dark:text-blue-350' />
                  Hands-on exercises
                </li>
                <li>
                  <CaptionsOff className='mr-4 inline text-violet-500 dark:text-blue-350' />
                  English captions
                </li>
                <li>
                  <Medal className='mr-4 inline text-violet-500 dark:text-blue-350' />
                  Certificate of completion
                </li>
                <li>
                  <RefreshCw className='mr-4 inline text-violet-500 dark:text-blue-350' />
                  Lifetime access
                </li>
                <li>
                  <Clock1 className='mr-4 inline text-violet-500 dark:text-blue-350' />
                  Learn at your own pace
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className='flex flex-col py-10 text-white'>
        <header className='my-12 mb-6 text-center'>
          <h2 className='text-3xl font-bold'>Clear. Concise. Comprehensive.</h2>
        </header>
        <div className='flex flex-col items-center'>
          <p className='mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8'>
            Tired of piecing together disconnected tutorials or dealing with
            rambling, confusing instructors? This course is for you! It's
            perfectly structured into a series of bite-sized, easy-to-follow
            videos that cover both theory and practice.
          </p>
        </div>
      </section>
      <div className='grid grid-cols-1 gap-8 pb-10 text-white'>
        <div className='md:mx-4'>
          <div className='grid place-items-center w-12 h-12 rounded-full my-3 bg-[#181737] dark:bg-blue-800'>
            <div className='text-violet-500 dark:text-violet-60'>
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='2'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                height='25'
                width='25'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M4 11a1 1 0 0 1 .117 1.993l-.117.007h-1a1 1 0 0 1-.117-1.993l.117-.007h1z' />
                <path d='M12 2a1 1 0 0 1 .993.883l.007.117v1a1 1 0 0 1-1.993.117l-.007-.117v-1a1 1 0 0 1 1-1z' />
                <path d='M21 11a1 1 0 0 1 .117 1.993l-.117.007h-1a1 1 0 0 1-.117-1.993l.117-.007h1z' />
                <path d='M4.893 4.893a1 1 0 0 1 1.32-.083l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7a1 1 0 0 1 0-1.414z' />
                <path d='M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7z' />
                <path d='M14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993l.117-.007h4z' />
                <path d='M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192l-.129.008h-6a1 1 0 0 1-.6-.2a6 6 0 0 1 3.6-10.8z' />
              </svg>
            </div>
          </div>
          <span className='text-violet-500 dark:text-violet-60 mb-3 inline-block font-medium md:font-semibold'>
            Highly practical
          </span>
          <h2 className='text-4xl font-bold py-4'>What You'll Learn</h2>
          <ul className='mb-8 space-y-4 text-left'>
            <li className='flex flex-row items-start space-x-3'>
              <div>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 16 16'
                  className='w-5 h-5 inline flex-shrink-0'
                  color='#4ccfaf'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ color: "rgb(76, 207, 175)" }}
                >
                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'></path>
                </svg>
              </div>
              <span>
                Master fundamental JavaScript including variables, loops,
                functions, and object-oriented programming.
              </span>
            </li>
            <li className='flex flex-row items-start space-x-3'>
              <div>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 16 16'
                  className='w-5 h-5 inline flex-shrink-0'
                  color='#4ccfaf'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ color: "rgb(76, 207, 175)" }}
                >
                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'></path>
                </svg>
              </div>
              <span>
                Delve into asynchronous operations, promises, async/await, and
                ES6+ enhancements for sophisticated coding.
              </span>
            </li>
            <li className='flex flex-row items-start space-x-3'>
              <div>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 16 16'
                  className='w-5 h-5 inline flex-shrink-0'
                  color='#4ccfaf'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ color: "rgb(76, 207, 175)" }}
                >
                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'></path>
                </svg>
              </div>
              <span>
                Learn TypeScript for robust, maintainable code with static
                typing and advanced type checking.
              </span>
            </li>
            <li className='flex flex-row items-start space-x-3'>
              <div>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 16 16'
                  className='w-5 h-5 inline flex-shrink-0'
                  color='#4ccfaf'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ color: "rgb(76, 207, 175)" }}
                >
                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'></path>
                </svg>
              </div>
              <span>Master building front-ends with React 18+.</span>
            </li>
            <li className='flex flex-row items-start space-x-3'>
              <div>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 16 16'
                  className='w-5 h-5 inline flex-shrink-0'
                  color='#4ccfaf'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ color: "rgb(76, 207, 175)" }}
                >
                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'></path>
                </svg>
              </div>
              <span>
                Deepen your React knowledge with complex state management and
                routing.
              </span>
            </li>
            <li className='flex flex-row items-start space-x-3'>
              <div>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 16 16'
                  className='w-5 h-5 inline flex-shrink-0'
                  color='#4ccfaf'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ color: "rgb(76, 207, 175)" }}
                >
                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'></path>
                </svg>
              </div>
              <span>
                Build server-side applications using Node.js, integrating with
                databases for comprehensive web solutions.
              </span>
            </li>
            <li className='flex flex-row items-start space-x-3'>
              <div>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 16 16'
                  className='w-5 h-5 inline flex-shrink-0'
                  color='#4ccfaf'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ color: "rgb(76, 207, 175)" }}
                >
                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'></path>
                </svg>
              </div>
              <span>
                Master essential Git commands and workflows for effective
                version control and team collaboration.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className='py-8'>
        <div className='flex flex-col pb-4 text-white'>
          <div className='text-green-700 dark:text-green-300'>
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              height='25'
              width='25'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M3.5 5.5l1.5 1.5l2.5 -2.5'></path>
              <path d='M3.5 11.5l1.5 1.5l2.5 -2.5'></path>
              <path d='M3.5 17.5l1.5 1.5l2.5 -2.5'></path>
              <path d='M11 6l9 0'></path>
              <path d='M11 12l9 0'></path>
              <path d='M11 18l9 0'></path>
            </svg>
          </div>
          <span className='text-green-700 dark:text-green-300 mb-3 inline-block font-medium md:font-semibold'>
            A perfectly structured course
          </span>
          <h2 className='text-3xl font-bold text-white'>Course Content</h2>
          <p>6Hours . 7 Sections . 100 Lessons</p>
        </div>
        <Accordion
          type='single'
          collapsible
          className='text-white max-w-3xl'
          defaultValue='item-1'
        >
          {accordionData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className='!no-underline font-bold text-lg !border-none'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                {item.content.map((contentItem, index) => (
                  <li className='flex items-center mb-3 text-base'>
                    <span className='flex-shrink-0 justify-start w-4 h-4 mr-3 text-gray-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path d='M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z'></path>
                      </svg>
                    </span>
                    <span className='flex-grow'>{contentItem.text}</span>
                    {contentItem.previewStatus && (
                      <Link
                        className='group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline'
                        href='https://codewithmosh.teachable.com/courses/javascript-basics-for-beginners/lectures/5088148'
                      >
                        Preview
                      </Link>
                    )}
                  </li>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className='py-8'>
        <div className='grid place-items-center w-12 h-12 rounded-full my-3 bg-orange-100 dark:bg-blue-800 py-6'>
          <div className='text-orange-400'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 16 16'
              height='25'
              width='25'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z'></path>
            </svg>
          </div>
        </div>
        <span className='text-orange-400 mb-3 inline-block font-medium md:font-semibold'>
          Link complete beginner-friendly course
        </span>
        <h2 className='text-3xl font-bold text-white '>
          No Prior Knowledge Needed
        </h2>
        <div className='max-w-prose pt-4 text-white'>
          <p>
            This JavaScript bundle is designed to be accessible to students of
            all skill levels. Whether you're a complete beginner or an
            experienced programmer looking to learn JavaScript, this bundle has
            everything you need to get started. No prior programming experience
            is necessary. We'll start from the very beginning and cover all the
            fundamentals of programming and JavaScript, so you can build a solid
            foundation and progress at your own pace. If you're already familiar
            with programming concepts, you'll be able to progress through the
            earlier sections of the course more quickly.
          </p>
        </div>
      </div>
    </div>
  );
}
