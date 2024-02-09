import { getData } from "@/utils/getData";
import Topics from "@/components/admin/Topics";
import { TopicForm } from "@/components/admin/TopicForm";

export default async function page() {
  const catagories = await getData("category");
  const subCatagories = await getData("subCategory");
  const topics = await getData("topic");

  // console.log(topics);
  return (
    <div className='flex flex-col'>
      <TopicForm subCatagories={subCatagories} catagories={catagories} />
      <Topics data={topics} />
    </div>
  );
}
