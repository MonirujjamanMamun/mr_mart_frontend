import { AiOutlineCopyright } from 'react-icons/ai';
import Image from '../designLayouts/Image';
import { paymentCard } from '../../assets/allImg';

const FooterBottom = () => {
  const currentDate = new Date().getFullYear();

  return (
    <section className="bg-[#F5F5F3] group">
      <div className="container mx-auto">
        <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20 flex flex-col md:flex-row lg:flex-row">
          <p className="text-titleFont font-normal flex md:items-center text-lightText duration-200 text-sm">
            <span className="text-md mr-[1px] mt-[2px] md:mt-0 hidden md:inline-flex">
              <AiOutlineCopyright />
            </span>
            Copyright {currentDate} | MR Mart | All Rights Reserved |
            <a
              href="https://monirujjaman.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ml-1 font-medium group-hover:text-primeColor">
                Powered by MR Mart
              </span>
            </a>
          </p>
          <Image
            className={`w-[80%] lg:w-[30%] mx-auto lg:mr-5`}
            imgSrc={paymentCard}
          />
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
