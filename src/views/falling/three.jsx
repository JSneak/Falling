import React, { Component } from 'react'
import { withRouter } from 'react-router'
import image from '../images/3.png'

class Three extends Component {

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
        this.props.setValue("styles","/styles/four.css")
        this.props.history.push(`4`)
        this.props.nextStep()
    }
    
    componentDidMount = () => {
    }

}
//https://coolors.co/247ba0-70c1b3-b2dbbf-f3ffbd-ff1654

export default withRouter(Three)
