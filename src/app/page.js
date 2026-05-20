import Banner from "@/components/Banner";
import CategoryMarquee from "@/components/CategoryMarquee";
import FeaturedFacilities from "@/components/FeaturedFacilities";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <CategoryMarquee></CategoryMarquee>
      <FeaturedFacilities></FeaturedFacilities>
    </div>
  );
}
