"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { BsPersonFillAdd } from "react-icons/bs";
import LoginForm from "./LoginForm";

export default function RegisterForm({ field_names }) {
  //   console.log(field_names);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  //   console.log(emailError)

  async function onSubmit(data) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/user`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(data);

      const responseData = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("Your profile has been created successfully");
        reset();
        router.push("/login");
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailError("User with this email already exists");
          toast.error("User with this email already exists");
        } else {
          console.log("Sever Error:", responseData.message);
          toast.error("Ops, something went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.log("Network Error:", error);
      toast.error("It seems you have Link network error, please try again");
    }
  }

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
    <div className='font-[sans-serif]k text-[#333] px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='py-16 min-h-screen flex items-center'>
        <div className='grid md:grid-cols-2 items-center lg:items-start gap-10 max-w-6xl w-full'>
          <div className='max-md:text-center'>
            <h2 className='lg:text-5xl text-4xl font-extrabold lg:leading-[55px]'>
              Create account with credentials...
            </h2>

            <p className='text-sm mt-6'>
              Immerse yourself in Link hassle-free login journey with my
              intuitively designed and functioning login form. Effortlessly
              access your account.
            </p>

            <p className='text-sm mt-10'>
              You have an account,{" "}
              <button
                // href='/login'
                onClick={() => {
                  handleLogin();
                }}
                className='text-red-600 font-semibold hover:underline ml-1'
              >
                Log-in here
              </button>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full'
          >
            <h3 className='text-3xl font-extrabold mb-8 max-md:text-center leading-8'>
              Create Account
            </h3>

            <div>
              <input
                {...register("firstName", { required: true })}
                name='firstName'
                type='text'
                className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-red-600'
                placeholder='First Name'
              />
              {errors.firstName && (
                <small className='text-red-600 text-sm'>
                  You must provide First Name
                </small>
              )}
            </div>
            <div>
              <input
                {...register("secondName", { required: true })}
                name='secondName'
                type='text'
                className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-red-600'
                placeholder='Second Name'
              />
              {errors.secondName && (
                <small className='text-red-600 text-sm'>
                  You must provide Second Name
                </small>
              )}
            </div>

            <div>
              <input
                {...register("email", { required: true })}
                name='email'
                type='email'
                autoComplete='email'
                className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-red-600'
                placeholder='Email address'
              />
              {errors.email && (
                <small className='text-red-600 text-sm'>
                  You must provide an email
                </small>
              )}
            </div>
            <div>
              <input
                {...register("password", { required: true })}
                name='password'
                type='password'
                autoComplete='current-password'
                className='bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-red-600'
                placeholder='Password'
              />
              {errors.password && (
                <small className='text-red-600 text-sm'>
                  You must provide Link password
                </small>
              )}
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded'
                />
                <label htmlFor='remember-me' className='ml-3 block text-sm'>
                  Remember me
                </label>
              </div>
              <div className='text-sm'>
                <Link
                  href='jajvascript:void(0);'
                  className='text-red-600 hover:text-red-500'
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className='!mt-10'>
              {loading ? (
                <button
                  disabled
                  type='button'
                  className='w-full text-center text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 inline-flex items-center justify-center'
                >
                  <svg
                    aria-hidden='true'
                    role='status'
                    className='inline w-4 h-4 me-3 text-white animate-spin'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='#E5E7EB'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentColor'
                    />
                  </svg>
                  Creating Account...
                </button>
              ) : (
                <button className='w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none'>
                  Create Account
                </button>
              )}
            </div>
            <p className='my-10 text-sm text-gray-400 text-center'>
              or continue with
            </p>
            <div className='space-x-6 flex justify-center'>
              <button type='button' className='border-none outline-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30px'
                  className='inline'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='#fbbd00'
                    d='M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z'
                    data-original='#fbbd00'
                  />
                  <path
                    fill='#0f9d58'
                    d='m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z'
                    data-original='#0f9d58'
                  />
                  <path
                    fill='#31aa52'
                    d='m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z'
                    data-original='#31aa52'
                  />
                  <path
                    fill='#3c79e6'
                    d='M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z'
                    data-original='#3c79e6'
                  />
                  <path
                    fill='#cf2d48'
                    d='m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z'
                    data-original='#cf2d48'
                  />
                  <path
                    fill='#eb4132'
                    d='M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z'
                    data-original='#eb4132'
                  />
                </svg>
              </button>
              <button type='button' className='border-none outline-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30px'
                  fill='#000'
                  viewBox='0 0 22.773 22.773'
                >
                  <path
                    d='M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z'
                    data-original='#000000'
                  ></path>
                </svg>
              </button>
              <button type='button' className='border-none outline-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30px'
                  fill='#007bff'
                  viewBox='0 0 167.657 167.657'
                >
                  <path
                    d='M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z'
                    data-original='#010002'
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className='font-[sans-serif] text-[#333] mt-4 p-4 relative w-full backgroundImage'>
    //   <div className='max-w-md lg:w-full mx-auto relative z-50'>
    //     <div className='text-center mb-8'>
    //       {/* <Link href='javascript:void(0)'>
    //         <img
    //           src='https://readymadeui.com/readymadeui.svg'
    //           alt='logo'
    //           className='w-48 inline-block'
    //         />
    //       </Link> */}
    //     </div>
    //     <div className='border border-gray-300 bg-white rounded-md p-8'>
    //       <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
    //         <div className='mb-6'>
    //           <h3 className='text-2xl font-extrabold'>Create an account</h3>
    //         </div>
    //         <div className='space-y-6'>
    //           <>
    //             <label className='text-sm mb-2 block'>First Name</label>
    //             <div className='relative flex items-center '>
    //               <input
    //                 {...register("firstName", { required: true })}
    //                 name='firstName'
    //                 type='text'
    //                 className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-red-500'
    //                 placeholder='Enter First Name'
    //               />
    //               {errors.firstName && (
    //                 <small className='text-red-600 text-sm'>
    //                   You must create a second name
    //                 </small>
    //               )}
    //               <BsPersonFillAdd className='w-4 h-4 absolute right-4' />
    //             </div>
    //           </>
    //           <div>
    //             <label className='text-sm mb-2 block'>Second Name</label>
    //             <div className='relative flex items-center'>
    //               <input
    //                 {...register("secondName", { required: true })}
    //                 name='secondName'
    //                 type='text'
    //                 required
    //                 className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-red-500'
    //                 placeholder='Enter Second Name'
    //               />
    //               {errors.secondName && (
    //                 <small className='text-red-600 text-sm'>
    //                   You must create a second name
    //                 </small>
    //               )}
    //               <BsPersonFillAdd className='w-4 h-4 absolute right-4' />
    //             </div>
    //           </div>
    //           <div>
    //             <label className='text-sm mb-2 block'>Email</label>
    //             <div className='relative flex items-center'>
    //               <input
    //                 {...register("email", { required: true })}
    //                 name='email'
    //                 type='email'
    //                 className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-red-500'
    //                 placeholder='Enter email'
    //               />
    //               {errors.email && (
    //                 <small className='text-red-600 text-sm'>
    //                   You must create a password
    //                 </small>
    //               )}
    //               <IoMailUnread className='w-4 h-4 absolute right-4' />
    //             </div>
    //           </div>
    //           <div>
    //             <label className='text-sm mb-2 block'>Password</label>
    //             <div className='relative flex items-center'>
    //               <input
    //                 {...register("password", { required: true })}
    //                 name='password'
    //                 type='password'
    //                 className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-red-500'
    //                 placeholder='Enter password'
    //               />
    //               {errors.password && (
    //                 <small className='text-red-600 text-sm'>
    //                   You must create a password
    //                 </small>
    //               )}
    //               <FaRegEyeSlash className='w-4 h-4 absolute right-4' />
    //             </div>
    //           </div>
    //           <div className='flex items-center'>
    //             <input
    //               {...register("rememberMe", { required: false })}
    //               id='rememberMe'
    //               name='rememberMe'
    //               type='checkbox'
    //               className='h-4 w-4 shrink-0 text-red-600 focus:ring-red-500 border-gray-300 rounded'
    //             />
    //             {errors.rememberMe && (
    //               <small className='text-red-600 text-sm'>
    //                 You must accept the terms & conditions before you continue
    //               </small>
    //             )}
    //             <label htmlFor='remember-me' className='ml-3 block text-sm'>
    //               I accept the{" "}
    //               <Link
    //                 href='/'
    //                 className='text-red-600 font-semibold hover:underline ml-1'
    //               >
    //                 Terms and Conditions
    //               </Link>
    //             </label>
    //           </div>
    //         </div>
    //         <div className='!mt-10'>
    //           {loading ? (
    //             <button
    //               disabled
    //               type='button'
    //               className='w-full text-center text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 inline-flex items-center justify-center'
    //             >
    //               <svg
    //                 aria-hidden='true'
    //                 role='status'
    //                 className='inline w-4 h-4 me-3 text-white animate-spin'
    //                 viewBox='0 0 100 101'
    //                 fill='none'
    //                 xmlns='http://www.w3.org/2000/svg'
    //               >
    //                 <path
    //                   d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
    //                   fill='#E5E7EB'
    //                 />
    //                 <path
    //                   d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
    //                   fill='currentColor'
    //                 />
    //               </svg>
    //               Creating Account...
    //             </button>
    //           ) : (
    //             <button
    //               type='button'
    //               className='w-full py-3 px-4 text-sm font-semibold rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none'
    //             >
    //               Create an account
    //             </button>
    //           )}
    //         </div>
    //         <p className='text-sm mt-6 text-center'>
    //           Already have an account?{" "}
    //           <Link
    //             href='/login'
    //             className='text-red-600 font-semibold hover:underline ml-1'
    //           >
    //             Login here
    //           </Link>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    //   <img
    //     src='https://readymadeui.com/bg-effect.svg'
    //     className='absolute inset-0 w-full h-full z-0 opacity-40'
    //   />
    // </div>
  );
}