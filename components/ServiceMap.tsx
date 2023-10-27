import { places } from "@/config/services";
import React from "react";

function ServiceMap() {
  return (
    <div className="container my-24 mx-auto ">
      <section className="mb-32">
        <div className="block xl:rounded-xl bg-primary-dark shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <div className="flex flex-wrap items-center">
            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 xl:w-4/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-2xl md:text-3xl py-4 text-primary-text">
                  Currently serving in the following locations
                </h2>
                {places.map((place, i) => (
                  <li
                    key={i}
                    className="text-sm lg:text-base pl-10 font-thin text-primary-text"
                  >
                    {place}
                  </li>
                ))}
              </div>
            </div>
            <div className="hidden shrink-0 grow-0 basis-auto md:flex md:w-6/12 xl:w-8/12 ">
              <img
                src="/images/UK.png"
                alt="RMD"
                className="w-full md:rounded-l-xl xl:rounded-l-none xl:rounded-r-xl "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceMap;
