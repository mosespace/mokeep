import { getData } from "@/utils/getData";
import { getServerSession } from "next-auth";
import Form from "@/components/dashboard/Form";
import { authOptions } from "@/utils/authOptions";
import GridSection from "@/components/dashboard/GridSection";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  // console.log(session.user);

  const userId = session.user.id;
  const userData = await getData(`user/${userId}`);

  return (
    <div className='h-full flex flex-col gap-8 justify-start items-center px-16 py-8 w-full overflow-hidden'>
      <Form />
      <GridSection userData={userData} />
    </div>
  );
}
