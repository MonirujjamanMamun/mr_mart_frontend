const Loading = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
      <img
        src="https://dev-portal.motforex.com/_next/imageurl=https://cdn.motforex.com/motforex/logo/logo.webp&w=48&q=75"
        className="rounded-full h-20 w-20"
      />
    </div>
  );
};

export default Loading;
