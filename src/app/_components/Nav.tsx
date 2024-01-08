"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import mainLogo from "../../../public/main-logo.svg";
import hamburger from "../../../public/hamburger.svg";
import cross from "../../../public/cross.svg";
import github from "../../../public/Github.svg";
import linkedin from "../../../public/Linkedin.svg";
import twitter from "../../../public/twitter.png";
import { usePathname } from "next/navigation";
import { HamburgerMenuItems } from "./HamburgerMenuItems";

export const Nav = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname: string = usePathname();
  return (
    <main
      className=" h-full 
  "
    >
      <div className="absolute left-10 hidden flex-col lg:flex">
        <div className="absolute h-36 border-[0.5px] border-neutral-400"></div>
        <div className=" flex -translate-x-3 translate-y-40 flex-col items-center gap-3">
          <Link href="">
            <Image src={github} height={25} width={25} alt="github" />
          </Link>
          <Link href="">
            <Image src={linkedin} height={25} width={25} alt="linkedin" />
          </Link>
          <Link href="">
            <Image src={twitter} width={20} height={20} alt="twitter" />
          </Link>
        </div>
      </div>
      <header className=" w-full">
        <nav className="flex items-center justify-between px-4 py-4 lg:pl-32 lg:pr-24">
          <Link href="/" className="flex items-center gap-3">
            <Image src={mainLogo} alt="app-logo" width={30} height={30} />
            <h3 className="text-base font-semibold text-neutral-100">
              Shounak
            </h3>
          </Link>
          <div className="lg:hidden">
            <Image
              src={hamburger}
              alt="menu-hamburger"
              className={`${isMenuOpen ? "hidden" : "block"}`}
              onClick={() => setIsMenuOpen(true)}
            />
            <Image
              src={cross}
              alt="menu-cross"
              className={`${isMenuOpen ? "block" : "hidden"}`}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <ul className="hidden items-center gap-4 lg:flex">
            <Link
              href="/"
              className="flex items-center gap-1 text-base font-semibold"
            >
              <span className="text-lavender-400">#</span>
              <span
                className={`${
                  pathname === "/" ? "text-neutral-100" : "text-neutral-400"
                } `}
              >
                home
              </span>
            </Link>
            <Link
              href="/works"
              className="flex items-center gap-1 text-base font-semibold"
            >
              <span className="text-lavender-400">#</span>
              <span
                className={`${
                  pathname === "/works"
                    ? "text-neutral-100"
                    : "text-neutral-400"
                } `}
              >
                works
              </span>
            </Link>
            <Link
              href="/about-me"
              className="flex items-center gap-1 text-base font-semibold"
            >
              <span className="text-lavender-400">#</span>
              <span
                className={`${
                  pathname === "/about-me"
                    ? "text-neutral-100"
                    : "text-neutral-400"
                } `}
              >
                about-me
              </span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-1 text-base font-semibold"
            >
              <span className="text-lavender-400">#</span>
              <span
                className={`${
                  pathname === "/contact"
                    ? "text-neutral-100"
                    : "text-neutral-400"
                } `}
              >
                contact
              </span>
            </Link>
          </ul>
        </nav>
      </header>
      {isMenuOpen ? (
        <HamburgerMenuItems pathname={pathname} setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <div>{children}</div>
      )}
    </main>
  );
};
