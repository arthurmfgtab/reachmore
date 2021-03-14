import React from 'react'
import Button from './styles'

export default props => {
    const { dataCy, width, block, onClick, label } = props
    return (
        <Button data-cy={dataCy} width={width} block={block} onClick={onClick}>
            {label}
        </Button>
    )
}
