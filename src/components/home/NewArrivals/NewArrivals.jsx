import Slider from 'react-slick';
import Heading from '../Products/Heading';
import NextArrow from './NextArrow';
import PreviousArrow from './PreviousArrow';
import Product from '../Products/Product';
import {
  newArrHeadphone,
  newArrSmartWatch,
  newArrLaptops,
  newArrTablets,
  newArrCamera,
} from '../../../assets/allImg';

const NewArrivals = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  const products = [
    {
      _id: '10001',
      img: newArrCamera,
      productName: 'Camera',
      price: '150.00',
      color: 'Gray',
      badge: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: '10002',
      img: newArrSmartWatch,
      productName: 'Smart Watch',
      price: '50.00',
      color: 'Black',
      badge: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: '10003',
      img: newArrHeadphone,
      productName: 'Head Phone',
      price: '150.00',
      color: 'White',
      badge: true,
      des: 'Our new HPB12 / A12 battery is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:',
    },
    {
      _id: '10004',
      img: newArrTablets,
      productName: 'Tablet',
      price: '210.00',
      color: 'Black',
      badge: true,
      des: 'Our new HPB12 / A12 battery is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:',
    },
    {
      _id: '10005',
      img: newArrLaptops,
      productName: 'Laptop',
      price: '225.00',
      color: 'Black',
      badge: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
  ];

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="px-2">
            <Product {...product} />
          </div>
        ))}
        {/* <Product
            _id="100001"
            img={newArrCamera}
            productName="Round Table Clock"
            price="44.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          /> */}
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default NewArrivals;
