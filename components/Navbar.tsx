"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [fill, setFill] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setFill(true);
    } else {
      setFill(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navFlex max-container pl-10 pr-10 fixed z-50 py-5 ${
        fill && "bg-white"
      }`}
    >
      <Link href="/">
        <Image
          src="/start.png"
          alt="logo"
          width={74}
          height={29}
          className="inline-block cursor-pointer"
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="font-bold flexCenter cursor-pointer pb-1.5 transition-all nav-item relative"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Foglalás"
          icon="/calendar.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
