import styled from 'styled-components'
import { Colors } from './../../global/constants'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.LIGHT};
    color: #4d4d4f;
`

export const Header = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    background-color: ${Colors.ICE_LIGHT};
    box-shadow: 0 1px 12px ${Colors.LIGHT_GRAY};

    ul {
        display: none;

        li:not(:first-child) {
            margin-left: 1rem;
        }
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        i {
            margin-left: 0.8rem;
        }
    }
`

export const ResponsiveNav = styled.div`
    padding: 1rem 1.4rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    display: ${props => (props.isOpen ? 'flex' : 'none')};

    li {
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
`

export const Content = styled.div`
    flex: 1;
    padding: 1.4rem;

    h2 {
        margin-top: 2rem;
        font-size: 1.6rem;
        line-height: 1.6rem;
        font-family: 'Varela Round', sans-serif;
    }

    h4 {
        margin: 1rem 0 3rem;
        line-height: 1.2rem;
        font-weight: 300;
        font-size: 1rem;
        color: #767676;
    }
`

export const Logo = styled.div`
    cursor: pointer;
`
