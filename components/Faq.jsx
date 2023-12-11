"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='border rounded shadow-sm'>
      <button
        type='button'
        aria-label='Open item'
        title='Open item'
        className='flex items-center justify-between w-full p-4 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='text-lg font-medium'>{title}</p>
        <div className='flex items-center justify-center w-8 h-8 border rounded-full'>
          <svg
            viewBox='0 0 24 24'
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              points='2,7 12,17 22,7'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className='p-4 pt-0'>
          <p className='text-gray-700'>{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div
      data-aos='zoom-in'
      className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-slate-50'
    >
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='flex flex-col mb-16 sm:text-center'>
          <Link href='/' className='mb-6 sm:mx-auto'>
            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-slate-50'>
              <svg
                className='w-10 h-10 text-red-600'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
          </Link>
          <div className='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              Frequently asked Questions by{" "}
              <span className='font-bold tracking-wide  text-red-600'>
                Mo<span className='font-light'>Keep</span>
              </span>{" "}
              Users
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Get started with MoKeep · Create and edit notes & lists · Organize
              notes & lists · Search and share notes & lists with your loved
              ones
            </p>
          </div>
        </div>
        <div className='space-y-4'>
          <Item title='What is MoKeep?'>
            MoKeep is a web based note-taking service. Some consider it to be an
            alternative to Ever note - MoKeep focuses around quick note-taking –
            and the various accoutrements you expect from a web based system.
            This include photos, checklists, annotations and voice notes. MoKeep
            was announced on 01 December 2023 by{" "}
            <span className='font-bold text-red-600'>Kisakye Moses</span>.
          </Item>
          <Item title='What can I do with MoKeep Keep?'>
            You can type notes, create lists, add tick boxes to lists, add
            photos and even create notes using voice recordings. If you are
            using the Android app, you can take photos and edit them before
            adding them to a note.
          </Item>
          <Item title='How do I access my MoKeep notes?'>
            If you are using MoKeep Keep on your Android device, just open the
            web app. To access MoKeep on your computer, open the MoKeep web app
            that you added to Chrome, or go to https://mokeep.com Your notes are
            automatically saved and synced across all devices. MoKeep Keep saves
            all your notes to the MoKeep cloud, so everything is backed up and
            available, should anything happen to the original device or computer
            on which the notes were made.
          </Item>
          <Item title='On which platforms is MoKee Keep available?'>
            MoKeep thankfully runs on a variety of computer equipment - it is a
            PC- or Mac- based browser web application and is available on the
            Android mobile platform. You will need Android version 4.0.3 (Ice
            Cream Sandwich) or above. It works best in MoKeep Chrome Browser.
            There is not currently an iOS or Windows Phone app available, but
            hopefully there will be apps available in the near future.
          </Item>
        </div>
      </div>
    </div>
  );
};
