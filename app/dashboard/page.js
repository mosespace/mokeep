"use client";
import Loader from "@/components/Loader";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Form from "@/components/dashboard/Form";

export default function page() {
  // const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loader />;
  }
  // if (status === "unauthenticated") {
  //   redirect("/");
  // }
  return (
    <div className='h-screen overflow-hidden flex flex-col gap-8 justify-start px-16 py-8'>
      <Form />
      <div
        className='grid grid-cols-5 gap-3'
        style={{ gridAutoRows: "min-content" }}
      >
        <div className='col-span-2/ row-span-3 border-2 border-red-600 p-3 rounded-md'>
          Cell 1
        </div>
        <div className='col-span-2/ row-span-2 border-2 border-red-600 p-3 rounded-md'>
          Cell 2
        </div>
        <div className='col-span-2/  border-2 border-red-600 p-3 rounded-md'>
          Cell 3
        </div>
        <div className='col-span-2/ border-2 border-red-600 p-3 rounded-md'>
          Cell 4
        </div>
        <div className='col-span-2/ border-2 border-red-600 p-3 rounded-md'>
          Cell 5
        </div>
        <div className=' col-span-2/ border-2 border-red-600 p-3 rounded-md'>
          Cell 6
        </div>
        <div className=' col-span-2/ border-2 border-red-600 p-3 rounded-md'>
          Cell 7
        </div>
        <div className='col-span-2/  border-2 border-red-600 p-3 rounded-md'>
          Cell 8
        </div>
        <div className='col-span-2/  border-2 border-red-600 p-3 rounded-md'>
          Cell 9
        </div>
        <div className='col-span-2/  border-2 border-red-600 p-3 rounded-md'>
          Cell 10
        </div>
      </div>
    </div>
  );
}
