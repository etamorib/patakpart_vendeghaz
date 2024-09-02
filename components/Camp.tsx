"use client";
import { GALERY, PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined?: string;
}

interface ImageSliderProps {
  images: CampProps[];
}
const CampSite = ({ images }: ImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(1);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= images.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return images.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ${image.backgroundImage}`}
        >
          <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
            <div className="flexCenter gap-4">
              <div className="round-full">
                <Button
                  type="button"
                  title=""
                  icon="/fullscreen.svg"
                  variant="btn_full_screen"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="bold-18 text-white">{image.title}</h4>
                <p className="regular-14 text-white">{image.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Camp = () => {
  const galery = GALERY;

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite images={galery} />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className="regular-24 md:regular-32 2xl:regular-50 capitalize text-white">
            <strong> Családok, párok, barátok</strong> számára ideális környezet
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            A házat jellemzi az egyszerűség, a letisztultság, a valódiság. Egy
            kedves ház, tele szeretettel, ami távol a városi rohanástól, kicsit
            segít megpihenni, feltöltődni, kikapcsolódni.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
          <div className="hidden lg:flex lg:absolute lg:top-4 lg:right-4">
            <Button
              type="button"
              title=""
              icon="/close.svg"
              variant="btn_transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camp;
