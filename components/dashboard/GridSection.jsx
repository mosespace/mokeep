"use client";
import Link from "next/link";
import { toast } from "sonner";
import DeleteBtn from "./DeleteBtn";
import { useClipboard } from "use-clipboard-copy";

export default function GridSection(data) {
  const notes = data.data;
  // console.log(notes);

  // console.log(notes);
  // Separate the first two notes and the rest
  const firstTwoNotes = notes?.slice(0, 2);
  const remainingNotes = notes?.slice(2);

  const clipboard = useClipboard();

  const handleCopy = (text) => {
    clipboard.copy(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className='container flex flex-col justify-between h-full lg:max-w-6xl lg:px-10 mx-auto xl:px-0 lg:mt-20'>
      <h2 className='mb-1 text-3xl font-extrabold leading-tight text-gray-900'>
        Your Notes
      </h2>
      <p className='mb-12 text-lg text-gray-500'>
        Here are the notes you've created with us for now.
      </p>
      <div className='w-full'>
        <div className='flex md:justify-between flex-col w-full mb-10 sm:flex-row'>
          {firstTwoNotes?.map((note, index) => (
            <div key={index} className='w-full mb-10 sm:mb-0 sm:w-1/2'>
              <div className='relative h-full ml-0 mr-0 sm:mr-10'>
                <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg'></span>
                <div className='relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg'>
                  <div className='flex items-center -mt-1 justify-between'>
                    <Link href={`/admin/notes/${note.id}`}>
                      <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                        {note.title}
                      </h3>
                    </Link>

                    <div className='flex gap-2'>
                      <Link
                        href={`/admin/notes/${note.id}`}
                        className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg bg-green-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                      >
                        Edit
                      </Link>
                      <button
                        className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                        type='button'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <Link href={`/admin/notes/${note.id}`}>
                    <p className='mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase'>
                      ------------
                    </p>
                  </Link>

                  <Link href={`/admin/notes/${note.id}`}>
                    <p className='text-to-be-copied mb-2 text-gray-600'>
                      {note.description}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {remainingNotes?.map((note, index) => (
            <div key={index} className={`w-full mb-8 relative h-full`}>
              <span
                className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-${
                  note.color || "blue"
                }-400 rounded-lg`}
              ></span>
              <div
                className='relative h-full p-5 bg-white border-2'
                style={{ borderColor: `${note.color || "blue"}-400` }}
              >
                <div className='flex items-center -mt-1 justify-between'>
                  <Link href={`/admin/notes/${note.id}`}>
                    <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                      {note.title}
                    </h3>
                  </Link>
                  <div className='flex flex-col gap-2'>
                    <Link
                      href={`/admin/notes/${note.id}`}
                      className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg bg-green-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                    >
                      Edit
                    </Link>
                    <button
                      className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                      type='button'
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <Link href={`/admin/notes/${note.id}`}>
                  <p
                    className={`mt-3 mb-1 text-xs font-medium text-${
                      note.color || "blue"
                    }-400 uppercase`}
                  >
                    ------------
                  </p>
                </Link>
                <Link href={`/admin/notes/${note.id}`}>
                  <p className='mb-2 text-gray-600'>{note.description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
