import Image from "next/image";
import React from "react";
import aboutMe from "../../../public/about-me.svg";
import { funFacts, skills } from "../helper";
import { SkillCard } from "../_components/SkillCard";
import { Funfact } from "../_components/Funfact";
import funFactShape from "../../../public/fun-fact-shape.svg";

const Aboutpage = () => {
  return (
    <article className="mt-12 flex h-full w-full flex-col px-8 lg:mt-16 lg:px-24">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <span className=" text-lavender-400">/</span>
          <span className="text-neutral-100">about-me</span>
        </div>
        <p className="text-base text-neutral-400">Who am i ?</p>
      </div>
      <section className="mt-12 flex flex-col gap-12 pb-12">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex grow basis-full flex-col gap-5 text-sm text-neutral-400 lg:grow-0 lg:basis-1/2">
            <h3 className="">Hello, I am Shounak</h3>
            {/* <p>I am full stack engineer with 4 years of experience.</p> */}
            <p>
              I bring over four years of experience as a dedicated full-stack
              engineer, demonstrating a profound passion for my craft. My
              enthusiasm extends beyond routine tasks, as I am fervently
              committed to staying abreast of emerging technologies within the
              full-stack spectrum. Engaging in dynamic online chat communities
              and fostering collaborative discussions with peers allows me to
              cultivate an in-depth understanding of the latest industry trends.
            </p>
            <p>
              Situated in Panji, Goa, I thrive in a remote work environment,
              where I can meticulously plan and execute tasks to harness my full
              potential. My commitment to excellence is reflected in my
              continuous pursuit of knowledge and skill development.
            </p>
            <p>
              Working collaboratively is a cornerstone of my professional
              philosophy. I find immense value in team dynamics, as it not only
              enables continuous learning but also provides a platform for
              valuable feedback. I take great pride in delivering high-quality
              work and contributing meaningfully to collaborative endeavors.
            </p>
            {/* <button className="border-lavender-400 flex w-fit items-center gap-1 border px-2 py-1 text-neutral-200">
              <span> Read More </span>
              <FaArrowRightLong />
            </button> */}
          </div>
          <div className="grow basis-full lg:grow-0 lg:basis-2/5">
            <Image src={aboutMe} alt="aboutme-shape" />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-12 pb-10">
        <div className="flex items-center gap-2 text-xl lg:text-2xl">
          <span className=" text-lavender-400 font-bold">#</span>
          <span className="font-bold text-neutral-200">skills</span>
          <span className="border-lavender-400 w-56 border" />
        </div>
        <div className="flex flex-wrap gap-5">
          {skills.map((skill, i) => {
            return (
              <SkillCard
                key={i}
                heading={skill[0] as string}
                skills={skill[1] as string[]}
              />
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-12 pb-10">
        <div className="flex items-center gap-2 text-xl lg:text-2xl">
          <span className=" text-lavender-400 font-bold">#</span>
          <span className="font-bold text-neutral-200">my-fun-facts</span>
          <span className="border-lavender-400 w-56 border" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex basis-1/2 flex-wrap gap-4">
            {funFacts.map((funFact) => {
              return <Funfact key={funFact} funFact={funFact} />;
            })}
          </div>
          <div className="basis-1/3">
            <Image src={funFactShape} alt="fun-fact-shape" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Aboutpage;
