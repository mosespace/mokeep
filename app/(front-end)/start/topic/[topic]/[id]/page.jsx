import React from "react";

export default function page({ params: { id } }) {
  // console.log(id)
  return <div>These are notes for {id}</div>;
}
