import Image from "next/image";
import dev from "../../public/portfolio-dev.svg";
import quote from "../../public/quote.svg";
import randomShape from "../../public/random-shapes.svg";
import aboutMe from "../../public/about-me.svg";
import email from "../../public/email.svg";
import { skills } from "./helper";
import { SkillCard } from "./_components/SkillCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

export default function HomePage() {
  return (
    <article className="flex w-full flex-col lg:mt-16 lg:px-24">
      <section className="flex w-full flex-wrap items-center justify-center gap-6 lg:gap-12">
        <div className="mt-8 px-4 lg:basis-1/2">
          <p className="text-left text-3xl font-semibold text-neutral-200">
            Discover the World of Code with Shounak: Your Passionate{" "}
            <span className=" text-lavender-400">FullStack Engineer</span>
          </p>
          <p className="mt-6 hyphens-auto text-sm text-neutral-500">
            With a commitment to turning visions into reality and a love for
            crafting elegant solutions, Shounak is ready to bring your ideas to
            life.
          </p>
        </div>
        <div className="flex flex-col">
          <Image src={dev} width={400} height={400} alt="dev" />
          <div className="flex items-center gap-2 border border-neutral-500 p-1">
            <div className="bg-lavender-400 h-3 w-3" />
            <p className="text-sm text-neutral-100">
              Currently working on a side project
            </p>
          </div>
        </div>
      </section>
      <aside className="absolute right-0 top-[600px] hidden h-24 w-20 border-b border-l border-t border-neutral-500 lg:block" />
      <aside className="absolute left-0 top-[1200px] hidden h-24 w-20 border-b border-r border-t border-neutral-500 lg:block" />
      <section className="mt-12 flex justify-center">
        <div className="relative flex basis-3/4 flex-col">
          <div className="absolute left-4 top-1 z-10">
            <Image src={quote} alt="quote" width={30} height={30} />
          </div>
          <div className="absolute left-80 top-[84px] z-10 lg:left-[660px]">
            <Image src={quote} alt="quote" width={30} height={30} />
          </div>
          <div className="min-h-20 w-fit translate-y-4 border border-neutral-500 p-4 text-sm text-neutral-200 lg:text-lg">
            <p>
              Code: the only drug you can overdose on and still be okay with it.
            </p>
          </div>
          <div className="translate-y-4 self-end border-b border-l border-r  border-neutral-500 p-4 text-xs text-neutral-200 lg:-translate-x-[133px] xl:-translate-x-[700px] 2xl:-translate-x-[392px]">
            <p className="">- Silicon Valley TV Series</p>
          </div>
        </div>
      </section>
      <section className="mt-12 flex flex-col gap-12 px-8 lg:px-20">
        <div className="flex items-center gap-2 text-xl lg:text-2xl">
          <span className=" text-lavender-400 font-bold">#</span>
          <span className="font-bold text-neutral-200">skills</span>
          <span className="border-lavender-400 w-56 border" />
        </div>
        <div className="flex items-center justify-center lg:justify-between">
          <div className="hidden basis-2/5 lg:flex">
            <Image src={randomShape} alt="random-shape" />
          </div>
          <div className="flex basis-1/2 flex-wrap gap-5">
            {skills.map((skill) => {
              return (
                <SkillCard
                  heading={skill[0] as string}
                  skills={skill[1] as string[]}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* TODO: Projects */}
      <section className="mt-12 flex flex-col gap-12 px-8 lg:px-20">
        <div className="flex items-center gap-2 text-xl lg:text-2xl">
          <span className=" text-lavender-400 font-bold">#</span>
          <span className="font-bold text-neutral-200">about-me</span>
          <span className="border-lavender-400 w-56 border" />
        </div>
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
            {/* <p>
              Situated in Panji, Goa, I thrive in a remote work environment,
              where I can meticulously plan and execute tasks to harness my full
              potential. My commitment to excellence is reflected in my
              continuous pursuit of knowledge and skill development.
            </p> */}
            <p>
              Working collaboratively is a cornerstone of my professional
              philosophy. I find immense value in team dynamics, as it not only
              enables continuous learning but also provides a platform for
              valuable feedback. I take great pride in delivering high-quality
              work and contributing meaningfully to collaborative endeavors.
            </p>
            <button className="border-lavender-400 flex w-fit items-center gap-1 border px-2 py-1 text-neutral-200">
              <span> Read More </span>
              <FaArrowRightLong />
            </button>
          </div>
          <div className="grow basis-full lg:grow-0 lg:basis-2/5">
            <Image src={aboutMe} alt="aboutme-shape" />
          </div>
        </div>
      </section>
      <section className="mb-14 mt-12 flex flex-col gap-12 px-8 lg:px-20">
        <div className="flex items-center gap-2 text-xl lg:text-2xl">
          <span className=" text-lavender-400 font-bold">#</span>
          <span className="font-bold text-neutral-200">contact-me</span>
          <span className="border-lavender-400 w-56 border" />
        </div>
        <div className="flex flex-wrap justify-between gap-12 text-sm text-neutral-400 lg:gap-0">
          <p className="grow basis-full lg:grow-0 lg:basis-1/2">
            I am currently available for immediate employment and actively
            seeking full-time full-stack roles. I am flexible with working from
            the office. If you have any questions or opportunities you'd like to
            discuss, please don't hesitate to reach out—I always keep my phone
            handy. 😄
          </p>
          <div className="flex grow basis-full flex-col items-baseline gap-2 border border-neutral-500 p-2 text-base lg:grow-0 lg:basis-1/3">
            <h3>Message me here</h3>
            <div className="flex items-center gap-1">
              <Image src={email} alt="email" />
              <span className="text-sm">chavanshounak24@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 px-2">
              <IoCall />
              <span>+91-7829482292</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
