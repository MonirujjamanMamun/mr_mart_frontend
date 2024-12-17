import PropTypes from 'prop-types';
import { BiCaretDown } from 'react-icons/bi';

const Title = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-between pb-5">
      {icon ? (
        <>
          <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
          {icon && <BiCaretDown />}
        </>
      ) : (
        <>
          <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
        </>
      )}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.bool,
};

export default Title;
