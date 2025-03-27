import {createContext, useContext, useState} from "react";

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const login = ({email, name, surname, tel}) => {
        setUser({email, name, surname, tel})
    }
    const logout = () => setUser(null)

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);