import Banner from "@/components/Banner";
import CategoryMarquee from "@/components/CategoryMarquee";
import ContactSection from "@/components/ContactSection";
import FeaturedFacilities from "@/components/FeaturedFacilities";
import UpcomingEvents from "@/components/UpcomingEvents";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <CategoryMarquee></CategoryMarquee>
      <FeaturedFacilities></FeaturedFacilities>
      <UpcomingEvents></UpcomingEvents>
      <WhyChooseUs></WhyChooseUs>
      <ContactSection></ContactSection>
    </div>
  );
}
