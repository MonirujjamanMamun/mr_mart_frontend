import { useState, useEffect } from 'react';

const CustomCarousel = ({ images, autoPlay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous slide
  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  // Go to the next slide
  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  // Auto-play functionality
  //   useEffect(() => {
  //     let autoSlide;
  //     if (autoPlay) {
  //       autoSlide = setInterval(() => {
  //         goToNext();
  //       }, interval);
  //     }
  //     return () => clearInterval(autoSlide); // Cleanup interval
  //   }, [currentIndex, autoPlay, interval]);

  return (
    <div className="carousel-container relative w-full overflow-hidden">
      {/* Carousel Slides */}
      <div
        className="carousel-inner flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* {images.map((img, index) => (
          <div
            key={index}
            className="carousel-item min-w-full flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))} */}
        <div className="flex gap-5 items-center justify-center mx-auto">
          <div>
            <h1>1</h1>
            <h2>Left part</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore, quis.
            </p>
          </div>
          <div>
            <h2>Right part</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, delectus?
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center mx-auto">
          <div>
            <h1>2</h1>
            <h2>Left part</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore, quis.
            </p>
          </div>
          <div>
            <h2>Right part</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, delectus?
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center mx-auto">
          <div>
            <h1>3</h1>
            <h2>Left part</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore, quis.
            </p>
          </div>
          <div>
            <h2>Right part</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, delectus?
            </p>
          </div>
        </div>
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 opacity-75 hover:opacity-100"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 opacity-75 hover:opacity-100"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Dummy = () => {
  const images = [
    'https://via.placeholder.com/800x300?text=Slide+1',
    'https://via.placeholder.com/800x300?text=Slide+2',
    'https://via.placeholder.com/800x300?text=Slide+3',
  ];
  return (
    <div>
      <CustomCarousel images={images} autoPlay={true} interval={3000} />
    </div>
  );
};

export default Dummy;
