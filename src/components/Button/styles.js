import styled from 'styled-components'
import { Colors } from './../../global/constants'

/**
 * Optional props
 * > block: boolean
 * > width: string
 * > outline: boolean
 */
export default styled.div`
    width: ${props => (props.block ? '100%' : `${props.width}rem` ? `${props.width}rem` : '8rem')};
    color: ${props => (props.outline ? Colors.INTENSE_BLUE : '#fff')};
    background-color: ${props => (props.outline ? '#fff' : Colors.INTENSE_BLUE)};
    border: ${props => (props.outline ? `0.1rem solid ${Colors.INTENSE_BLUE}` : '')};
    height: 2.6rem;
    border-radius: 0.24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Varela Round', sans-serif;
    font-weight: 600;
    cursor: pointer;
`
