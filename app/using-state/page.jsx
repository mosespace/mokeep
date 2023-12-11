"use client";
import { useState } from "react";

export default function page() {
  const [count, seCount] = useState(0);
  //   console.log(count);

  return (
    <div className='bg-slate-950 h-screen flex items-center text-slate-50 justify-center w-full'>
      <div className='flex items-center gap-8 justify-between'>
        <button
          onClick={() => seCount(count + 1)}
          className='bg-red-600 px-9 py-4 rounded-lg flex gap-4'
        >
          Plus: <span className='font-bold'>{count}</span>
        </button>
        <button
          onClick={() => seCount(count - 1)}
          className='bg-green-600 px-9 py-4 rounded-lg flex gap-4'
        >
          Minus: <span className='font-bold'>{count}</span>
        </button>
      </div>
    </div>
  );
}
