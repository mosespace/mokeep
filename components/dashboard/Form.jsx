"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { apiRequest } from "@/utils/apiRequest";
import { RiCloseCircleFill } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";

export default function Form({ note }) {
  const [isExpanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const pathname = usePathname();
  // Using useEffect to setExpanded based on pathname
  useEffect(() => {
    if (pathname === `/dashboard/${note?.id}`) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, []);

  const handleToggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const handleNoteClose = () => {
    setExpanded(false);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    defaultValue = "",
  } = useForm();

  const userId = session?.user?.id;
  // console.log(userId);

  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };

  async function onSubmit(data) {
    const requestData = {
      ...data,
      userId,
    };

    // If note exists, it's an update, else it's a create
    const apiRoute = note ? `/api/notes/${note.id}` : "/api/notes";

    // Determining the HTTP method based on the presence of the note
    const method = note ? "PUT" : "POST";

    apiRequest(setLoading, apiRoute, requestData, "Note", reset, method);

    handleRefresh();
    if (method === "PUT") {
      router.push("/dashboard");
      router.refresh();
      setExpanded(true);
    }
    setExpanded(false);
  }

  return (
    <div
      className={`overflow-hidden px-4 pt-8 items-center right-0 max-w-2xl top-0 z-50 ${
        isExpanded
          ? "expanded max-w-2xl border-2 border-red-500 rounded-md h-auto shadow-lg bg-white fixed left-1/4 transform z-50 mt-10"
          : "sm:w-full sm:fixed md:fixed md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:z-50 md:mt-10"
      }`}
    >
      <h1
        onClick={handleToggleExpand}
        className={`py-4 flex justify-between items-center cursor-pointer font-bold px-[8px] border border-red-500 rounded-md ${
          isExpanded ? "border-0" : ""
        }`}
      >
        {note ? "Update Note" : "Take a note..."}

        {isExpanded ? (
          <RiCloseCircleFill
            className='close-icon cursor-pointer'
            onClick={handleNoteClose}
          />
        ) : (
          ""
        )}
      </h1>
      {isExpanded && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-1 font-semibold'
        >
          <input
            {...register("title", { required: true })}
            name='title'
            type='text'
            defaultValue={note?.title}
            className='note-input title-input outline-0 border-0 focus:outline-0 focus:ring-0'
            placeholder='Title'
          />
          {/* <textarea
            {...register("description", { required: true })}
            name='description'
            rows='1'
            defaultValue={note?.description}
            className='note-input note-textarea outline-0 border-0 focus:outline-0 focus:ring-0 overflow-y-hidden resize-none min-height-[50px]'
            placeholder='Take a note...'
          /> */}
          <div className='mt-2'>
            <textarea
              {...register("description", { required: false })}
              name='description'
              id='description'
              rows={3}
              className='outline-0 border-0 focus:outline-0 focus:ring-0 block w-full rounded-md py-3 text-gray-900 ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100'
              defaultValue={note?.description}
              placeholder='Take a note...'
            />
          </div>
          <div className='mb-4 place-content-center flex items-center'>
            {loading ? (
              <button
                disabled
                type='button'
                className='w-1/2 text-center text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 inline-flex items-center justify-center'
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
                {note ? "updating note..." : "saving note..."}
              </button>
            ) : (
              <button className='w-1/2 shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none'>
                {note ? "update note" : "save note"}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
