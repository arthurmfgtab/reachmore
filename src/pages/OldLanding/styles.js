import styled from 'styled-components'
import { Breakpoints, Colors } from './../../global/constants'

export const Container = styled.div`
    height: 100%;
    background-color: ${Colors.LIGHT};
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    background-color: ${Colors.WHITE};
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    cursor: pointer;

    span {
        font-weight: 500;
        display: inline-block;
        position: relative;
        font-family: 'Montserrat', cursive;
        letter-spacing: 0.07rem;
        font-size: 1.4rem;

        &::after {
            content: ' ';
            height: 0.16rem;
            border-radius: 0.1rem;
            width: 4.8rem;
            background: ${Colors.INTENSE_BLUE};
            position: absolute;
            right: 0;
            top: 1.62rem;
        }
    }

    .auth-and-menu {
        display: flex;
        align-items: center;

        .auth-nav {
            margin-right: 1.5rem;
            font-weight: 700;
            display: inline-block;
            position: relative;

            ul {
                display: flex;
            }
        }
    }

    .content-nav {
        display: none;
    }
`

export const ResponsiveNav = styled.div`
    display: ${props => !props.isOpen && 'none'};
    background-color: ${Colors.WHITE};
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 1rem;

    ul {
        display: flex;
        flex-direction: column;

        li {
            list-style: none;
            text-transform: uppercase;
            cursor: pointer;
            display: inline-block;
            position: relative;

            &::after {
                content: '';
                height: 0.1rem;
                width: 1.3rem;
                background: ${Colors.INTENSE_BLUE};
                position: absolute;
                left: 0;
                bottom: 0.1rem;
            }

            &:not(:last-child) {
                margin-bottom: 1rem;
            }
        }
    }
`

export const Content = styled.div`
    display: flex;
    height: 100%;
    margin-top: 2rem;

    .text-area {
        .image-area {
            display: flex;
            justify-content: center;

            img {
                width: 20rem;
            }
        }

        .inner-text-area {
            margin-top: 3rem;
            padding: 2rem;

            h1 {
                font-family: 'Dosis', serif;
                font-size: 2rem;
                margin-bottom: 1rem;
                text-transform: uppercase;
                
            }

            h2 {
                font-size: 1rem;
                font-weight: 400;
                color: ${Colors.GRAY};
                margin-bottom: 1.5rem;
            }
        }
    }

    @media (min-width: ${Breakpoints.SM}) {
        height: 100%;
        margin-top: 2rem;

        .text-area {
            .image-area {
                display: flex;
                justify-content: center;

                img {
                    width: 20rem;
                }
            }

            .inner-text-area {
                margin-top: 3rem;
                padding: 2rem;

                h1 {
                    font-size: 1.7rem;
                    line-height: 1.1;
                    margin-bottom: 1rem;
                    width: 80%;
                }

                h2 {
                    font-size: 1rem;
                    font-weight: 400;
                    color: ${Colors.GRAY};
                    margin-bottom: 1.5rem;
                    width: 60%;
                }
            }
        }
    }

    @media (min-width: ${Breakpoints.MD}) {
    }

    @media (min-width: ${Breakpoints.LG}) {
        height: 100%;
        margin-bottom: 4rem;

        .text-area,
        .image-area {
            flex: 1 1 auto;
            display: flex;
            align-items: center;
        }

        .text-area {
            justify-content: flex-end;
            order: 1;

            .inner-text-area {
                width: 37rem;
                height: 20rem;
                display: flex;
                margin-top: 3rem;
                flex-direction: column;

                h1 {
                    font-size: 2.4rem;
                    margin-bottom: 0.1rem;
                    line-height: 1.1;
                }

                h2 {
                    font-size: 1rem;
                    margin-bottom: 2.4rem;
                    line-height: 1.4;
                    font-weight: 500;
                }
            }
        }

        .image-area {
            justify-content: flex-start;
            order: 2;
            background: blue;

            img {
                width: 40rem;
            }
        }
    }

    @media (min-width: ${Breakpoints.XL}) {
    }
`

export const Modal = styled.div`
    display: ${props => !props.isOpen && 'none'};
    position: fixed;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${Colors.LIGHT};
        height: 75%;
        width: 90%;
        position: relative;
        float: left;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 0.4rem;
        padding: 1rem;

        *:not(.modal-title) {
            color: ${Colors.GRAY};
        }

        .modal-title {
            font-weight: 700;
            font-size: 1.2rem;
            margin-top: 1rem;
        }

        .modal-description {
            font-size: 0.8rem;
            margin-top: 0.3rem;
            margin-bottom: 1rem;
        }

        form {
            margin-top: 1rem;
            font-size: 2rem;
            color: ${Colors.INTENSE_BLUE};
            margin-bottom: 1rem;

            & > * {
                width: 100%;
                -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
                box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
                padding: 1rem;
                border-radius: 0.2rem;
                margin-bottom: 1rem;
                color: ${Colors.LIGHT};
            }

            .email {
            }
            .password {
            }
            .sign-in {
                background-color: ${Colors.INTENSE_BLUE};
                color: ${Colors.LIGHT};
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.1rem;
            }
        }

        .before-other-options {
            margin-bottom: 1rem;
        }

        ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 70%;
            margin-bottom: 3rem;
        }

        .terms {
            display: inline-block;
            position: relative;

            &::after {
                content: ' ';
                height: 0.16rem;
                border-radius: 0.1rem;
                width: 100%;
                background: ${Colors.INTENSE_BLUE};
                position: absolute;
                right: 0;
                bottom: 0.01rem;
            }
        }

        .fa-times {
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 0;
        }
    }
`

export const PrimaryButton = styled.button`
    cursor: pointer;
    border-radius: 0.4rem;
    text-transform: uppercase;
    padding: 1rem 2rem;
    letter-spacing: 0.01rem;
    background: ${Colors.INTENSE_BLUE};
    color: ${Colors.LIGHT};
    border: none;
    font-weight: 700;
    width: 100%;
`
