import { useEffect, useState } from 'react';
import {
  blackHeadphone,
  bluePhone,
  laptop,
  mobile,
  washingmechin,
} from '../../../assets/allImg';
import Buttons from '../../designLayouts/buttons/Buttons';
import { Link } from 'react-router-dom';

const data = [
  {
    img: bluePhone,
    title: 'Weekend sale, Save 50% OFF on shop & Gadget.',
    des: 'Exclusive limited-time offer: Save up to 50%! Don’t miss this deal—shop now and grab incredible discounts before it’s gone!',
  },
  {
    img: blackHeadphone,
    title: 'Headphone and smart Gadgets & Save more money.',
    des: 'Exclusive limited-time offer: Save up to 50%! Don’t miss this deal—shop now and grab incredible discounts before it’s gone!',
  },
  {
    img: laptop,
    title: 'Up to 50% OFF Limited Time Deal Grab Today.',
    des: 'Exclusive limited-time offer. Save up to 50%! Don’t miss this deal—shop now and grab incredible discounts before it’s gone!',
  },
  {
    img: mobile,
    title: 'Up to 50% OFF Limited Time Deal Grab Today.',
    des: 'Exclusive limited-time offer: Save up to 50%! Don’t miss this deal—shop now and grab incredible discounts before it’s gone!',
  },
  {
    img: washingmechin,
    title: 'Up to 50% OFF Limited Time Deal Grab Today.',
    des: 'Exclusive limited-time offer: Save up to 50%! Don’t miss this deal—shop now and grab incredible discounts before it’s gone!',
  },
];

const HeroBanner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === data.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div className="flex flex-row-reverse justify-between">
      <div className="h-72 w-full transform overflow-hidden rounded-lg before:bg-black/50 sm:h-96 md:h-[540px] lg:gap-10">
        {data.map((slide, index) => {
          const { img, title, des } = slide;
          return (
            <div
              className={`${
                index === currentSlider
                  ? 'visible opacity-100'
                  : 'invisible opacity-0'
              } absolute inset-0 duration-500 ease-linear`}
              key={`index_${index}`}
            >
              <img
                src={img}
                width="1200"
                height="600"
                alt={title}
                className={`h-full w-full object-cover duration-500 ease-linear ${
                  index === currentSlider ? 'scale-100' : 'scale-105'
                }`}
              />
              <div className="absolute inset-0 flex flex-col bg-black/40 p-5 text-center text-white drop-shadow-lg">
                <div className="mb-0 mt-auto rounded-md bg-white/40 p-3 backdrop-blur-3xl">
                  <div className="mb-3 overflow-hidden text-xl font-semibold lg:text-3xl">
                    <h1
                      className={`${
                        index === currentSlider ? '' : 'translate-y-12'
                      } duration-500 ease-linear`}
                    >
                      {title}
                    </h1>
                  </div>
                  <div className="overflow-hidden text-sm md:text-base lg:text-lg">
                    <p
                      className={`${
                        index === currentSlider ? '' : '-translate-y-12'
                      } duration-500 ease-linear`}
                    >
                      {des}
                    </p>
                  </div>
                  <div className="overflow-hidden text-sm md:text-base lg:text-lg mt-3">
                    <p
                      className={`${
                        index === currentSlider ? '' : '-translate-y-12'
                      } duration-500 ease-linear`}
                    >
                      <Link to="/shop">
                        <Buttons title={'Shop now'} />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* slider container */}
      {/* <div className="flex flex-col items-center justify-center gap-3 p-2">
        {data.map((slide, index) => {
          const { img, title } = slide;
          return (
            <img
              key={index}
              src={img}
              width={1200}
              height={600}
              className={`h-6 w-10 bg-black/20 sm:h-8 md:h-12 md:w-20 ${
                currentSlider === index
                  ? 'opacity-100 ring ring-sky-500'
                  : 'opacity-60'
              } box-content cursor-pointer rounded-md md:rounded-lg`}
              alt={title}
              onClick={() => setCurrentSlider(index)}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default HeroBanner;
