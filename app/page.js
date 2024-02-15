import Hero from "@/components/Hero";
import { Faq } from "@/components/Faq";
import { Feature } from "@/components/Feature";
import { Pricing } from "@/components/Pricing";
import Dash from "@/components/(frontend)/Dash";
import { Statistic } from "@/components/Statistics";
import HeroSection from "@/components/(frontend)/HeroSection";

export default function page() {
  return (
    <div className='min-h-screen'>
      {/* <Dash /> */}
      <HeroSection />

      {/* <Feature /> */}
      {/* <Pricing /> */}
      {/* <Statistic />*/}
      {/* <Faq /> */}
    </div>
  );
}
