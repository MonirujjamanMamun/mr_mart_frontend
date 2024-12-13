import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header/Header';
import HeaderBottom from './components/Header/HeaderBottom';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/Footer/FooterBottom';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default MainLayout;
