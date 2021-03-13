import React from 'react'
import Button from './styles'

export default props => (
    <Button block={props.block} onClick={props.onClick}>
        {props.label}
    </Button>
)
