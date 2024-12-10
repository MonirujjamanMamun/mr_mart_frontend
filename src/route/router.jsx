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

const routers = createRoutesFromElements(
  <Route>
    <Route path="/" element={<MainLayout />}>
      {/* ==================== Header Navlink Start here =================== */}
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      {/* ==================== Header Navlink End here ===================== */}
      <Route path="/offer" element={<Offer />}></Route>
      <Route path="/product/:_id" element={<ProductDetail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Route>
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/signin" element={<SignIn />}></Route>
    <Route path="*" element={<ErrorPage />}></Route>
  </Route>
);

const router = createBrowserRouter(routers);

export default router;
