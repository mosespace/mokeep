import Hero from "@/components/Hero";
import { Faq } from "@/components/Faq";
import { Feature } from "@/components/Feature";
import { Pricing } from "@/components/Pricing";
import { Statistic } from "@/components/Statistics";

export default function page() {
  return (
    <div className='bg-slate-50'>
      <Hero />

      {/* <Feature /> */}
      {/* <Pricing /> */}
      {/* <Statistic />*/}
      <Faq />
    </div>
  );
}
