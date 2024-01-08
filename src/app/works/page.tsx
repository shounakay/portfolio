import Image from "next/image";
import React from "react";
import codvo from "../../../public/codvo_logo.jpeg";
import infosys from "../../../public/infosys_logo.jpeg";
import { MdCalendarMonth } from "react-icons/md";

const ExperiencePage = () => {
  return (
    <article className="mt-12 flex h-full w-full flex-col px-8 lg:mt-16 lg:px-24">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <span className=" text-lavender-400">/</span>
          <span className="text-neutral-100">works</span>
        </div>
        <p className="text-base text-neutral-400">
          Chronicles of Code: Unveiling the Years Behind the Screen
        </p>
      </div>
      <section className="mt-12 flex w-full flex-col gap-12 pb-12">
        <div className="flex items-center gap-2 text-xl lg:text-2xl">
          <span className=" text-lavender-400 font-bold">#</span>
          <span className="font-bold text-neutral-200">experience</span>
          <span className="border-lavender-400 w-56 border" />
        </div>
        <div className="flex w-full flex-col gap-3 lg:w-[70%]">
          <div className="flex items-center gap-3 text-lg font-medium text-neutral-100">
            <Image src={codvo} alt="codvo" width={20} height={20} />
            <h3>codvo.ai</h3>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-xs md:text-sm lg:text-base">
              <h3 className="text-lavender-400 ">
                Sr. Front End Engineer - III
              </h3>
              <h3 className="text-sm text-neutral-400">Remote</h3>
            </div>
            <div className="flex basis-2/5 items-center gap-2">
              <MdCalendarMonth style={{ color: "#ffff" }} size={15} />
              <h3 className="text-xs text-neutral-400 md:text-sm lg:text-base">
                August, 2023 - December-2023
              </h3>
            </div>
          </div>
          <div className="ml-2 h-24 w-0 border-[0.5px] border-neutral-400" />
          <div className="flex w-full items-center justify-between">
            <div className="text-xs md:text-sm lg:text-base">
              <h3 className="text-lavender-400 ">
                Sr. Front End Engineer - II
              </h3>
              <h3 className="text-sm text-neutral-400">Remote</h3>
            </div>
            <div className="flex basis-2/5 items-center gap-2">
              <MdCalendarMonth style={{ color: "#ffff" }} size={15} />
              <h3 className="text-xs text-neutral-400 md:text-sm lg:text-base">
                August, 2022 - August-2023
              </h3>
            </div>
          </div>
          <div className="ml-2 h-24 w-0 border-[0.5px] border-neutral-400" />
          <div className="flex w-full items-center justify-between">
            <div className="text-xs md:text-sm lg:text-base">
              <h3 className="text-lavender-400 ">Front End Engineer - II</h3>
              <h3 className="text-sm text-neutral-400">Remote</h3>
            </div>
            <div className="flex basis-2/5 items-center gap-2">
              <MdCalendarMonth style={{ color: "#ffff" }} size={15} />
              <h3 className="text-xs text-neutral-400 md:text-sm lg:text-base">
                February, 2022 - August-2022
              </h3>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 lg:w-[70%]">
          <div className="flex items-center gap-3 text-lg font-medium text-neutral-100">
            <Image src={infosys} alt="codvo" width={20} height={20} />
            <h3>infosys</h3>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-xs md:text-sm lg:text-base">
              <h3 className="text-lavender-400 ">Systems Engineer</h3>
              <h3 className="text-sm text-neutral-400">Remote</h3>
            </div>
            <div className="flex basis-2/5 items-center gap-2">
              <MdCalendarMonth style={{ color: "#ffff" }} size={15} />
              <h3 className="text-xs text-neutral-400 md:text-sm lg:text-base">
                Decemeber, 2019 - May-2020
              </h3>
            </div>
          </div>
          <div className="ml-2 h-24 w-0 border-[0.5px] border-neutral-400" />
          <div className="flex w-full items-center justify-between">
            <div className="text-xs md:text-sm lg:text-base">
              <h3 className="text-lavender-400 ">Systems Engineer Trainee</h3>
              <h3 className="text-sm text-neutral-400">Remote</h3>
            </div>
            <div className="flex basis-2/5 items-center gap-2">
              <MdCalendarMonth style={{ color: "#ffff" }} size={15} />
              <h3 className="text-xs text-neutral-400 md:text-sm lg:text-base">
                May, 2020 - October-2022
              </h3>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ExperiencePage;
