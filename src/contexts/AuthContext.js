import React, {useContext, useState} from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}


const AuthProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState();

const signup = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

auth.onAuthStateChanged(user => {
  setCurrentUser(user)
})

const value = {
  currentUser
}  
  return (
    <AuthContext.Provider value={value}> 
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;