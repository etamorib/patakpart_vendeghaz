"use client";
import { GALERY, PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

interface ImageProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

interface ImageSliderProps {
  images: ImageProps[];
}
const GaleryImages = ({ images }: ImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const next = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const previous = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };
  return (
    <>
      <div
        className={`h-full w-2/3 max-w-[1100px] min-w-[300px] bg-cover bg-center bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ${images[currentSlide].backgroundImage}`}
      >
        <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
          <div className="flexCenter gap-4">
            <div className="round-full">
              <Button
                type="button"
                title=""
                icon="/fullscreen.svg"
                variant="btn_full_screen"
                functionality={openModal}
              />
            </div>
            <div className="flex flex-col gap-1 bg-black bg-opacity-60 m-4 p-4 rounded-2xl">
              <h4 className="bold-18 text-white">
                {images[currentSlide].title}
              </h4>
              <p className="regular-14 text-white">
                {images[currentSlide].subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
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
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        currentImage={images[currentSlide]}
        onPrevious={previous}
        onNext={next}
      />
    </>
  );
};

const Galery = () => {
  const galery = GALERY;

  return (
    <section className="2xl:max-container relative flex flex-col pb-10 lg:mb-10 lg:pb-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-center gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <GaleryImages images={galery} />
      </div>

      <div className="mt-10 px-6 w-full">
        <div className="relative w-full overflow-hidden rounded-3xl bg-green-50 p-8 xl:rounded-5xl xl:px-16 xl:py-20">
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
          <div
            className="hidden lg:flex lg:absolute lg:top-4 lg:right-4"
            onClick={() => console.log("asdasd")}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Galery;
