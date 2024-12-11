import PropTypes from 'prop-types';

const Image = ({ imgSrc, className }) => {
  return <img className={className} src={imgSrc} alt={imgSrc} />;
};

export default Image;

Image.propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string,
};
