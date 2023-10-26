"use client";
import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { team } from "../config/team";
import Image from "next/image";
import { Heading } from '@radix-ui/themes'


const TeamSection = () => {
    return (
        <div >

            <Heading size={"8"} weight={"regular"} align={"center"}  className='pb-10 md:pb-0 pt-20'>

                Meet The Dream Team
            </Heading>

            <div className=" md:p-16">
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-16 ">
                    {team.map((e) => (
                        <HoverCard.Root openDelay={300} key={e.id}>
                            <HoverCard.Trigger asChild>
                                <div className="relative w-[300px] h-[400px] m-auto mb-1  overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                        alt="Picture of the author"
                                        layout="fill"
                                        objectFit="cover"
                                        // priority="high"
                                        src={e.profile_image}
                                        className="rounded-lg"
                                    />
                                    <div className="absolute bottom-0 w-full p-4 bg-gradient-to-b bg-opacity-60 from-transparent to-black">
                                        <p className="text-2xl text-white nb-4">{e.name}</p>
                                        <div className="flex justify-between">
                                            <p className="flex items-center text-sm text-gray-300">
                                                {e.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </HoverCard.Trigger>
                            <HoverCard.Portal>
                                <HoverCard.Content
                                    side="right"
                                    sideOffset={5}
                                >
                                    <div className="flex bg-white rounded-lg shadow">
                                        <div className="relative flex-none w-24 md:w-48">
                                            <img
                                                src={e.profile_image}
                                                alt="shopping image"
                                                className="absolute inset-0 object-cover w-full h-full rounded-lg"
                                            />
                                        </div>
                                        <form className="flex-auto p-6">
                                            <div className="flex flex-wrap">
                                                <h1 className="flex-auto text-xl font-semibold ">
                                                    {e.name}
                                                </h1>

                                                <div className="flex-none w-full mt-2 text-sm font-semibold py-2 text-primary-dark_lh">
                                                    {e.title}
                                                </div>
                                            </div>


                                            <div className="w-96">
                                                <p className="text-sm text-gray-500">
                                                    {e.bio}
                                                </p>
                                            </div>
                                        </form>
                                    </div>

                                    <HoverCard.Arrow className="fill-white" />
                                </HoverCard.Content>
                            </HoverCard.Portal>
                        </HoverCard.Root>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
