import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { SocialLinks } from "./SocialLinks";

export const HamburgerMenuItems = ({
  pathname,
  setIsMenuOpen,
}: {
  pathname: string;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex min-h-full flex-col justify-around">
      <div className="flex min-h-full flex-col gap-16 px-10 py-16">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 text-[35px] font-bold"
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
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 text-[35px] font-bold"
        >
          <span className="text-lavender-400">#</span>
          <span
            className={`${
              pathname === "/works" ? "text-neutral-100" : "text-neutral-400"
            } `}
          >
            works
          </span>
        </Link>
        <Link
          href="/about-me"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 text-[35px] font-bold"
        >
          <span className="text-lavender-400">#</span>
          <span
            className={`${
              pathname === "/about-me" ? "text-neutral-100" : "text-neutral-400"
            } `}
          >
            about-me
          </span>
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 text-[35px] font-bold"
        >
          <span className="text-lavender-400">#</span>
          <span
            className={`${
              pathname === "/contact" ? "text-neutral-100" : "text-neutral-400"
            } `}
          >
            contact
          </span>
        </Link>
      </div>
      <SocialLinks />
    </div>
  );
};
