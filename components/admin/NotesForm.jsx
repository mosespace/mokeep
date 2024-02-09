"use client";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Button } from "../ui/button";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import SelectInput from "./formInputs/SelectOptions";
import { TextInputs } from "./formInputs/TextInputs";
import adminApiRequest from "@/utils/adminApiRequest";
import { CustomTextArea } from "./formInputs/TextArea";

export function NotesForm({ categories, subCategory, topics, initialData }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [value, setValue] = useState("");
  // console.log(initialData);
  // console.log(topics);
  // console.log(categories);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData
      ? {
          title: initialData.title,
          SubCategoryId: initialData.subCategory.id,
          topicsId: initialData.topicId,
          categoryId: initialData.categoryId,
          description: initialData.description,
        }
      : {},
  });

  const router = useRouter();

  useEffect(() => {
    // Set the value of the Quill editor when initialData changes
    if (initialData) {
      setValue(initialData.content);
    }
  }, [initialData]);

  async function onSubmit(data) {
    data.value = value;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    setLoading(true);
    setLoading2(true);
    const method = initialData ? "PATCH" : "POST";
    const apiUrl = initialData
      ? `${baseUrl}/api/notes/update/${initialData.id}`
      : `${baseUrl}/api/notes`;
    // console.log(data)
    adminApiRequest({
      setLoading2,
      setLoading,
      apiUrl,
      data,
      toastName: "Notes",
      reset,
      method,
    });
    reset();
    if (initialData) {
      router.push("/admin/topics");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-8 w-full lg:w-[80%] mt-4 border border-gray-900 p-5 rounded-lg'
    >
      <TextInputs
        placeholder='Enter Notes title :'
        label='Notes title'
        name='title'
        type='text'
        errors={errors}
        register={register}
      />

      <div className='grid grid-cols-2 gap-4'>
        <SelectInput
          label='Select Category : '
          name='categoryId'
          options={categories}
          className='col-span-2 sm:col-span-1'
          register={register}
        />

        <SelectInput
          label='Select SubCategory :'
          name='subCategoryId'
          options={subCategory}
          className='col-span-2 sm:col-span-1'
          register={register}
        />
      </div>
      <SelectInput
        label='Select Topics :'
        name='topicsId'
        options={topics}
        className='col-span-2 sm:col-span-1'
        register={register}
      />

      <div className='col-span-2'>
        <div className='mt-1 w-full'>
          <h2 className='font-bold mb-4'>Contents : </h2>
          <ReactQuill
            modules={modules}
            formats={formats}
            theme='snow'
            value={value}
            onChange={setValue}
            className='w-full'
          />
          <div
            className='mt-8 prose hidden'
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      </div>

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
          <Button type='submit'>
            {initialData ? "Update Notes" : "Create Notes"}
          </Button>
        )}
      </div>
    </form>
  );
}
