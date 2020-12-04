import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfcakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numberOfCakes} </h2>
            <button onClick = {()=> dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer