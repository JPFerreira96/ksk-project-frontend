import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await auth.signin(email, password);

            if(isLogged){
                navigate('/')
            }
            else{
                alert('Sem sucesso!!')
            }
        }
    }

    return (
        <div>
            <h2>Página Fechada</h2>

            <input 
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={e=> setEmail(e.target.value)}
                placeholder='Digitte o seu e-mail'
            />
            <input 
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={e=> setPassWord(e.target.value)}
                placeholder='Digitte o seu e-mail'
            />

            <button onClick={handleLogin}>Fazer Login</button>
        </div>

    )

}