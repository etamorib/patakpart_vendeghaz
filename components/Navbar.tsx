"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import { prefix } from "@/constants/prefix";

const Navbar = () => {
  const [fill, setFill] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
      className={`navFlex max-container pl-10 pr-10 fixed z-50 py-5 flex items-center bg_modern_dark ${
        fill && "bg_modern_dark"
      }`}
    >
      {/* Logo (Aligned Left) */}
      <Link href="/">
        <Image
          src={`${prefix}/logo.svg`}
          alt="logo"
          width={90}
          height={12}
          className="cursor-pointer"
        />
      </Link>

      {/* Navigation Links (Centered) */}
      <ul className="hidden gap-12 lg:flex ml-auto mr-auto">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`font-bold cursor-pointer pb-1.5 transition-all nav-item-dark relative ${
              fill && "nav-item-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Icon (Keeps Right Alignment) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden ml-auto"
      >
        <Image
          src={`${prefix}/menu.svg`}
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </button>
      {/* Mobile Menu (Slide-in from Right) */}
      <div
        className={`fixed top-0 right-0 min-h-screen w-4/6 h-full bg_modern_dark shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6"
        >
          <Image
            src={`${prefix}/close.svg`}
            alt="close"
            width={32}
            height={32}
          />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col gap-5 p-10">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`font-bold cursor-pointer pb-1.5 transition-all nav-item-white w-max`}
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
