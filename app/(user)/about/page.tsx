import AboutHeroSection from "@/components/AboutHeroSection";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="bg-primary">
        <AboutHeroSection />
      </div>
      <TeamSection />
      <div className="flex flex-col items-center justify-center p-5 md:p-20 ">
      
        <Image
          className="rounded-2xl bg-gradient-to-b bg-opacity-60 from-transparent to-black object-cover"
          src="/images/team_sofa.jpg"
          width={1200}
          height={1000}
        
          alt="Picture of the author"
        />
       
        <h2 className="text-xl md:text-3xl tracking-wider pt-20 text-primary-dark_l ">
          “Creativity is seeing what others see and thinking what no one else
          ever thought”.
        </h2>
        <p className="text-sm lg:text-lg pt-5 font-thin text-primary-dark_l">
          - Albert Einstein
        </p>
      </div>
    </div>
  );
}
