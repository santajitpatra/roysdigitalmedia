import HeroSection from "@/components/HeroSection";
import InstaBanner from "@/components/InstaBanner";
import InstaMedia from "@/components/InstaMedia";
import Jumbotron from "@/components/Jumbotron";
import ServicesHome from "@/components/ServicesHome";
import SwiperSlider from "@/components/SwiperSlider";
export default function Home() {
  

  return (
    <main className="bg-primary-light">
      <Jumbotron/>
      <HeroSection/>  
      <InstaBanner/>
      <ServicesHome/> 
      <SwiperSlider/>
      <InstaMedia/>
       </main>
  )
}
