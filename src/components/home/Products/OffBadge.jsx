import PropTypes from 'prop-types';

const OffBadge = ({ text }) => {
  return (
    <div className="bg-primeColor w-[50px] h-[50px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer rounded-full">
      {text}
    </div>
  );
};

OffBadge.propTypes = {
  text: PropTypes.string,
};

export default OffBadge;
