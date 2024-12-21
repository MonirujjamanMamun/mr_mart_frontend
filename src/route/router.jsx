import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainLayout from '../MainLayout';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import SignUp from '../pages/Account/SignUp/SignUp';
import SignIn from '../pages/Account/SignIn/SignIn';
import Offer from '../pages/Offer/Offer';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Cart from '../pages/Cart/Cart';
import Payment from '../pages/Payment/Payment';
import ErrorPage from '../ErrorPage';
import PrivetRoute from '../components/designLayouts/PrivetRoute';

const routers = createRoutesFromElements(
  <Route>
    <Route path="/" element={<MainLayout />}>
      {/* ==================== Header Navlink Start here =================== */}
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* ==================== Header Navlink End here ===================== */}
      <Route path="/offer" element={<Offer />} />
      <Route path="/product/:_id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />

      <Route
        path="/payment"
        element={
          <PrivetRoute>
            <Payment />
          </PrivetRoute>
        }
      />
    </Route>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

const router = createBrowserRouter(routers);

export default router;
