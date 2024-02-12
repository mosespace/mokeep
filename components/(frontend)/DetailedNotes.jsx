import React from "react";

export default function DetailedNotes({ data }) {
  //   console.log(data);
  return (
    <div>
      <h1 className='font-bold text-2xl mb-4'>{data?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data?.content }} />
      DetailedNotes
    </div>
  );
}
