import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Foglaljon most!
          </h2>
          <p className="regular-16 text-gray-10">
            Szállás foglalható március elejétől október végéig
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button type="button" title="aaaaaaa" variant="btn_white" full />
            <Button
              type="button"
              title="ssssss"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
