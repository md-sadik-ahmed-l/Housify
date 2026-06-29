import FeaturedProperties from "@/components/FeaturedProperties";
import HeroSection from "@/components/HeroSection";
import PlatformBenefits from "@/components/PlatformBenefits";
import TrustedOwners from "@/components/TrustedOwners";
import { getFeaturedProperties } from "@/lib/api/property";
import Image from "next/image";

export default async function Home() {

  const featuredProperties = await getFeaturedProperties();
    console.log(featuredProperties);
    
  return (
    <div>
      <HeroSection></HeroSection>

      <FeaturedProperties featuredProperties={featuredProperties}></FeaturedProperties>
      <PlatformBenefits></PlatformBenefits>
      <TrustedOwners></TrustedOwners>
    </div>
  );
}
