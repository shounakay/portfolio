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
      <Link href="">
        <Image src={github} alt="github" />
      </Link>
      <Link href="">
        <Image src={linkedin} alt="linkedin" />
      </Link>
      <Link href="">
        <Image src={twitter} width={25} height={25} alt="twitter" />
      </Link>
    </section>
  );
};
