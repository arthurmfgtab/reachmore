import React from 'react'
import { Wrapper, Header, Modal, Footer, Content, FeedbackMessage } from './styles'
import Button from './../Button'

export default props => {
    const {
        isOpen, // boolean
        title, // string
        footer, // boolean
        cancelLabel, // string
        okLabel, // string
        toggleModal, // function
        onClick, // function
        onFocus, // function
        onChange, // function
        submitLabel, // string
        requestError, // string
        successSignUp, // string
        fields, // array[{ label: string, placeholder(optional): string, type(optional): string }]
    } = props

    return (
        <Wrapper
            id='wrapper'
            isOpen={isOpen}
            onClick={event => event.target.id === 'wrapper' && toggleModal()}
        >
            <Modal>
                <Header>
                    <span>{title}</span>
                    <i
                        onClick={toggleModal}
                        style={{ opacity: '.6' }}
                        className='fa fa-times fa-2x'
                    />
                </Header>
                <Content>
                    <>
                        <FeedbackMessage>
                            {requestError ? requestError : successSignUp && successSignUp}
                        </FeedbackMessage>
                        {fields &&
                            fields.length > 0 &&
                            fields.map(field => (
                                <div id='field' key={field.label}>
                                    <div>
                                        <label>{field.label}</label>
                                        <span>{field.warning}</span>
                                    </div>
                                    <input
                                        data-cy={`modal-input-${field.label.toLowerCase()}`}
                                        name={field.label.toLowerCase()}
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        placeholder={field.placeholder && field.placeholder}
                                        type={field.type ? field.type : 'text'}
                                    />
                                </div>
                            ))}
                        <Button
                            dataCy='modal-btn-submit'
                            onClick={onClick}
                            block
                            label={submitLabel}
                        />
                    </>
                </Content>
                <Footer footer={footer}>
                    <Button label={cancelLabel} onClick={toggleModal} outline width={6} />
                    <Button width={6} label={okLabel} />
                </Footer>
            </Modal>
        </Wrapper>
    )
}
