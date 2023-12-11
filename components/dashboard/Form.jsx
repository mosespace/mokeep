"use client";
import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
export default function Form() {
  const [isExpanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleToggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleNoteClose = () => {
    // Reset form state when closing the note
    setTitle("");
    setNote("");
    setExpanded(false);
  };

  return (
    <div
      className={`overflow-hidden max-w-2xl ${
        isExpanded
          ? "expanded w-full max-w-2xl border-2 border-red-500 rounded-md h-[200px] shadow-lg bg-white"
          : "w-full"
      }`}
    >
      <h1
        onClick={handleToggleExpand}
        className={`py-4 flex justify-between items-center cursor-pointer font-bold px-[8px] border border-red-500 rounded-md ${
          isExpanded ? "border-0" : ""
        }`}
      >
        Take a note...{" "}
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
        <form className='flex flex-col gap-1 font-semibold'>
          <input
            type='text'
            value={title}
            onChange={handleTitleChange}
            className='note-input title-input outline-0 border-0 focus:outline-0 focus:ring-0'
            placeholder='Title'
          />
          <textarea
            rows='1'
            no-resize
            value={note}
            onChange={handleNoteChange}
            className='note-input note-textarea outline-0 border-0 focus:outline-0 focus:ring-0 overflow-y-hidden resize-none min-height-[50px]'
            placeholder='Take a note...'
          />
        </form>
      )}
    </div>
  );
}
