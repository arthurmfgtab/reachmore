import React, { useState } from 'react'
import { Container, Header, Content, ResponsiveNav, Logo } from './styles'
import Button from '../../components/Button'
import Modal from './../../components/Modal'
import LandingFinanceImage from './../../assets/landing-finance-image.svg'
import { Text } from '../../global/constants'

export default () => {
    const [navbarStatus, setNavbarStatus] = useState()
    const [modalStatus, setModalStatus] = useState()

    const toggleModal = () => setModalStatus(modalStatus => !modalStatus)
    const toggleNavbar = () => setNavbarStatus(navbarStatus => !navbarStatus)

    return (
        <Container>
            <Header>
                <Logo>REACHMORE</Logo>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <div>
                    <h5 onClick={toggleModal}>Sign In</h5>
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
                <Button label='GET STARTED' block onClick={toggleModal} />
            </Content>
            <Modal
                onClick={toggleModal}
                title='Sign In to Reachmore'
                isOpen={modalStatus}
                footer={false}
                toggleModal={toggleModal}
            />
        </Container>
    )
}
