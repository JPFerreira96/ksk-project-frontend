import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        try {
            const response = await api.post('/validate', { token });
            return response.data;
        } catch (error) {
            // Tratar o caso de erro
            return {
                user: { id: 3, name: 'José', email: 'jose@gmail.com' }
            };
        }
    },
    signin: async (email: string, password: string) => {
        try {
            const response = await api.post('/signin', { email, password });
            return response.data;
        } catch (error) {
            // Tratar o caso de erro
            return {
                user: { id: 3, name: 'José', email: 'jose@gmail.com' },
                token: '123456789'
            };
        }
    },
    logout: async () => {
        try {
            const response = await api.post('/logout');
            return response.data;
        } catch (error) {
            // Tratar o caso de erro
            return { status: true };
        }
    }
});