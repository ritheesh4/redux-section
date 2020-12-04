import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReudcer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReudcer

})

export default rootReducer