import React, { Component } from 'react'
import { withRouter } from 'react-router'
import image from '../images/5.png'

class Five extends Component {

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
        this.props.setValue("styles","/styles/next.css")
        this.props.history.push(`end`)
        this.props.nextStep()
    }
    
    componentDidMount = () => {
    }

}
//https://coolors.co/247ba0-70c1b3-b2dbbf-f3ffbd-ff1654

export default withRouter(Five)
