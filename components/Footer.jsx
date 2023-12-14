import Link from "next/link";
import { headers } from "next/headers";
import { getData } from "@/utils/getData";
import { getServerSession } from "next-auth";
import { FaFacebookSquare } from "react-icons/fa";
import { authOptions } from "@/utils/authOptions";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

export default async function Footer() {
  const session = await getServerSession(authOptions);

  const userId = session?.user?.id;

  const _headers = headers();
  const url = new URL(_headers.get("x-url"));
  const pathname = url.pathname;
  // console.log(pathname);
  if (pathname === `/dashboard` || pathname === `/dashboard/${userId} `) {
    return null;
  }

  return (
    <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='sm:col-span-2'>
          <Link
            href='/'
            aria-label='Company'
            title='Company'
            className='inline-flex items-start'
          >
            {/* <Image
              width={96}
              height={96}
              src='/vercel.svg'
              alt=''
              className='w-8 text-teal-accent-400'
            /> */}
            <span className='text-xl font-bold tracking-wide  text-red-600'>
              Mo<span className='font-light'>Keep</span>
            </span>
          </Link>
          <div className='mt-6 lg:max-w-sm'>
            <p className='text-sm text-gray-800'>
              Discover peace of mind with our cutting-edge note safety features.
              Your information is secure with end-to-end encryption, password
              protection, and secure backups.
            </p>
            <p className='mt-4 text-sm text-gray-800'>
              Safeguard your thoughts effortlessly on our platform, ensuring
              privacy and confidentiality. Elevate your note-taking experience
              with confidence!.
            </p>
          </div>
        </div>
        <div className='space-y-2 text-sm'>
          <p className='text-base font-bold tracking-wide text-gray-900'>
            Contacts
          </p>
          <div className='flex'>
            <p className='mr-1 text-gray-800'>Phone:</p>
            <Link
              href='tel:850-123-5021'
              aria-label='Our phone'
              title='Our phone'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              +256-770-9811
            </Link>
          </div>
          <div className='flex'>
            <p className='mr-1 text-gray-800'>Email:</p>
            <Link
              href='mailto:kiskayemoses@gmail.com'
              aria-label='Our email'
              title='Our email'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              info@mokeep.com
            </Link>
          </div>
          <div className='flex'>
            <p className='mr-1 text-gray-800'>Address:</p>
            <Link
              href='https://www.google.com/maps'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Our address'
              title='Our address'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              312 Fourth Street, Kampala-Ug
            </Link>
          </div>
        </div>
        <div>
          <span className='text-base font-bold tracking-wide text-gray-900'>
            Social
          </span>
          <div className='flex items-center mt-1 space-x-3'>
            <Link
              href='/x.com'
              className='text-red-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              <BsTwitterX className='h-5' />
            </Link>
            <Link
              href='/instagram'
              className='text-red-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              <BsInstagram className='h-5' />
            </Link>
            <Link
              href='/facebook'
              className='text-red-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              <FaFacebookSquare className='h-5' />
            </Link>
          </div>
          <p className='mt-4 text-sm text-gray-500'>
            Discover how we do keep your notes safe with these essential tips...
          </p>
        </div>
      </div>
      <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
        <p className='text-sm text-gray-600'>
          © Copyright 2020 <span className='text-red-600 font-bold'>Mo</span>
          <span className='text-red-600 font-light'>Keep</span>. All rights
          reserved.
        </p>
        <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
          <li>
            <Link
              href='/'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              F.Link.Q
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
