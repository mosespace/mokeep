import Button from "./Button";
import Courses from "./Courses";
import Pricing from "./Pricing";
import Statistics from "./Statistics";

export default function HeroSection() {
  return (
    <>
      <section className='bg-gradient-to-t to-[#0D1224] from-[#12192f]'>
        <div className='flex flex-col items-center justify-center'>
          <div className='relative flex flex-col items-center w-full pt-12 max-w-7xl lg:pt-36'>
            <div className='max-w-3xl mx-auto text-center'>
              <p className='text-4xl font-extrabold tracking-tight text-white md:text-6xl'>
                Learning to code
                <span className='md:block'>has never been easier.</span>
              </p>
              <p className='max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300'>
                At Desishub-Coding-School we have eased that process with our
                complete free lessons that only need you to take 1/2 hours of
                your daily time. Everything is simplified for you to the best
                way you can understand it.
              </p>
            </div>
            <div className='max-w-lg flex justify-center item-center'>
              <Button title='Chose a premium course' link='/' />
            </div>
          </div>
          <Courses />
          <Pricing />
          <Statistics />
        </div>
      </section>
    </>
  );
}
