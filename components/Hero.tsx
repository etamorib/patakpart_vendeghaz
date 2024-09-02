import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row mt-10">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-40 lg:bold-60">
          Patakpart vendégház Mátraderecske
        </h1>
        <p className="regular-18 mt-6 text-green-90 xl:max-w-[520px]">
          A Mátra északi lábánál Mátraderecskén található vendégházunk. Egy
          kedves vidéki szállás , ahol a természet és a nyugalom biztosít
          kellemes napokat a hozzánk érkezőknek. Itt adott a jó és tiszta
          levegő, és a madárcsicsergés.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            <div className="flex flex-col w-full gap-3 sm:flex-row">
              <Button
                type="button"
                title="Bemutatkozás"
                variant="btn_white_text"
              />
              <Button
                type="button"
                title="Elhelyezkedés"
                icon="/map.svg"
                variant="btn_green"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween z-20">
              <p className="regular-16 text-gray-20">Gyorskereső</p>
            </div>
            <p className="bold-20 text-white">Válassza ki a dátumokat</p>
          </div>

          <div className="">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Érkezés</p>
              <input
                className="regular-18 text-black pl-4"
                type="date"
                id="arriveDate"
              ></input>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Távozás</p>
              <input
                className="regular-18 text-black pl-4"
                type="date"
                id="leaveDate"
              ></input>
            </div>
            <div className="flex flex-col mt-5 mb-1">
              <Button type="button" title="Keresés" variant="btn_white_text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
