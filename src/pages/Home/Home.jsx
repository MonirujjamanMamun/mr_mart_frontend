import HeroBottom from '../../components/home/hero/HeroBottom';
import NewArrivals from '../../components/home/NewArrivals/NewArrivals';
import ProductOfTheYear from '../../components/home/ProductOfTheYear/ProductOfTheYear';
import SaleFeature from '../../components/home/SaleFeature/SaleFeature';

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <HeroBottom />
      <div className="max-w-container mx-auto px-4">
        <SaleFeature />
        <NewArrivals />
        <ProductOfTheYear />
      </div>
    </div>
  );
};

export default Home;
