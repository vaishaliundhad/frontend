
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

 

const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setuser]=useState([]);
  const [curuser , setcuruser]=useState({});

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth , user , setuser , curuser , setcuruser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
