"use client";
import { toast } from "sonner";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ userData, noteId }) {
  const finalNotes = userData.userData.notes;
  // console.log(noteId);

  const updatedNotes = finalNotes.filter((note) => note.id !== noteId);

  // console.log(updatedNotes);

  const router = useRouter();
  async function handleDelete() {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (userConfirmed) {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

        const response = await fetch(`${baseUrl}/api/notes/${noteId}`, {
          cache: "no-store",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          toast.success(`Successfully Deleted Note with ID: ${noteId}`);
          router.refresh();
        } else {
          toast.error("Failed to delete the note. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting note:", error);
        toast.error(
          "An error occurred while deleting the note. Please try again."
        );
      }
    }
  }

  return (
    <button
      onClick={handleDelete}
      data-action='clipboard#copy'
      type='button'
      className='inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-slate-200 p-2 text-slate-800 transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
    >
      <MdDelete className='h-5 w-5' />

      <span className='sr-only'>Copy</span>
    </button>
  );
}
