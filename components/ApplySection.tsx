import { jobapplication } from "@/config/careers";
import Image from "next/image";
import React from "react";

const ApplySection = () => {
  return (
    <div className="flex flex-col md:flex-row py-16">
      <div className="p-10 md:pl-16 md:w-1/2">
        {jobapplication.map((job) => (
          <div key={job.title}>
            <h2 className="text-3xl text-primary-dark_l lg:text-4xl mb-10">
              {job.title}
            </h2>
            <p className="text-base lg:text-lg text-primary-dark_l pb-5 ">
              {job.descreption}
            </p>
            {job.category.map((e) => (
              <li
                className="lg:leading-loose text-base lg:text-lg text-primary-dark_l"
                key={e}
              >
                {e}
              </li>
            ))}
          </div>
        ))}
      </div>
      <div className="p-10  md:w-1/2">
        <h2 className="text-3xl text-primary-dark_l lg:text-4xl md:mb-20 xl:mb-10">
          The Dream Team
        </h2>

        <Image
          className="rounded-xl"
          width={900}
          height={900}
          src="/images/team_rdm.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ApplySection;
