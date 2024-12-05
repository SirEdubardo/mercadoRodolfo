import axios from 'axios';
import { LoginData } from '../Interfaces/LoginData';
import { Usuario } from '../Interfaces/Usuario';

const apiClient = axios.create({
    baseURL: 'https://37b4pnp5-5165.brs.devtunnels.ms',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const LoginAPI = (loginData: LoginData) => {
    return apiClient.post('/api/Login/login', loginData)
}

export const CriarUsuario = (dadosUsuario: Usuario) => {
    return apiClient.post('/User', dadosUsuario)
}

export const AtualizarUsuario = (dadosUsuario: Usuario) => {
    return apiClient.put('/User/UpdateUser', dadosUsuario)
}

export const DeletarUsuario = (id: string) => {
    return apiClient.delete(`/UserController/DeleteUser/${id}`)
}

export const ListarUsuarios = () => {
    return apiClient.get('/UserController/GetAll')
}

export const getAcaoPorCodigo = async (symbol: string) => {
    try {
        const response = await apiClient.get(`/Share/${symbol}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao logar: ', error);
        throw error;
    }
}

export const buscarAcoes = async (page: number, resultsByPage: number) => {
    try {
        const response = await apiClient.get(`/Share/${page}, ${resultsByPage}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Erro ao retornar lista de ações paginada: ', error);
        throw error;
    }
}

export const buscarAcoesFavoritas = async (page: number, resultsByPage: number) => {
    try {
        const response = await apiClient.get(`/Share/${page}, ${resultsByPage}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Erro ao retornar lista de ações paginada: ', error);
        throw error;
    }
}