"use client";
import Link from "next/link";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Hero() {
  const [login, setLogin] = useState(false);
  // Function to handle login state
  const handleLogin = () => {
    setLogin(!login); // Toggle the login state
  };

  // Function to handle click outside the login form
  const handleClickOutsideLoginForm = (event) => {
    // Check if the click is outside the login form area
    if (login && !event.target.closest(".mx-8")) {
      setLogin(false); // Set login to false
    }
  };

  // Attach or remove the click event listener based on login state
  useEffect(() => {
    if (login) {
      document.addEventListener("click", handleClickOutsideLoginForm);
    } else {
      document.removeEventListener("click", handleClickOutsideLoginForm);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutsideLoginForm);
    };
  }, [login]);

  if (login) {
    return (
      <div className='bg-red-600/30 backdrop-blur-sm absolute top-0 left-0 right-0 z-[230] px-4 flex items-center justify-center h-screen'>
        <div className='mx-8'>
          <LoginForm />
        </div>
      </div>
    );
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center'>
        <div className='mx-auto max-w-xl text-center'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            The Freedom To Keep
            <strong className='font-extrabold text-red-700 sm:block'>
              {" "}
              Your Notes More Safer.{" "}
            </strong>
          </h1>

          <p className='mt-4 sm:text-xl/relaxed'>
            Safeguard your thoughts effortlessly on our platform, ensuring
            privacy and confidentiality. Elevate your note-taking experience
            with confidence!
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            {/* Get Started */}
            <button
              onClick={() => {
                handleLogin();
              }}
              className='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
            >
              Get Started
            </button>

            {/* Learn More */}
            <Link
              className='block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto'
              href='/about'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
