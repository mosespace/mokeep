"use client";
import { useForm } from "react-hook-form";
import SelectInput from "./formInputs/SelectOptions";
import { Button } from "../ui/button";
import { TextInputs } from "./formInputs/TextInputs";
import { useState } from "react";
import adminApiRequest from "@/utils/adminApiRequest";
import { useRouter } from "next/navigation";

export function TopicForm({ catagories, initialData, subCatagories }) {
  // console.log(initialData);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData
      ? {
          title: initialData.title,
          SubCategoryId: initialData.subCategory.id, // Set default SubCategoryId to initialData.subCategory.id
        }
      : {},
  });

  const router = useRouter();

  async function onSubmit(data) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    setLoading(true);
    setLoading2(true);
    const method = initialData ? "PATCH" : "POST";
    const apiUrl = initialData
      ? `${baseUrl}/api/topic/update/${initialData.id}`
      : `${baseUrl}/api/topic`;
    // console.log(data)
    adminApiRequest({
      setLoading2,
      setLoading,
      apiUrl,
      data,
      toastName: "Topic",
      reset,
      method,
    });
    reset();
    if (initialData) {
      router.push("/admin/topic");
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-8 w-full lg:w-[80%] mt-4 border border-gray-900 p-5 rounded-lg'
    >
      <TextInputs
        placeholder='Enter Topic title'
        label='Topic title'
        name='title'
        type='text'
        errors={errors}
        register={register}
      />

      <SelectInput
        label='Select SubCategory'
        name='SubCategoryId'
        options={subCatagories}
        className='col-span-2 sm:col-span-1'
        register={register}
      />

      <div>
        {loading ? (
          <button
            disabled
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center'
          >
            <span className='inline w-4 h-4 me-3 text-white animate-spin'></span>
            {initialData ? "Updating..." : "loading..."}
          </button>
        ) : (
          <Button type='submit'>
            {initialData ? "Update topic" : "Create topic"}
          </Button>
        )}
      </div>
    </form>
  );
}
