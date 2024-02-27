import { getData } from "@/utils/getData";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Form from "@/Components/dashboard/Form";
import { authOptions } from "@/utils/authOptions";

export default async function page({ params: { noteId } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }

  const note = await getData(`notes/${noteId}`);

  return (
    <>
      <Form note={note} />
      <div className='h-screen flex justify-center items-center px-16 py-[8.5rem] w-full'>
        <div className='flex justify-center items-center mb-10'>
          <div className='w-full mb-10 sm:mb-0 sm:w-1/2'>
            <div className='relative h-full ml-0 mr-0 sm:mr-10'>
              <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg'></span>
              <div className='relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg'>
                <div className='flex items-center -mt-1 justify-between'>
                  <h3 className='my-2 text-lg font-bold text-gray-800'>
                    {note.title}
                  </h3>

                  <button
                    // onClick={() => handleCopy(note.description)}
                    type='button'
                    className='inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-slate-200 p-2 text-slate-800 transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                      <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2'></path>
                      <path d='M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z'></path>
                    </svg>
                    <span className='sr-only'>Copy</span>
                  </button>
                </div>

                <p className='mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase'>
                  ------------
                </p>

                <p className='text-to-be-copied mb-2 text-gray-600'>
                  {note.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
