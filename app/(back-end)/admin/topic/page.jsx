import { getData } from "@/utils/getData";
import Topics from "@/components/admin/Topics";
import Head from "@/components/admin/Head";

export default async function page() {
  const topics = await getData("topic");
  return (
    <div className='flex flex-col'>
      <Head
        title={"Create a new topic before you create notes"}
        link={"/admin/topic/create"}
      />

      <Topics data={topics} />
    </div>
  );
}
