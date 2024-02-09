"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { TextInputs } from "./formInputs/TextInputs";
import { CustomTextArea } from "./formInputs/TextArea";
import { useState } from "react";
import adminApiRequest from "@/utils/adminApiRequest";
import { useRouter } from "next/navigation";

export function CreateVideo({ initialData }) {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData ? initialData : "",
  });

  const router = useRouter();

  async function onSubmit(data) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    setLoading(true);
    setLoading2(true);
    const method = initialData ? "PATCH" : "POST";
    const apiUrl = initialData
      ? `${baseUrl}/api/youtube/update/${initialData.id}`
      : `${baseUrl}/api/youtube`;
    // console.log(data)
    adminApiRequest({
      setLoading2,
      setLoading,
      apiUrl,
      data,
      toastName: "Youtube",
      reset,
      method,
    });
    reset();
    if (initialData) {
      router.push("/admin/youtube-videos");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-8 w-full lg:w-[80%] mt-4 border border-gray-900 p-5 rounded-lg'
    >
      <TextInputs
        placeholder='Enter Video title'
        label='Video Title'
        name='title'
        type='text'
        width='max-w-full'
        errors={errors}
        register={register}
      />

      <TextInputs
        placeholder='Enter Video Link'
        label='Video Link'
        name='VedioLink'
        width='max-w-full'
        type='text'
        errors={errors}
        register={register}
      />
      <TextInputs
        placeholder='Enter Course Link'
        label='Course Link'
        name='courseLink'
        width='max-w-full'
        type='text'
        errors={errors}
        register={register}
      />
      <CustomTextArea
        label='Video Description'
        name='description'
        register={register}
        errors={errors}
      />
      <TextInputs
        placeholder='@johndoe'
        label='Video Link'
        name='author'
        width='max-w-full'
        type='text'
        errors={errors}
        register={register}
      />
      <div>
        {loading ? (
          <button
            disabled
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center'
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
            {initialData ? "Updating..." : "Loading..."}
          </button>
        ) : (
          <Button type='submit'>
            {initialData ? "Update video" : "Create video"}
          </Button>
        )}
      </div>
    </form>
  );
}
