
import AffiliateSection from "@/components/Home/AffiliateSection/AffiliateSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import TestimonialsSection from "@/components/Home/TestimonialsSection/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <AffiliateSection></AffiliateSection>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
}
