import React, { Component } from 'react'

import { withRouter } from 'react-router'
import {Switch, Route} from "react-router-dom"
import {Helmet} from "react-helmet";

import Start from '../views/start/start'
import End from '../views/next/next'
import One from '../views/falling/one'
import Two from '../views/falling/two'
import Three from '../views/falling/three'
import Four from '../views/falling/four'
import Five from '../views/falling/five'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview("/start");

class routingForm extends Component {    

    state = {
        // Form Control:
        step: 1,
        styles: "/styles/start.css"
    }

    render() {                
        const values = this.state

        return (
            <React.Fragment>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>My Title</title>
                        <link rel="stylesheet" type="text/css"  href={this.getValue("styles")} />
                    </Helmet>
                    <Switch>
                        <Route path={`/start`} render={() =>
                            <Start values={values} nextStep={this.nextStep} setValue={this.setValue} />
                        }></Route>
                        <Route path={`/1`} render={() =>
                            <One values={values} nextStep={this.nextStep} setValue={this.setValue} />
                        }></Route>
                        <Route path={`/2`} render={() =>
                            <Two values={values} nextStep={this.nextStep} setValue={this.setValue} />
                        }></Route>
                        <Route path={`/3`} render={() =>
                            <Three values={values} nextStep={this.nextStep} setValue={this.setValue} />
                        }></Route>
                        <Route path={`/4`} render={() =>
                            <Four values={values} nextStep={this.nextStep} setValue={this.setValue} />
                        }></Route>
                        <Route path={`/5`} render={() =>
                            <Five values={values} nextStep={this.nextStep} setValue={this.setValue} />
                        }></Route>
                        <Route path={'/end'} render={() =>
                            <End values={values} nextStep={this.nextStep} setValue={this.setValue} />
                        }></Route>
                    </Switch>
            </React.Fragment>
        )
    }

    //Have a component that contains the background and new image
    //http://tools.medialab.sciences-po.fr/iwanthue/

    nextStep = () => {
        this.setState(prevState => {
            return {
                step: prevState.step + 1,
            }
        })
    }
    getValue = (input) => {
        return this.state[input];
    }

    
    setValue = (input, value) => {
        this.setState({[input]: value})
    }

}



export default withRouter(routingForm);
