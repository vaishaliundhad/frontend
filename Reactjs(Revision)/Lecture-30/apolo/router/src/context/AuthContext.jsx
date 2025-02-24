import { createContext , useState , useContext  } from "react";

const  AuthContext = createContext()

const AuthProvider =({children})=>{
  const [isAuth , setIsAuth]= useState(false)

  return(
    <AuthContext.Provider valur={{isAuth , setIsAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
