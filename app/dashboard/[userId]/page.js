import Loader from "@/components/Loader";
import Form from "@/components/dashboard/Form";
import GridSection from "@/components/dashboard/GridSection";
import { getData } from "@/utils/getData";
import { getServerSession } from "next-auth";

export default async function page({ params: { userId } }) {
  const userData = await getData(`user/${userId}`);
  // console.log(userId);
  return (
    <div className='h-full flex flex-col gap-8 justify-start items-center px-16 py-8 w-full overflow-hidden'>
      <Form />
      <GridSection userData={userData} />
    </div>
  );
}
