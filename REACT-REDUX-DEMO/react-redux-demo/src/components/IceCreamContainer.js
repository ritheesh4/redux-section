import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function iceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Icecreams - {props.numberOfIceCreams}</h2>
            <button onClick={props.buyCake}>Buy Icecreams</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer)