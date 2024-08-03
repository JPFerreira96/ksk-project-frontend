import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const signin = async (email: string, password: string) => {
        // aqui foi criada a função da qual precisa-se dos dados para poder serem validados. Requisição ao BackEnd
        const data = await api.signin(email, password);

        if (data.user && data.token) {
            setUser(data.user);
        }



    }

    const singout = () => {

    }

    return (
        <AuthContext.Provider value={{ user, signin, singout }}>
            {children}
        </AuthContext.Provider>
    );
};