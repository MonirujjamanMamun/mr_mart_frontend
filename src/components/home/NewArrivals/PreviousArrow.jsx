import PropTypes from 'prop-types';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const PreviousArrow = ({ onClick }) => {
  return (
    <div
      className="hidden md:flex w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer justify-center items-center absolute z-10 top-[35%] left-2"
      onClick={onClick}
    >
      <span>
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

PreviousArrow.propTypes = {
  onClick: PropTypes.func,
};

export default PreviousArrow;
