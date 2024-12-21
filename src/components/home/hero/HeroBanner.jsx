// import { useState } from 'react';
import Slider from 'react-slick';
// import settings from '../../../utils/sliderSetting/sliderSetting';

const HeroBanner = () => {
  //   const [dotActive, setDocActive] = useState(0);
  const settings = {
    arrows: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        <div className="flex flex-col md:flex-row lg:flex-row gap-5">
          <div>
            <h1>1</h1>
            <h2>Hero left</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
              ad.
            </p>
          </div>
          <div>
            <h2>Hero Right</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, voluptatibus?
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1>2</h1>
            <h2>Hero left</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
              ad.
            </p>
          </div>
          <div>
            <h2>Hero Right</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, voluptatibus?
            </p>
          </div>
        </div>
        <div>
          <h1>3</h1>
          <div>
            <h2>Hero left</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
              ad.
            </p>
          </div>
          <div>
            <h2>Hero Right</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, voluptatibus?
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroBanner;
