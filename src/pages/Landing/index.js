import React, { useState } from 'react'
import { Container, Header, Content, ResponsiveNav } from './styles'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Modal from './../../components/Modal'
import { Text } from '../../global/constants'
import LandingFinanceImage from './../../assets/landing-finance-image.svg'
import { login } from './../../services/auth'
import api from './../../services/api'

export default props => {
    const [navbarStatus, setNavbarStatus] = useState()
    const [modalStatus, setModalStatus] = useState(true)
    const [user, setUser] = useState({ email: '', password: '' })
    const [emailWarning, setEmailWarning] = useState('')
    const [passwordWarning, setPasswordWarning] = useState('')
    const [requestError, setRequestError] = useState('')

    const toggleModal = () => setModalStatus(modalStatus => !modalStatus)
    const toggleNavbar = () => setNavbarStatus(navbarStatus => !navbarStatus)

    const validateFields = () => {
        if (user.email === '') return setEmailWarning('Email is required!')
        if (user.password === '') return setPasswordWarning('Password is required!')
        return true
    }

    const onChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const onFocus = () => {
        setEmailWarning('')
        setPasswordWarning('')
        setRequestError('')
    }

    const handleSignIn = async () => {
        if (validateFields()) {
            try {
                const { data } = await api.post('/api/auth/sign_in', user)
                if (data.success) {
                    login(data.token)
                    return props.history.push('/home')
                } else {
                    setRequestError(data.message)
                }
            } catch (erro) {
                return setRequestError(erro.message)
            }
        }
    }

    return (
        <Container>
            <Header>
                <Link to='/'>REACHMORE</Link>
                <div>
                    <span onClick={toggleModal}>Sign In</span>
                    <i className='fa fa-bars fa-2x' onClick={toggleNavbar} />
                </div>
            </Header>
            <ResponsiveNav isOpen={navbarStatus}>
                <ul>
                    <li>home</li>
                    <li>features</li>
                    <li>pricing</li>
                    <li>blog</li>
                    <li>contact us</li>
                </ul>
            </ResponsiveNav>
            <Content>
                <img src={LandingFinanceImage} alt='' style={{ width: '100%' }} />
                <h2>{Text.LANDING_PAGE.TITLE}</h2>
                <h4>{Text.LANDING_PAGE.DESCRIPTION}</h4>
                <Button label='GET STARTED' block />
            </Content>
            <Modal
                fields={[
                    {
                        label: 'Email',
                        placeholder: 'example@example.com',
                        warning: emailWarning,
                    },
                    {
                        label: 'Password',
                        placeholder: '123456789',
                        type: 'password',
                        warning: passwordWarning,
                    },
                ]}
                title='Sign In to Reachmore'
                isOpen={modalStatus}
                footer={false}
                okLabel={'Ok'}
                onClick={handleSignIn}
                cancelLabel={'Cancel'}
                toggleModal={toggleModal}
                onFocus={onFocus}
                onChange={onChange}
                requestError={requestError}
            />
        </Container>
    )
}
