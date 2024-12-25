import Slider from 'react-slick';
import {
  bestSaleBlueIphone,
  bestSalePrinter,
  bestSaleSmartWatch,
  bestSaleSpeaker,
  bestSaleTablet,
} from '../../../assets/allImg';
import Heading from '../Products/Heading';
import Product from '../Products/Product';
import settings from '../../../utils/sliderSetting/sliderSetting';

const BestSaleProduct = () => {
  const bestSaleProducts = [
    {
      _id: 1101,
      img: bestSaleBlueIphone,
      productName: 'Iphone',
      price: '250.00',
      color: 'Blue',
      badge: false,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: 1102,
      img: bestSalePrinter,
      productName: 'Printer',
      price: '200.00',
      color: 'White',
      badge: false,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: 1103,
      img: bestSaleSpeaker,
      productName: 'Speaker',
      price: '50.00',
      color: 'White & Gray',
      badge: false,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: 1104,
      img: bestSaleTablet,
      productName: 'Tablet',
      price: '250.00',
      color: 'Black',
      badge: false,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: 1105,
      img: bestSaleSmartWatch,
      productName: 'Smart Watch',
      price: '150.00',
      color: 'Blue & White',
      badge: false,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
  ];

  return (
    <div className="w-full pb-20">
      <Heading heading="Our Best Sale Products" />
      <Slider {...settings}>
        {bestSaleProducts?.map((product) => (
          <div key={product._id} className="px-2">
            <Product {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSaleProduct;
