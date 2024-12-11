import PropTypes from 'prop-types';

const ListItem = ({ itemName, className }) => {
  return <li className={className}>{itemName}</li>;
};

export default ListItem;

ListItem.propTypes = {
  className: PropTypes.string,
  itemName: PropTypes.array,
};
