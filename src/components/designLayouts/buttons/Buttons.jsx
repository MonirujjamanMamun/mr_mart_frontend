import PropTypes from 'prop-types';

const Buttons = ({ title }) => {
  return (
    <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
      {title}
    </button>
  );
};

export default Buttons;

Buttons.propTypes = {
  title: PropTypes.string,
};
