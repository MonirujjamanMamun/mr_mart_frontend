import { CgRedo } from 'react-icons/cg';
import { MdLocalShipping } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';

const HeroBottom = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 flex-col lg:flex-row items-center">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg bg-gray-100 p-8 items-center gap-3 justify-center">
              <div>
                <FaAward className="text-4xl" />
              </div>
              <div className="">
                <p className="text-xl leading-relaxed">Two years warranty</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg bg-gray-100 p-8 items-center gap-3 justify-center">
              <div>
                <MdLocalShipping className="text-4xl" />
              </div>
              <div className="">
                <p className="text-xl leading-relaxed">Free Shopping</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg bg-gray-100 p-8 items-center gap-3 justify-center">
              <div>
                <CgRedo className="text-4xl" />
              </div>
              <div className="">
                <p className="text-xl leading-relaxed text-center">
                  30 days Return policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBottom;
