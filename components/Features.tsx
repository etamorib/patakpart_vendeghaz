import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex flex-col lg:flex-row justify-between">
        {/* Left Side - Text Section */}
        <div className="z-20 w-full lg:w-[40%] flex flex-col items-start text-left mr-10">
          <h2 className="bold-40 lg:bold-64">Részletek a szállásról</h2>
          <p className="text-2xl text-justify regular-16 mt-5 bg-white/50 text-gray-30 lg:mt-[30px] lg:bg-none">
            <b>Mátraderecske</b> Budapesttől 125 km-re, a történelmi diákváros
            Egertől 30 km-re, Bükkszéktől 20 km-re, Heves megyében a Mátra
            északi lábánál található, közkedvelt kirándulóhely és
            gyógyfürdőhely. Szemet gyönyörködtető tájak, kanyargós dimbes-dombos
            utak, tiszta levegő, túraútvonalak, természeti kincsekben gazdag
            környék. Mátraderecskén található hazánk egyedülálló természeti
            gyógyhelye a ✅{" "}
            <b>MÁTRADERECSKEI SZÉNDIOXID GYÓGYGÁZFÜRDŐ a MOFETTA </b>
            amely 54 fajta betegséget gyógyít. A közelben túraútvonalak,
            látványosságokban gazdag kirándulási lehetőségek pl. siroki vár,
            markazi várrom, Kanázsvár romjai, Recski Nemzeti Emlékpark, Rákóczi
            fa, egri vár, Bükkszék, Kékestető, Parádfürdő, Egerszalók és Demjén
          </p>
          <ul className="mt-6 space-y-4 text-2xl text-justify regular-16  bg-white/50 text-gray-30 lg:mt-[30px] lg:bg-none">
            <li className="flex items-center gap-2">
              👨‍👩‍👧‍👦 <span>Tökéletes idő családdal vagy párban</span>
            </li>
            <li className="flex items-center gap-2">
              🌲 <span>Kristálytiszta levegő</span>
            </li>
            <li className="flex items-center gap-2">
              🍳 <span>Teljesen felszerelt konyha</span>
            </li>
            <li className="flex items-center gap-2">
              🛏 <span>Tágas hálószobák</span>
            </li>
            <li className="flex items-center gap-2">
              🚗 <span>Kényelmes parkolási lehetőség a zárt udvarban</span>
            </li>
            <li className="flex items-center gap-2">
              📚 <span>Könyvek és társasjátékok</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Feature List */}
        <div className="z-20 w-full lg:w-[60%] flex flex-col mt-10 lg:mt-0">
          <ul className="grid gap-10 md:grid-cols-2 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50 border-black">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/50 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
