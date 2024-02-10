"use client";
import { TextInputs } from '@/components/admin/formInputs/TextInputs';
import { Button } from '@/components/ui/button';
import adminApiRequest from '@/utils/adminApiRequest';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import SelectInput from './admin/formInputs/SelectOptions';
import { CustomTextArea } from './admin/formInputs/TextArea';

export default function LinksForm({initialData , linksCategories}) {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  async function onSubmit(data) {
    // console.log(data)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    setLoading(true);
    setLoading2(true);
    const method = initialData ? "PATCH" : "POST";
    const apiUrl = initialData
      ? `${baseUrl}/api/category/update/${initialData.id}`
      : `${baseUrl}/api/resourcelinks`;
    console.log(data)
    adminApiRequest({
      setLoading2,
      setLoading,
      apiUrl,
      data,
      toastName: "Link Category",
      reset,
      method,
    });
    reset();
    if (initialData) {
      router.push("/admin/category");
    }
  }
  return (
  <div className='flex flex-col gap-2'>
     <div className="bg-indigo-600">
    <div className="max-w-screen-xl mx-auto px-4 py-3 items-center justify-between text-white sm:flex md:px-8">
        <div className="flex gap-x-4">
            <div className="w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            </div>
            <p className="lg:py-2 py-4 font-medium text-sm ">
              Here your are creating the Resource links
            </p>
        </div>
        <Link href="/admin/resource-links" className="inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm">
         Resource Links
        </Link>
    </div>
     </div>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-8 w-full lg:w-[80%] mt-4 border border-gray-900 p-5 rounded-lg'
    >
      <TextInputs
        placeholder='Enter Resource '
        label='Enter Resource title'
        name='title'
        type='text'
        errors={errors}
        register={register}
      />
  <SelectInput
          label='Select Link Category'
          name='linkCategoryId'
          options={linksCategories}
          className='col-span-2 sm:col-span-1'
          register={register}
        />

    <TextInputs
        placeholder='Enter Link'
        label='Enter Link'
        name='resourcelink'
        type='text'
        errors={errors}
        register={register}
      />

<CustomTextArea
        label='Description'
        name='description'
        register={register}
        errors={errors}
      />

      <div>
        {loading ? (
          <button
            disabled
            type='button'
            class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center'
          >
            <svg
              aria-hidden='true'
              role='status'
              class='inline w-4 h-4 me-3 text-white animate-spin'
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
            Loading...
          </button>
        ) : (
          <Button type='submit'>Create Resource Link</Button>
        )}
      </div>
    </form>
  </div>
  )
}
