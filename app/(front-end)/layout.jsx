import { getData } from "@/utils/getData";
import SideBar from "@/Components/(frontend)/SideBar";
import { StartNav } from "@/Components/(frontend)/StartNav";

export default async function Layout({ children }) {
  try {
    const courses = await getData("category");
    const subCategories = await getData("subCategory");
    // console.log("Courses", courses);
    // console.log("Sub Courses", subCategories);
    return (
      <div className='flex lg:flex-row flex-col w-full'>
        <div className='md:w-64 md:block hidden overflow-hidden'>
          <SideBar subCategories={subCategories} />
        </div>
        <div className='flex flex-1 flex-col overflow-hidden'>
          <StartNav courses={courses} />
          <div className='px-4 py-10 my-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 min-h-screen'>
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    );
  } catch (error) {}
}
