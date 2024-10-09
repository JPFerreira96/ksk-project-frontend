import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import {
    Button,
    ErrorMessage,
    ForgotPassword,
    Input,
    InputGroup,
    LoginBox,
    LoginContainer,
    Subtitle,
    Title,
} from './LoginStyles';



const Login = () => {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        try {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/private');
            } else {
                setError('Não foi possível fazer o login.');
            }
        } catch (error) {
            setError('Ocorreu um erro ao fazer o login.');
        } finally {
            setLoading(false);
        }
    };

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <LoginContainer>
            <LoginBox>
                <Title>Bem-vindo</Title>
                <Subtitle>Por favor, faça o login para continuar</Subtitle>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <form>
                    <InputGroup>
                        <Input
                            type="email"
                            value={email}
                            onChange={handleEmailInput}
                            placeholder="E-mail"
                            required
                        />
                    </InputGroup>
                    <InputGroup>
                        <Input
                            type="password"
                            value={password}
                            onChange={handlePasswordInput}
                            placeholder="Senha"
                            required
                        />
                    </InputGroup>
                    <Button type="button" onClick={handleLogin} disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </Button>
                </form>
                <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
            </LoginBox>
        </LoginContainer>
    );
};

export default Login;
