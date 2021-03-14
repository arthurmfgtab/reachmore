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
    const [successSignUp, setSuccessSignUp] = useState() // TODO make it better
    const [navbarStatus, setNavbarStatus] = useState()
    const [modalStatus, setModalStatus] = useState()
    const [signUpStatus, setSignUpStatus] = useState(false)
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const [nameWarning, setNameWarning] = useState('')
    const [emailWarning, setEmailWarning] = useState('')
    const [passwordWarning, setPasswordWarning] = useState('')
    const [requestError, setRequestError] = useState()

    const toggleModal = () => setModalStatus(modalStatus => !modalStatus)
    const toggleNavbar = () => setNavbarStatus(navbarStatus => !navbarStatus)

    const validateFields = () => {
        if (signUpStatus && user.name === '') return setNameWarning('Name is required!')
        if (user.email === '') return setEmailWarning('Email is required!')
        if (user.password === '') return setPasswordWarning('Password is required!')
        return true
    }

    const onChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const onFocus = () => {
        setNameWarning('')
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

    const handleSignUp = async () => {
        setSignUpStatus(true)
        setModalStatus(true)

        if (validateFields()) {
            try {
                const { data } = await api.post('/api/user/store', user)
                if (data.success) {
                    setSignUpStatus(false)
                    setSuccessSignUp('Account created, time to log in :)')
                } else {
                    return console.log(data)
                    // setRequestError(data.message)
                }
            } catch (error) {
                return setRequestError(error.message)
            }
        }
    }

    const modalFields = () => {
        const fields = [
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
        ]

        if (signUpStatus)
            fields.unshift({
                label: 'Name',
                placeholder: 'Arthur Gonçalves',
                warning: nameWarning,
            })

        return fields
    }

    return (
        <Container>
            <Header>
                <Link data-cy='header-logo' className='logo' to='/'>
                    REACHMORE
                </Link>
                <ul>
                    <Link data-cy='header-home' to='/'>
                        home
                    </Link>
                    <Link data-cy='header-features' to='/'>
                        features
                    </Link>
                    <Link data-cy='header-pricing' to='/'>
                        pricing
                    </Link>
                    <Link data-cy='header-blog' to='/'>
                        blog
                    </Link>
                    <Link data-cy='header-contact-us' to='/'>
                        contact us
                    </Link>
                </ul>
                <div className='right-side-content'>
                    <Button
                        onClick={toggleModal}
                        width={5}
                        dataCy='header-btn-sign-in'
                        label='Sign In'
                    />
                    <span onClick={toggleModal}>Sign In</span>
                    <i className='fa fa-bars fa-2x' onClick={toggleNavbar} />
                </div>
            </Header>
            <ResponsiveNav isOpen={navbarStatus}>
                <ul>
                    <Link data-cy='nav-home' to='/'>
                        home
                    </Link>
                    <Link data-cy='nav-features' to='/'>
                        features
                    </Link>
                    <Link data-cy='nav-pricing' to='/'>
                        pricing
                    </Link>
                    <Link data-cy='nav-blog' to='/'>
                        blog
                    </Link>
                    <Link data-cy='nav-contact-us' to='/'>
                        contact us
                    </Link>
                </ul>
            </ResponsiveNav>
            <Content>
                <img src={LandingFinanceImage} alt='' style={{ width: '100%' }} />
                <h2>{Text.LANDING_PAGE.TITLE}</h2>
                <h4>{Text.LANDING_PAGE.DESCRIPTION}</h4>
                <Button onClick={handleSignUp} label='GET STARTED' block />
            </Content>
            <Modal
                successSignUp={successSignUp && successSignUp}
                fields={modalFields()}
                title={`Sign ${signUpStatus ? 'Up' : 'In'} to Reachmore`}
                isOpen={modalStatus}
                footer={false}
                onClick={signUpStatus ? handleSignUp : handleSignIn}
                toggleModal={toggleModal}
                onFocus={onFocus}
                onChange={onChange}
                submitLabel={`Sign ${signUpStatus ? 'Up' : 'In'}`}
                requestError={requestError && requestError}
            />
        </Container>
    )
}
