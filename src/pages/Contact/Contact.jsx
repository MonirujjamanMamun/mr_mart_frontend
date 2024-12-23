import ContactUsForm from '../../components/Contact/ContactUsForm';
import StoreDetails from '../../components/Contact/StoreDetails';
import Breadcrumbs from '../../components/designLayouts/Breadcrumbs';
const Contact = () => {
  const descriptionOne =
    'Several languages coalesce, the grammar of the is more.';
  const descriptionTwo =
    'Several languages coalesce, the grammar of the is more.';
  return (
    <section className="container mx-auto">
      <div className="ms-3">
        <Breadcrumbs title={'Contact Us'} />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
        <div className="w-2/5">
          <StoreDetails title={'Store One'} description={descriptionOne} />
          <StoreDetails
            className={'mt-11'}
            title={'Store Two'}
            description={descriptionTwo}
          />
        </div>
        <div className="w-3/5">
          <div>
            <h2 className="text-gray-600 text-2xl my-3 font-bold">Our Store</h2>
            <p className="text-gray-500 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum odio
              in accusamus, aliquam nihil minus reprehenderit distinctio quia,
              reiciendis ipsa nam ad. Nisi ex alias impedit totam illum suscipit
              voluptatum tenetur libero autem minus, fugit at eligendi possimus
              accusamus, corporis dolor nostrum velit quod unde id tempora
              eveniet culpa laudantium. reiciendis ipsa nam ad. Nisi ex alias
              impedit totam illum suscipit voluptatum tenetur libero autem
              minus, fugit at eligendi possimus accusamus, corporis dolor
              nostrum velit quod unde id tempora eveniet culpa laudantium.
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230792.8751149498!2d89.42427322674394!3d25.333127271023283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcdff87c48839b%3A0x43a82b84ed51dd77!2sGaibandha%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1734978827474!5m2!1sen!2sbd"
              className="w-full h-full md:h-80 lg:h-96 my-3"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <ContactUsForm />
    </section>
  );
};

export default Contact;
