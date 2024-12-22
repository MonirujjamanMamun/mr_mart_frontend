import PropTypes from 'prop-types';

const EmployDetails = ({
  title,
  details,
  emplyImg,
  emplyName,
  designation,
}) => {
  return (
    <section className="container mx-auto mt-3">
      <div className="flex flex-col items-center justify-center md:flex-row lg:flex-row">
        <div className="w-3/4 p-7">
          <h2 className="text-3xl mb-5 text-gray-600">{title}</h2>
          <p className="text-justify text-lg text-gray-500">{details}</p>
        </div>
        <div className="w-1/4 bg-gray-100 pb-6">
          <div className="">
            <img className="rounded-sm" src={emplyImg} alt={title} />
            <h3 className="text-xl font-bold p-3 text-gray-600 text-center">
              {emplyName}{' '}
              <span className="text-gray-500 text-lg">{designation}</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

EmployDetails.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  emplyImg: PropTypes.string,
  emplyName: PropTypes.string,
  designation: PropTypes.string,
};
export default EmployDetails;
