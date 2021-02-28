import { combineReducers } from 'redux'
import modalReducer from './Modal/reducer'
import navbarReducer from './Navbar/reducer'

const rootReducer = combineReducers({
    modalReducer,
    navbarReducer,
})

export default rootReducer
