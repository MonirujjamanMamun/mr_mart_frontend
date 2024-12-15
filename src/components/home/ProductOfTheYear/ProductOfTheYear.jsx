import { Link } from 'react-router-dom';
import Buttons from '../../designLayouts/buttons/Buttons';
import Image from '../../designLayouts/Image';
import { productOfTheYear } from '../../../assets/allImg';

const ProductOfTheYear = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-80 mb-20 bg-gray-100 relative font-titleFont">
      <div className="w-full md:w-2/3 xl:w-1/2 p-3">
        <Image
          className="w-3/5 object-cover hidden md:inline-block"
          imgSrc={productOfTheYear}
        />
      </div>
      <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
        <h1 className="text-3xl font-semibold text-primeColor">
          Product of The year
        </h1>
        <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
          Discover our Product of the Year top-rated, high-quality, and
          customer-approved for delivering exceptional value and performance in{' '}
          {currentYear}!
        </p>
        <Link to="/shop">
          <Buttons title={'shop now'} />
        </Link>
      </div>
    </div>
  );
};

export default ProductOfTheYear;
