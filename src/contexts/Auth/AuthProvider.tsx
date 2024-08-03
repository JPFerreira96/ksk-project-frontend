import { useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);

    const signin = (email: string, password:string) => {
        // aqui foi criada a função da qual precisa-se dos dados para poder serem validados. Requisição ao BackEnd

    }

    const singout = () => {

    }

    return (
        <AuthContext.Provider value={{user, signin, singout}}>
         {children}
        </AuthContext.Provider>
    );
};