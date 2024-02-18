import { createContext, useState } from "react";

export const LoginContext = createContext();

// eslint-disable-next-line react/prop-types
const Logincon = ({ children }) => {
  const [sessions, setSession] = useState(null);

  return (
    <div>
      <LoginContext.Provider value={[sessions, setSession]}>
        {children}
      </LoginContext.Provider>
    </div>
  );
};

export default Logincon;
