import * as actionTypes from './../actionTypes'
import { updateObject } from './../../utils/updateReducerObject'

const initialState = {
    isOpen: false,
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MODAL:
            return updateObject(state, { isOpen: !state.isOpen })
        default:
            return state
    }
}

export default modalReducer
