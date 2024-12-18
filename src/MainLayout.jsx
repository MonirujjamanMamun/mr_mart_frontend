import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header/Header';
import HeaderBottom from './components/Header/HeaderBottom';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/Footer/FooterBottom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
      <Toaster />
    </div>
  );
};

export default MainLayout;
