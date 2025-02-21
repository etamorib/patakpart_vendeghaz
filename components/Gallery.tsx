"use client";
import { GALLERY } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { prefix } from "@/constants/prefix";

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
        className={`overflow-hidden ml-3 mr-3 h-full w-full min-w-[300px] bg-cover bg-center bg-no-repeat rounded-r-5xl 2xl:rounded-5xl ${images[currentSlide].backgroundImage}`}
      >
        <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
          <div className="flexCenter gap-4">
            <div className="round-full">
              <Button
                type="button"
                title=""
                icon={`${prefix}/fullscreen.svg`}
                variant="btn_full_screen"
                functionality={openModal}
              />
            </div>
            {/*             <div className="flex flex-col gap-1 bg-black bg-opacity-60 m-4 p-4 rounded-2xl">
              <h4 className="bold-18 text-white">
                {images[currentSlide].title}
              </h4>
              <p className="regular-14 text-white">
                {images[currentSlide].subtitle}
              </p>
            </div> */}
          </div>
          {/*TODO: move it to component */}
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

const Gallery = () => {
  const gallery = GALLERY;

  return (
    <>
      <div className="mt-10 mb-10 px-6 w-full">
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
            src={`${prefix}/quote.svg`}
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
      <div className="padding-container max-container w-full pb-6">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">Galéria</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-50 xl:max-w-[390px]">
            Néhány kép a szállásról
          </h2>
        </div>
      </div>
      <section className="2xl:max-container relative flex flex-col pb-10 lg:mb-10 lg:pb-20 xl:mb-20">
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-center gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <GaleryImages images={gallery} />
        </div>
      </section>
    </>
  );
};

export default Gallery;
