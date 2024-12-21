import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types';

const PrivetRoute = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { email, isLoading } = useSelector((state) => state.userSlice);
  console.log(email);
  console.log(isLoading);
  //   if (isLoading) {
  //     return <Loading />;
  //   }

  if (!isLoading && !email) {
    return <Navigate to={'/signin'} state={{ path: pathname }} />;
  }
  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
