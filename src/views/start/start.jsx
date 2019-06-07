import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import image from '../images/1.png'

class Start extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <a onClick={() => {this.handleSubmit()}} className="center-me">Falling</a>
                </div>
            </React.Fragment>
        )
    }

    handleSubmit = () => {
        this.props.setValue("styles","/styles/one.css")
        this.props.history.push(`1`)
        this.props.nextStep()
    }
    
    componentDidMount = () => {
    }

}

export default withRouter(Start)
