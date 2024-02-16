import { createContext, useState } from "react";

export const DarkContext = createContext();
// eslint-disable-next-line react/prop-types
export const DarkModeProvider = ({ children }) => {
  const [darks, setDarks] = useState(false);
  return (
    <DarkContext.Provider value={[darks, setDarks]}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkContext;
