import React from "react";

const AboutHeroSection = () => {
    return (
       
            <div className="px-6 py-20 text-center md:px-12 lg:text-left bg-primary">
                <div className="w-100 mb-8 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="lg:grid items-center flex flex-col-reverse lg:grid-cols-2">
                        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                            <div className="block rounded-lg bg-primary-dark px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-20 backdrop-blur-[30px]">
                                <h2 className="text-3xl md:text-4xl tracking-wider py-10 text-primary-text">
                                    About Us
                                </h2>

                                <p className="text-sm lg:text-lg pb-5 font-thin text-primary-text">
                                    Established in 2020, Roys Digital Media thrives in an ever
                                    more digitally dependent world. Now, a business&apos;s online
                                    presence is a vital conduit to the global audience. This
                                    realization gave Roys Digital Media its purpose – helping
                                    brands share their story through digital media.
                                </p>
                                <p className="text-sm lg:text-lg pb-5 font-thin text-primary-text">
                                    Our expertise lies in elevating brands through social media
                                    management, website development, brand development, and
                                    comprehensive marketing solutions. We strive to liberate
                                    businesses from the hindrances of in-house marketing, granting
                                    owners the freedom to concentrate on other vital aspects of
                                    their company.
                                </p>
                            </div>
                        </div>
                        <div className="mb-10 md:mb-12 lg:mb-0">
                            <img
                                src="/images/emma_about_hero.jpg"
                                className="w-full  rounded-t-full shadow-lg dark:shadow-black/20"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AboutHeroSection;
