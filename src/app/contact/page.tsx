import Image from "next/image";
import React from "react";
import email from "../../../public/email.svg";
import { IoCall } from "react-icons/io5";
import { SocialLinks } from "../_components/SocialLinks";
import funFactShape from "../../../public/fun-fact-shape.svg";

const ContactPage = () => {
  return (
    <article className="mt-12 flex h-full w-full flex-col px-8 lg:mt-16 lg:px-24">
      <div className="mb-14 flex flex-col gap-6">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <span className=" text-lavender-400">/</span>
          <span className="text-neutral-100">contact</span>
        </div>
        <p className="text-base text-neutral-400">
          Ready to Ignite Ideas? Let’s Talk – Your Message Awaits!
        </p>
      </div>
      <div className="mt-12 flex items-center justify-between pb-10">
        <p className="grow basis-full text-neutral-400 lg:grow-0 lg:basis-1/2">
          I am currently available for immediate employment and actively seeking
          full-time full-stack roles. I am flexible with working from the
          office. If you have any questions or opportunities you'd like to
          discuss, please don't hesitate to reach out—I always keep my phone
          handy.😄
        </p>
        <div className="flex grow basis-full flex-col items-baseline gap-2 border border-neutral-500 p-2 text-base text-neutral-400 lg:grow-0 lg:basis-1/3">
          <h3>Message me here</h3>
          <div className="flex items-center gap-1 ">
            <Image src={email} alt="email" />
            <span className="text-sm">chavanshounak24@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 px-2">
            <IoCall />
            <span>+91-7829482292</span>
          </div>
        </div>
      </div>
      <section className="mb-14 mt-12 flex flex-col gap-12">
        <div className="flex items-center gap-2 text-xl lg:text-2xl">
          <span className=" text-lavender-400 font-bold">#</span>
          <span className="font-bold text-neutral-200">all-media</span>
          <span className="border-lavender-400 w-56 border" />
        </div>
        <div className="flex w-full  items-center justify-between ">
          <div className="basis-1/5">
            <SocialLinks gap="gap-8" alignment="flex-col" />
          </div>
          <div>
            <Image src={funFactShape} alt="hey" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default ContactPage;
