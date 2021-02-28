import * as actionTypes from './types'

export const toggleNavbar = (status) => {
    return {
        type: actionTypes.TOGGLE_NAVBAR,
        isOpen: status,
    }
}
