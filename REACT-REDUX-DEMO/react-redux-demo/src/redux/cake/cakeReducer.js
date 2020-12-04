const { BUY_CAKE } = require("./cakeTypes")

const initialState = {
    numberOfcakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfcakes: state.numberOfcakes - 1
        }

        default: return state
    }
}

export default cakeReducer