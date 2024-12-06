import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold my-9">Opp&apos;s</h2>
          <h3 className="text-2xl ">This page doesn&apos;t exist!</h3>
        </div>
      );
    }

    if (error.status === 401) {
      return (
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold my-9">Opp&apos;s</h2>
          <h3 className="text-2xl ">You aren&apos;t authorized to see this!</h3>
        </div>
      );
    }

    if (error.status === 503) {
      return (
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold my-9">Opp&apos;s</h2>
          <h3 className="text-2xl ">Looks like our API is down!</h3>
        </div>
      );
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return <div>Something went wrong</div>;
};

export default ErrorPage;
