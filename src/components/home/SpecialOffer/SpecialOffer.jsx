import Slider from 'react-slick';
import Heading from '../Products/Heading';
import settings from '../../../utils/sliderSetting/sliderSetting';
import Product from '../Products/Product';
import {
  bestSalePrinter,
  speOffBlueIphone,
  spfSpeaker,
  speOffLaptops,
  speOffTablet,
} from '../../../assets/allImg';

const SpecialOffer = () => {
  const specialOfferProducts = [
    {
      _id: 1201,
      img: speOffBlueIphone,
      productName: 'Iphone',
      price: '250.00',
      color: 'Blue',
      badge: false,
      off: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: 1202,
      img: bestSalePrinter,
      productName: 'Printer',
      price: '200.00',
      color: 'White',
      badge: false,
      off: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: 1203,
      img: spfSpeaker,
      productName: 'Head Phone',
      price: '50.00',
      color: 'Red',
      badge: false,
      off: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: 1204,
      img: speOffLaptops,
      productName: 'Tablet',
      price: '250.00',
      color: 'Black',
      badge: false,
      off: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: 1205,
      img: speOffTablet,
      productName: 'Smart Watch',
      price: '150.00',
      color: 'Blue & White',
      badge: false,
      off: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
  ];

  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offer" />
      <Slider {...settings}>
        {specialOfferProducts?.map((product) => (
          <div key={product._id} className="px-2">
            <Product {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialOffer;
