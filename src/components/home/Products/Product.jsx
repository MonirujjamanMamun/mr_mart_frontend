import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Image from '../../designLayouts/Image';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';
import { BsSuitHeartFill } from 'react-icons/bs';
import Badge from './Badge';
import { GiReturnArrow } from 'react-icons/gi';
import PropTypes from 'prop-types';
import { addToCart } from '../../../redux/feature/cart/cartSlice';

const Product = ({ _id, productName, badge, img, price, color }) => {
  const dispatch = useDispatch();
  const idString = (_id) => {
    return String(_id).toLowerCase().split(' ').join('');
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: { _id, productName, badge, img, price, color },
      },
    });
  };
  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <Image className="w-full h-full" imgSrc={img} />
        </div>
        <div className="absolute top-6 left-8">
          {badge && <Badge text="New" />}
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li>
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: _id,
                    name: productName,
                    quantity: 1,
                    image: img,
                    badge: badge,
                    price: price,
                    colors: color,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">{productName}</h2>
          <p className="text-[#767676] text-[14px]">${price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{color}</p>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  props: PropTypes.any,
};

export default Product;
