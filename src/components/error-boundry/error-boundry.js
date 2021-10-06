import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator/error-indicator'

export default class ErrorBoundry extends Component {

    state = {
        harError: false
    }

    componentDidCatch() {
        this.setState({harError: true})
    }
    
    render() {
        if (this.state.harError) {
            return(
                <div><ErrorIndicator/></div>
                )
        }
        return this.props.children
    }
}
