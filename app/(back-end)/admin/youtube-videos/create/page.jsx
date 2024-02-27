import React from "react";
import Head from "@/Components/admin/Head";
import { CreateVideo } from "@/Components/admin/CreateVideo";

export default function page() {
  return (
    <div>
      <h1 className='font-bold text-2xl'>Create Youtube Video</h1>
      <p>
        The videos you create here will be added on the featured videos. make
        sure to add a valid url and also nice description
      </p>
      <div className=''>
        <CreateVideo />
      </div>
    </div>
  );
}
