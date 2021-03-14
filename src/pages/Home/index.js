import React, { useEffect, useState } from 'react'
import { logout } from './../../services/auth'
import { Link } from 'react-router-dom'
import api from './../../services/api'

export default () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const { data } = await api.get('/api/user/list')
            if (data.success) {
                return setUsers(data.message)
            }
            return alert(data)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <Link to='/'>
                <span onClick={logout}>Sign Out</span>
            </Link>
            <br />
            <br />
            <ul>
                {users &&
                    users.length > 0 &&
                    users.map(user => <li key={user.email}>{user.name}</li>)}
            </ul>
        </div>
    )
}
