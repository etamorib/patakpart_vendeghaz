import Image from "next/image";
import React from "react";

const Guide = () => {
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

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/mofetta.jpg"
          alt="mofetta"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

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
                <p className="bold-16 text-green-50">5 perc</p>
              </div>
              <p className="bold-20 mt-2">Mofetta</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Kezdőpont</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Patakpart Vendégház
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
