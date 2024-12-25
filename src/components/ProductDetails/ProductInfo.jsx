import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/feature/cart/cartSlice';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const ProductInfo = ({ _id, productName, des, img, badge, price, color }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productName}</h2>
      <p className="text-xl font-semibold">${price}</p>
      <p className="text-base text-gray-600">{des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {color}
      </p>
      <button
        onClick={() => {
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
          );
          toast.success('Product added to cart successfully!', {
            duration: 3000,
            position: 'top-right',
          });
        }}
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories :</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Tags :</span> Electronics,
        Gadgets, E-commerce, Online Store, Tech Products, Consumer Electronics
      </p>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> SKU : </span> N/A
      </p>
    </div>
  );
};

ProductInfo.propTypes = {
  _id: PropTypes.number,
  des: PropTypes.string,
  productName: PropTypes.string,
  badge: PropTypes.bool,
  img: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
};

export default ProductInfo;
