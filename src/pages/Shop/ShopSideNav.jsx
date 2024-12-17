import Brand from '../../components/ShopPage/SideBar/Brand';
import Category from '../../components/ShopPage/SideBar/Category';
import Color from '../../components/ShopPage/SideBar/Color';
import Price from '../../components/ShopPage/SideBar/Price';

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category />
      <Color icon={false} />
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
