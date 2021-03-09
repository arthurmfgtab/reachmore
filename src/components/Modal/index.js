import React from 'react'
import { Wrapper, Header, Modal, Footer, Content } from './styles'
import Button from './../Button'

export default props => (
    <Wrapper
        id='wrapper'
        isOpen={props.isOpen}
        onClick={event => event.target.id === 'wrapper' && props.toggleModal()}
    >
        <Modal>
            <Header>
                <span>{props.title}</span>
                <span onClick={props.toggleModal}>X</span>
            </Header>
            <Content>
                <form>
                    <label>Username/Email</label>
                    <input type='text' />

                    <label>Password</label>
                    <input type='text' />

                    <Button label='Sign In' />
                </form>
            </Content>
            <Footer>
                <Button label={props.cancelLabel} onClick={props.toggleModal} outline width={6} />
                <Button width={6} label={props.okLabel} />
            </Footer>
        </Modal>
    </Wrapper>
)
