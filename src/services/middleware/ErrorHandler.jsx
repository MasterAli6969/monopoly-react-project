import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ErrorContext = createContext();

// eslint-disable-next-line react/prop-types
export function ErrorHandler({ children }) {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const handleError = (error) => {
    console.log("Handling errorсыфсфыыфсфысысфысысф:", error);
    setError(error);
    if (error === 404) {
      navigate("/page404");
    }
  };

  return (
    <ErrorContext.Provider value={handleError}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  return useContext(ErrorContext);
}
