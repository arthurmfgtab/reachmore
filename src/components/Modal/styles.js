import styled from 'styled-components'
import { Breakpoints, Colors } from './../../global/constants'

export const Wrapper = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`

export const Modal = styled.div`
    border-radius: 0.3rem;
    background-color: #fefefe;
    margin: 15% auto;
    width: 90%;
    height: 75%;
    display: flex;
    flex-direction: column;

    @media (min-width: ${Breakpoints.SM}) {
        width: 30rem;
    }
`

export const Header = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 0.1rem solid #ddd;

    span {
        font-weight: 500;
        font-size: 1.4rem;
        letter-spacing: 0.03rem;
    }

    * {
        cursor: pointer;
    }
`

export const Content = styled.div`
    display: flex;
    flex: 6;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    width: 100%;

    #field {
        width: 100%;

        div {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            width: 100%;
            padding: 0 0 0.3rem 1rem;

            span {
                font-size: 13px;
                margin-top: 0.4rem;
                color: orangered;
            }
        }
    }

    label {
        font-size: 1rem;
        margin-bottom: 0.3rem;
    }

    input {
        border: 0.12rem solid #ccc;
        border-radius: 0.4rem;
        height: 2.6rem;
        width: 100%;
        padding: 0.6rem;
        font-size: 0.9rem;
        margin-bottom: 1.3rem;

        &:last-of-type {
            margin-bottom: 2rem;
        }
    }
`

export const Footer = styled.div`
    flex: 1;
    display: ${props => (props.footer ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-top: 0.1rem solid #ddd;

    * {
        margin-right: 0.7rem;
    }
`

export const FeedbackMessage = styled.div`
    color: ${props => (props.requestError ? 'orangered' : Colors.INTENSE_BLUE)};
    font-size: 1.3rem;
    margin-bottom: 1rem;
`
