import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ModeContextSettings = createContext({});

const ModeContext = ({ children }) => {
  const [mode, setMode] = useState("dark");

  return (
    <ModeContextSettings.Provider value={{ mode, setMode }}>
      {children}
    </ModeContextSettings.Provider>
  );
};

ModeContext.propTypes = {
  children: PropTypes.element,
};
export default ModeContext;
