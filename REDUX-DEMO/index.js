const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAME = 'BUY_ICECREAME'
const redux = require('redux')
const createStore = redux.createStore
const combineReudcers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()
// Action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIceCreame() {
    return {
        type: BUY_ICECREAME,
        info: "First redux action"
    }
}
//Reducers
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numberOfCakes: state.numberOfCakes - 1
//         }

//         case BUY_ICECREAME: return {
//             ...state,
//             numberOfIceCreams: state.numberOfIceCreams - 1
//         }

//         default: return state
//     }
// }


// (previousState, action) => newState

// const initialState = {
//     numberOfCakes: 10,
//     numberOfIceCreams: 20,numberOfIceCreams: 20,
// }    

const initialCakeState = {
    numberOfCakes: 10,
}

const initialInceCreameState = {
    numberOfIceCreams: 20,
}



const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialInceCreameState, action) => {
    switch (action.type) {
        case BUY_ICECREAME: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReudcers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreame())
store.dispatch(buyIceCreame())
unsubscribe()