import React, {Component} from 'react';
import {Steps} from 'primereact/steps';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import Main from './main'
class First extends Component {
    state = {
        route:0
    };
    componentWillMount() {
        this.props.getProducts()
    }
    setRoute = ( route )=>{
        this.setState({
            route:route
        })
    }

    render() {
        const letsGo = ()=>{
            this.setState({
                route:1
            })
        }

        if( this.state.route == 0){
            return (
                <div className="first-step">
                    <div className="question-page-one questionnarie-container">
                        <p className="questionnaire">Getting started</p>
                        <p className="questionnaire-text">Let us help you get started with Carenote by<br/>asking a few questions.
                            <br/>
                            <strong>Ready?</strong>
                        </p>
                        <button onClick={letsGo}  className="questionnaire-start-button questionnaire-page-button"><a href="#">Let’s Go</a></button>
                    </div>

                </div>
            )
        } else if( this.state.route == 1 ) {
            return (<Main setRoute={this.setRoute} />)
        } else {
            return (<Main/>)
        }

    }
}

const mapStateToProps = state => {
    return {
        products:state.products
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(actions.getProducts())

    };
};

export default connect( mapStateToProps, mapDispatchToProps )(First) ;
