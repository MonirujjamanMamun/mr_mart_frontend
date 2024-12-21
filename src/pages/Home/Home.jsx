import BestSaleProduct from '../../components/home/BestSaleProduct/BestSaleProduct';
// import HeroBanner from '../../components/home/hero/HeroBanner';
import HeroBottom from '../../components/home/hero/HeroBottom';
import NewArrivals from '../../components/home/NewArrivals/NewArrivals';
import ProductOfTheYear from '../../components/home/ProductOfTheYear/ProductOfTheYear';
import SaleFeature from '../../components/home/SaleFeature/SaleFeature';
import SpecialOffer from '../../components/home/SpecialOffer/SpecialOffer';

const Home = () => {
  return (
    <div className="w-full mx-auto">
      {/* <HeroBanner /> */}
      <HeroBottom />
      <div className="max-w-container mx-auto px-4">
        <SaleFeature />
        <NewArrivals />
        <ProductOfTheYear />
        <BestSaleProduct />
        <SpecialOffer />
      </div>
    </div>
  );
};

export default Home;
