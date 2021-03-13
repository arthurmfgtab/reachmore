import React from 'react'
import { Wrapper, Header, Modal, Footer, Content } from './styles'
import Button from './../Button'

/**
 * Props
 * -> isOpen: boolean
 * -> title: string
 * -> footer: boolean
 * -> cancelLabel: string
 * -> okLabel: string
 * -> toggleModal: function
 * -> fields: array[{ label: string, placeholder(optional): string, type(optional): string }]
 */
export default props => (
    <Wrapper
        id='wrapper'
        isOpen={props.isOpen}
        onClick={event => event.target.id === 'wrapper' && props.toggleModal()}
    >
        <Modal>
            <Header>
                <span>{props.title}</span>
                <i
                    onClick={props.toggleModal}
                    style={{ opacity: '.6' }}
                    className='fa fa-times fa-2x'
                />
            </Header>
            <Content>
                <>
                    <span
                        style={{
                            color: 'orangered',
                            fontSize: '13px',
                            marginBottom: '1rem',
                        }}
                    >
                        {props.requestError && props.requestError}
                    </span>
                    {props.fields &&
                        props.fields.length > 0 &&
                        props.fields.map(field => (
                            <div id='field' key={field.label}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        width: '100%',
                                        padding: '0 0 .3rem 1rem',
                                    }}
                                >
                                    <label>{field.label}</label>
                                    <span
                                        style={{
                                            fontSize: '13px',
                                            marginTop: '.4rem',
                                            color: 'orangered',
                                        }}
                                    >
                                        {field.warning}
                                    </span>
                                </div>
                                <input
                                    name={field.label.toLowerCase()}
                                    onChange={props.onChange}
                                    onFocus={props.onFocus}
                                    placeholder={field.placeholder && field.placeholder}
                                    type={field.type ? field.type : 'text'}
                                />
                            </div>
                        ))}
                    <Button onClick={props.onClick} block label='Sign In' />
                </>
            </Content>
            <Footer footer={props.footer}>
                <Button label={props.cancelLabel} onClick={props.toggleModal} outline width={6} />
                <Button width={6} label={props.okLabel} />
            </Footer>
        </Modal>
    </Wrapper>
)
