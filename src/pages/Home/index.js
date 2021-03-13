import React from 'react'
import { logout } from './../../services/auth'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <Link to='/'>
                <span onClick={logout}>Sign Out</span>
            </Link>
        </div>
    )
}
