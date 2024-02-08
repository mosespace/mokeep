import Link from "next/link";
import { headers } from "next/headers";
import { getData } from "@/utils/getData";
import { getServerSession } from "next-auth";
import { FaFacebookSquare } from "react-icons/fa";
import { authOptions } from "@/utils/authOptions";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default async function Footer() {
  const session = await getServerSession(authOptions);
  // const currentPath = usePathname();

  const userId = session?.user?.id;

  const _headers = headers();
  const url = new URL(_headers.get("x-url"));
  const pathname = url.pathname;
  // console.log(pathname);
  if (pathname === `/dashboard` || pathname === `/dashboard/${userId} ` || pathname === `/admin` || pathname === `/admin/category` || pathname === `/admin/topic` || pathname === `/admin/notes`) {
    return null;
  }
  // if (currentPath.startsWith("/admin")) {
  //   return null;
  // }
  return (
    <div className='px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-[#0D1224]'>
      <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='sm:col-span-2'>
          <Link href='/' className='inline-flex items-start'>
            <Image
              width={500}
              height={310}
              src='/logo-red.png'
              alt='desishub-coding-school'
              className='w-[4.5rem] h-12 object-coverk'
            />
            {/* <span className='text-xl font-bold tracking-wide  text-[#FF57C3]'>
              Desis<span className='font-light'>Hub</span>
            </span> */}
          </Link>
          <div className='mt-4 lg:max-w-sm'>
            <p className='text-sm text-slate-50'>
              Discover peace of mind with our cutting-edge note safety features.
              Your information is secure with end-to-end encryption, password
              protection, and secure backups.
            </p>
            <p className='mt-4 text-sm text-slate-50'>
              Safeguard your thoughts effortlessly on our platform, ensuring
              privacy and confidentiality. Elevate your note-taking experience
              with confidence!.
            </p>
          </div>
        </div>
        <div className='space-y-2 text-sm'>
          <p className='text-base font-bold tracking-wide text-[#FF57C3]'>
            Contacts
          </p>
          <div className='flex'>
            <p className='mr-1 text-slate-50'>Phone:</p>
            <Link
              href='tel:850-123-5021'
              className='transition-colors duration-300 text-slate-50 hover:text-deep-purple-800'
            >
              +256-770-9811
            </Link>
          </div>
          <div className='flex'>
            <p className='mr-1 text-slate-50'>Email:</p>
            <Link
              href='mailto:kiskayemoses@gmail.com'
              className='transition-colors duration-300 text-slate-50 hover:text-deep-purple-800'
            >
              info@mokeep.com
            </Link>
          </div>
          <div className='flex'>
            <p className='mr-1 text-slate-50'>Address:</p>
            <Link
              href='https://www.google.com/maps'
              target='_blank'
              className='transition-colors duration-300 text-slate-50 hover:text-deep-purple-800'
            >
              312 Fourth Street, Kampala-Ug
            </Link>
          </div>
        </div>
        <div>
          <span className='text-base font-bold tracking-wide text-[#FF57C3]'>
            Social
          </span>
          <div className='flex items-center mt-1 space-x-3'>
            <Link
              href='/x.com'
              className='text-[#FF57C3] transition-colors duration-300 hover:text-[#FF57C3]'
            >
              <BsTwitterX className='h-5' />
            </Link>
            <Link
              href='/instagram'
              className='text-[#FF57C3] transition-colors duration-300 hover:text-[#FF57C3]'
            >
              <BsInstagram className='h-5' />
            </Link>
            <Link
              href='/facebook'
              className='text-[#FF57C3] transition-colors duration-300 hover:text-[#FF57C3]'
            >
              <FaFacebookSquare className='h-5' />
            </Link>
          </div>
          <p className='mt-4 text-sm text-slate-50'>
            Discover how we do Hub your notes safe with these essential tips...
          </p>
        </div>
      </div>
      <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
        <p className='text-sm text-slate-50'>
          © Copyright 2020{" "}
          <span className='text-[#FF57C3] font-bold'>Desis</span>
          <span className='text-[#FF57C3] font-light'>Hub</span>. All rights
          reserved.
        </p>
        <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
          <li>
            <Link
              href='/'
              className='text-sm text-slate-50 transition-colors duration-300 hover:text-[#FF57C3]'
            >
              F.Link.Q
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-sm text-slate-50 transition-colors duration-300 hover:text-[#FF57C3]'
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-sm text-slate-50 transition-colors duration-300 hover:text-[#FF57C3]'
            >
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
