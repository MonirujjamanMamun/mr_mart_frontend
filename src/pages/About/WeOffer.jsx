import { CiDeliveryTruck } from 'react-icons/ci';
import { BiSupport } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';

const WeOffer = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="w-full md:w-1/4 lg:w-1/4 p-3 my-20">
            <h2 className="text-left text-xl md:text-3xl lg:text-3xl my-3 text-gray-600">
              What can we do for you ?
            </h2>
            <p className="text-left text-gray-500">
              Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
              tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
              nisi faucibus magna, vitae ultrices lacus purus vitae metus.
            </p>
          </div>
          <div className="w-3/4 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 my-20 sm:mx-auto">
            <div className="text-center py-11 px-3 bg-white rounded-lg">
              <div className="flex justify-center items-center bg-gray-300 w-2/4 mx-auto rounded-lg -mt-16">
                <CiDeliveryTruck className="text-7xl text-gray-700" />
              </div>
              <h2 className="text-2xl my-3 text-gray-600 font-bold">
                Fast Delivery
              </h2>
              <p className="text-gray-500">
                Sed in mi rutrum, mattis eros ut, sagittis orci. Suspendisse
                vehicula auctor leo, nec egestas tellus fringilla ac integer.
              </p>
            </div>
            <div className="text-center py-11 px-3 bg-white rounded-lg">
              <div className="flex justify-center items-center bg-gray-300 w-2/4 mx-auto rounded-lg -mt-16">
                <BiSupport className="text-7xl text-gray-700" />
              </div>
              <h2 className="text-2xl my-3 text-gray-600 font-bold">
                Support 24/7
              </h2>
              <p className="text-gray-500">
                Sed in mi rutrum, mattis eros ut, sagittis orci. Suspendisse
                vehicula auctor leo, nec egestas tellus fringilla ac integer.
              </p>
            </div>
            <div className="text-center py-11 px-3 bg-white rounded-lg">
              <div className="flex justify-center items-center bg-gray-300 w-2/4 mx-auto rounded-lg -mt-16">
                <FaRegStar className="text-7xl" />
              </div>
              <h2 className="text-2xl my-3 text-gray-600 font-bold">
                Best Quality
              </h2>
              <p className="text-gray-500">
                Sed in mi rutrum, mattis eros ut, sagittis orci. Suspendisse
                vehicula auctor leo, nec egestas tellus fringilla ac integer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
