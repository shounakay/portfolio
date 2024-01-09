import React from "react";
import github from "../../../public/Github.svg";
import linkedin from "../../../public/Linkedin.svg";
import twitter from "../../../public/twitter.png";
import Link from "next/link";
import Image from "next/image";

export const SocialLinks = ({
  gap = "gap-8",
  alignment = "flex-row",
}: {
  gap?: string;
  alignment?: string;
}) => {
  return (
    <section className={`flex ${alignment} items-center justify-center ${gap}`}>
      <Link target="_blank" href="https://github.com/shounakay">
        <Image src={github} alt="github" />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/shounak-chavan/">
        <Image src={linkedin} alt="linkedin" />
      </Link>
      <Link target="_blank" href="">
        <Image src={twitter} width={25} height={25} alt="twitter" />
      </Link>
    </section>
  );
};
