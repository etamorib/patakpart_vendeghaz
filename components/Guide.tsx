"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GUIDES } from "@/constants";

interface GuideProps {
  name: string;
  distance: string;
  backgroundImage: string;
  description: string;
}

interface GuideSlideProps {
  guides: GuideProps[];
}

const GuideSlide = ({ guides }: GuideSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === guides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const previous = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? guides.length - 1 : prevSlide - 1
    );
  };
  return (
    <>
      <div
        className={`flex flex-col items-start justify-between max-container relative w-full bg-cover bg-center bg-no-repeat min-h-[550px] min-w-[300px] p-6 lg:px-20 lg:py-10"  ${guides[currentSlide].backgroundImage}`}
      >
        {/* <Image
          src="/mofetta.jpg"
          alt="mofetta"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        /> */}

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col z-20">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full z-20">
                <p className="regular-16 text-gray-20">Célállomás</p>
                <p className="bold-16 text-green-50">
                  {guides[currentSlide].distance}
                </p>
              </div>
              <p className="bold-20 mt-2">{guides[currentSlide].name}</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Kezdőpont</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Patakpart Vendégház
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between w-full">
          {/* Previous Button */}
          <button
            className="btn_prev_next text-white px-4 py-2 rounded-full"
            onClick={previous}
          >
            &#10094;
          </button>

          {/* Next Button */}
          <button
            className="btn_prev_next text-white px-4 py-2 rounded-full"
            onClick={next}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

const Guide = () => {
  const props = GUIDES;
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Szabadidő, kikapcsolódás
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-50 xl:max-w-[390px]">
            Túra lehetőségek és látványosságok a közelben
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            A Mátra szívében elhelyezkedő vendégáz kiváló lehetőséget kínál a
            kikapcsolódásra és túrázásokra. A közelben Magyarország számos
            természeti látványoságga elérhető, továbbá vendégházunkhoz nagyon
            közel van a Mofetta (200 méter) , széndioxid gyógygázfürdő ezért aki
            gyógyulni jön, annak is a legjobb lehetőség minket választani!
          </p>
        </div>
      </div>

      <GuideSlide guides={props} />
    </section>
  );
};

export default Guide;
