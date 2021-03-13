import { login, logout } from './auth'
import api from './api'

export const signIn = async user => {
    try {
        const { data } = await api.post('/api/auth/sign_in', user)
        if (!data.success) {
            console.log(data)
            return { ...data }
        } else {
            login(data.token)
            return { ...data }
        }
    } catch (erro) {
        return erro.message
    }
}

export const signOut = async () => {
    return console.log('SignOut')
}
