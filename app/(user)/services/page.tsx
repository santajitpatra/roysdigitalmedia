import AllServices from "@/components/AllServices";
import BrandSection from "@/components/BrandSection";
import ServiceMap from "@/components/ServiceMap";
import React from "react";

export default function Services() {
  return (
    <div className="bg-primary-light">
      <h2 className="text-3xl md:text-4xl tracking-wider py-10 text-primary-dark_l text-center">
        Services
      </h2>
      <AllServices />
      <ServiceMap/>
      <BrandSection />
    </div>
  );
}
