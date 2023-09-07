import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <h1>Oops !! Something wrong</h1>
      <h2>Error details</h2>
      <h2>{error.statusText + " " + error.data}</h2>
    </div>
  );
};
export default Error;
