import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error">
      <h1 className="error-message">Error</h1>
      <p>An error has occurred. Please review the details: </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
