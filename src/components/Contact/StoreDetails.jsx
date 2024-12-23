import PropTypes from 'prop-types';
import { FaLocationDot } from 'react-icons/fa6';

const StoreDetails = ({ title, description, className }) => {
  return (
    <div className={`${className}`}>
      <FaLocationDot className="text-2xl text-gray-600" />
      <div>
        <h2 className="text-3xl text-gray-600 font-bold my-3">{title}</h2>
        <p className="text-lg text-gray-500">{description}</p>
      </div>
      <div className="my-5">
        <p className="text-gray-500 text-lg">contact@storeone.com</p>
        <p className="text-gray-500 text-lg">+61 937 82330</p>
      </div>
    </div>
  );
};

StoreDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default StoreDetails;
