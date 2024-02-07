import React from "react";

export default function Dash() {
  return (
    <>
      <body className='bg-gray-50 dark:bg-slate-900'>
        {/* <div className='sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex items-center py-4'>
            <button
              type='button'
              className='text-gray-500 hover:text-gray-600'
              data-hs-overlay='#application-sidebar-dark'
              aria-controls='application-sidebar-dark'
              aria-label='Toggle navigation'
            >
              <span className='sr-only'>Toggle Navigation</span>
              <svg
                className='w-5 h-5'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </button>

            <ol
              className='ms-3 flex items-center whitespace-nowrap'
              aria-label='Breadcrumb'
            >
              <li className='flex items-center text-sm text-gray-800 dark:text-gray-400'>
                Application Layout
                <svg
                  className='flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </li>
              <li
                className='text-sm font-semibold text-gray-800 truncate dark:text-gray-400'
                aria-current='page'
              >
                Dashboard
              </li>
            </ol>
          </div>
        </div> */}

        <div className='w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72'>
          <header>
            <p className='mb-2 text-sm font-semibold text-blue-600'>
              Starter Pages & Examples
            </p>
            <h1 className='block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white'>
              Application Layout: Sidebar Dark using Tailwind CSS
            </h1>
            <p className='mt-2 text-lg text-gray-800 dark:text-gray-400'>
              This is a simple application layout with sidebar and header
              examples using Tailwind CSS.
            </p>
            <div className='mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3'>
              <a
                className='w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                href='https://github.com/htmlstreamofficial/preline/tree/main/examples/html'
                target='_blank'
              >
                <svg
                  className='flex-shrink-0 w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                </svg>
                Get the source code
              </a>
              <a
                className='w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                href='../examples.html'
              >
                <svg
                  className='flex-shrink-0 w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='m15 18-6-6 6-6' />
                </svg>
                Back to examples
              </a>
            </div>
          </header>
        </div>
      </body>
    </>
  );
}
