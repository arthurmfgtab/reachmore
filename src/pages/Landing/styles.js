import styled from 'styled-components'
import { Colors, Breakpoints } from './../../global/constants'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.LIGHT};
    color: #4d4d4f;
    font-family: 'Varela Round', sans-serif;
`

export const Header = styled.div`
    min-height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.8rem;
    background-color: ${Colors.ICE_LIGHT};
    box-shadow: 0 0.1rem 0.12rem ${Colors.LIGHT_GRAY};

    .logo {
        transform: scale(1.12);
        padding: 0.18rem;
        border: 0.1rem solid ${Colors.INTENSE_BLUE};
        border-radius: 0.2rem;
    }

    .right-side-content {
        div {
            display: none;
        }

        @media (min-width: ${Breakpoints.LG}) {
            div {
                display: flex;
            }
            i,
            span {
                display: none;
            }
        }
    }

    * {
        cursor: pointer;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        i {
            margin-left: 0.8rem;
        }
    }

    ul {
        display: none;

        a {
            position: relative;
            font-size: 1.1rem;
            text-transform: uppercase;

            &:hover {
                transform: scale(1.12);
                transition: 0.1s ease-in-out;
                padding: 0.18rem;
                border: 0.1rem solid ${Colors.INTENSE_BLUE};
                border-radius: 0.2rem;
            }
        }

        @media (min-width: ${Breakpoints.LG}) {
            display: flex;
            width: 60%;
            justify-content: space-around;
            align-items: center;
            height: 100%;
        }
    }
`

export const ResponsiveNav = styled.div`
    padding: 1rem 1.4rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    display: ${props => (props.isOpen ? 'flex' : 'none')};

    ul {
        display: flex;
        flex-direction: column;
    }

    a {
        cursor: pointer;
        position: relative;

        &:not(:last-child) {
            margin-bottom: 1.4rem;
        }

        &:hover {
            transform: scale(1.025);
            transition: 0.1s ease-in-out;
        }

        &::after {
            content: '';
            height: 0.14rem;
            width: 1rem;
            background: ${Colors.INTENSE_BLUE};
            position: absolute;
            left: -0.1rem;
            top: 1.4rem;
        }
    }

    @media (min-width: ${Breakpoints.SM}) {
        ul {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;

            a::after {
                width: 2rem;
            }
        }
    }

    @media (min-width: ${Breakpoints.MD}) {
        ul {
            justify-content: flex-end;

            a:not(:first-of-type) {
                margin-left: 3rem;
            }
        }
    }

    @media (min-width: ${Breakpoints.LG}) {
        display: none;
    }
`

export const Content = styled.div`
    flex: 1;
    padding: 1.4rem;

    h2 {
        margin-top: 2rem;
        font-size: 1.6rem;
        line-height: 1.6rem;
    }

    h4 {
        margin: 1rem 0 3rem;
        line-height: 1.2rem;
        font-weight: 300;
        font-size: 1rem;
        color: #767676;
    }
`
