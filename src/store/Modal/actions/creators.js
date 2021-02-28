import * as actionTypes from './types'

export const toggleModal = (status) => {
    return {
        type: actionTypes.TOGGLE_MODAL,
        isOpen: status,
    }
}
