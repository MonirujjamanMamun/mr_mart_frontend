import PropTypes from 'prop-types';

const List = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

export default List;

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
