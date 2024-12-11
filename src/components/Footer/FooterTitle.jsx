import PropTypes from 'prop-types';

const FooterTitle = ({ title }) => {
  return <h3 className="text-xl font-bodyFont font-semibold mb-6">{title}</h3>;
};

export default FooterTitle;

FooterTitle.propTypes = {
  title: PropTypes.string,
};
