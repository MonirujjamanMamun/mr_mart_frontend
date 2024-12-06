import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout';
import ErrorPage from '../ErrorPage';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
