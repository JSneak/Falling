import React, { Component } from 'react'
import { withRouter } from 'react-router'
import image from '../images/2.png'

class Two extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <img src={image} className="center-me" alt="Hello" onClick={() => {this.handleSubmit()}}>
                    </img>
                </div>
            </React.Fragment>
        )
    }

    handleSubmit = () => {
        this.props.setValue("styles","/styles/three.css")
        this.props.history.push(`3`)
        this.props.nextStep()
    }
    
    componentDidMount = () => {
    }

}
export default withRouter(Two)
