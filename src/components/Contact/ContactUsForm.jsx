const ContactUsForm = () => {
  return (
    <div className="bg-white my-5">
      <section className="text-center py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
            <h3 className="text-xl font-bold text-gray-600">Call Us</h3>
            <p className="text-gray-500 mt-2">+880 1763-052357</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
            <h3 className="text-xl font-bold text-gray-600">Email Us</h3>
            <p className="text-gray-500 mt-2">
              monirujjamanmamun2357@gmail.com
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
            <h3 className="text-xl font-bold text-gray-600">Visit Us</h3>
            <p className="text-gray-500 mt-2">Gaibandha, Rangpur, Bangladesh</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-4 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-600">
          Send Us A Message
        </h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUsForm;
