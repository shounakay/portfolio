import Image from "next/image";
import React from "react";
import mainLogo from "../../../public/main-logo.svg";
import { SocialLinks } from "./SocialLinks";
import { MdCopyright } from "react-icons/md";

export const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className="w-full border border-neutral-400" />
      <footer className="flex w-full flex-col justify-between px-5 py-5 lg:px-24">
        <div className="flex w-full items-center justify-between">
          <div className="flex basis-[35%] items-center gap-3">
            <Image src={mainLogo} alt="main-logo" width={20} height={20} />
            <h3 className="text-sm font-semibold text-neutral-200">
              Shounak Chavan
            </h3>
            <h2 className="hidden text-sm text-neutral-400 lg:block">
              chavanshounak24@gmail.com
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="hidden text-sm font-medium text-neutral-100 lg:block">
              Media
            </h4>
            <SocialLinks gap="gap-2" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-400">
          <MdCopyright />
          <span>Copyright 2024.</span>
          <span>Made by Shounak</span>
        </div>
      </footer>
    </>
  );
};
