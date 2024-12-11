import PropTypes from 'prop-types';

const Flex = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Flex;

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
