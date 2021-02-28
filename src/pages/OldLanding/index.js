import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LandingFinanceImage from './../../assets/landing-finance-image.svg'
import Modal from './../../components/Modal'
import { NavBar, Text } from './../../global/constants'
import * as actionCreators from './../../store/actionCreators'
import {
    Container,
    Content,
    Header,
    PrimaryButton,
    ResponsiveNav,
} from './styles'

export default () => {
    const dispatch = useDispatch()

    const isModalOpen = useSelector(state => state.modalReducer.isOpen)
    const isNavbarOpen = useSelector(state => state.navbarReducer.isOpen)

    const onToggleModal = () => {
        dispatch(actionCreators.toggleModal(isModalOpen))
    }

    const onToggleNavbar = () => {
        dispatch(actionCreators.toggleNavbar(isNavbarOpen))
    }

    return (
        <Container>
            <Header>
                <span>{NavBar.LOGO}</span>
                <div className='content-nav'>
                    <ul>
                        {NavBar.MIDDLE_ICONS.map(item => (
                            <li key={item.title}>
                                <Link to={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='auth-and-menu'>
                    <div className='auth-nav'>
                        <ul>
                            {NavBar.AUTH_ICONS.map(item => (
                                <li onClick={onToggleModal} key={item.title}>
                                    {' '}
                                    {item.title}{' '}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <i className='fa fa-bars fa-2x' onClick={onToggleNavbar} />
                </div>
            </Header>

            <ResponsiveNav isOpen={isNavbarOpen}>
                <ul>
                    {NavBar.MIDDLE_ICONS.map(item => (
                        <li key={item.title}>
                            <Link to=''>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </ResponsiveNav>

            <Content>
                <div className='text-area'>
                    <div className='image-area'>
                        <img
                            src={LandingFinanceImage}
                            alt='A man and his board of metrics'
                        />
                    </div>
                    <div className='inner-text-area'>
                        <h1>{Text.LANDING_PAGE.TITLE}</h1>
                        <h2>{Text.LANDING_PAGE.DESCRIPTION}</h2>
                        <PrimaryButton>
                            {Text.LANDING_PAGE.BUTTON}
                        </PrimaryButton>
                    </div>
                </div>
            </Content>

            <Modal isOpen={isModalOpen} onToggleModal={onToggleModal} />
        </Container>
    )
}
