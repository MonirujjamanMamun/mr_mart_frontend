import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import HeaderBottom from './components/Header/HeaderBottom';
import Footer from './components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
