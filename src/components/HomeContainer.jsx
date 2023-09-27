import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';

import { heroData } from '../utils/data';

const HomeContainer = () => {
  return (
    <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2" id="home">
      <div className="flex flex-1 flex-col items-start justify-center gap-6 py-2">
        <div className="flex items-center justify-center gap-2 rounded-full bg-orange-100 px-4 py-1">
          <p className="text-base font-semibold text-orange-500">
            Bike Delivery
          </p>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-white drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]">
          The Fastest Delivery in
          <span className="text-[3rem] text-orange-600 lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-center text-base text-textColor md:w-[80%] md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget quam
          ligula. Sed magna diam, scelerisque nec orci at, consectetur ultrices
          est. Sed non tincidunt nulla, eu molestie ligula.
        </p>
        <button className="w-full rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 transition-all duration-100 ease-in-out hover:shadow-lg md:w-auto">
          Order Now
        </button>
      </div>
      <div className="relative flex flex-1 items-center py-2">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto h-420 w-full lg:h-650 lg:w-auto"
        />

        <div className="absolute left-0 top-0 flex h-full w-full flex-wrap items-center justify-center gap-4 overflow-auto py-4 xl:px-20">
          {heroData &&
            heroData.map((hero) => (
              <div
                key={hero.id}
                className="flex flex-col items-center justify-center rounded-3xl bg-cardOverlay p-4 drop-shadow-lg backdrop-blur-md lg:w-190"
              >
                <img
                  src={hero.imageSrc}
                  alt="I1"
                  className="-mt-10 w-20 lg:-mt-20 lg:w-40"
                />
                <p className="mt-2 text-base font-semibold text-textColor lg:mt-4 lg:text-xl">
                  {hero.name}
                </p>
                <p className="my-1 text-[12px] font-semibold text-lighttextGray lg:my-3 lg:text-sm">
                  {hero.desp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {hero.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
