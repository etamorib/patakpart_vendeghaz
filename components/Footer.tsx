import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter pb-5 pt-3 bg_modern_dark text-white">
      <div className="padding-container max-container flex w-full flex-col gap-8">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-between ">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-1 text-white">
                  {columns.links.map((link) => (
                    <Link href={link.map} key={link.address} target="_blank">
                      {link.address}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <div className="flex gap-1 md:flex-col sm:flex-col lg:flex-row">
                    <p className="">
                      {link.label}: {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-20">
                  {SOCIALS.links.map((link) => (
                    <Link href={link.url} key={link.image} target="_blank">
                      <Image
                        src={link.image}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-white" />
        <p className="regular-14 w-full text-center text-gray-400">
          2024 Patakparti vendégház Mátraderecske | Minden jog fenntartva
        </p>
        <p className="regular-14 w-full text-center text-gray-400">
          NTAK azonosító - MA23076543
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
