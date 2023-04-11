import { createContext, useEffect, useMemo, useReducer } from "react";
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        return {
          ...state,
          theme: state.theme === "light" ? "dark" : "light",
        };
      case "ADD_FAVORITE":
        return {
          ...state,
          favs: [...state.favs, action.payload],
        };
      case "REMOVE_FAVORITE":
        return {
          ...state,
          favs: state.favs.filter((d) => d.id !== action.payload),
        };
      default:
        return state;
    }
  };

  const loadDoctors = () => {
    const localDoctors = localStorage.getItem("doctors");
    if (!localDoctors) {
      const getData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const parsedResponse = await response.json();
        localStorage.setItem("doctors", JSON.stringify(parsedResponse));
        return parsedResponse;
      };
      return getData();
    } else {
      return JSON.parse(localDoctors);
    }
  };

  const initialState = {
    theme: "dark",
    doctors: loadDoctors() || [],
    favs: JSON.parse(localStorage.getItem("favorite-doctors")) || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  useEffect(() => {
    localStorage.setItem("favorite-doctors", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(state.doctors));
  }, [state.doctors]);

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
