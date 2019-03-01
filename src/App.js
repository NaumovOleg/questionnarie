import React, {Component} from 'react';
import {Steps} from 'primereact/steps';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import First  from'./components/first-step';
import Header from './components/header'
class App extends Component {
    componentWillMount() {
        this.props.getProducts()
    }

    render() {
        return (
            <div >
                <Header/>
                <div className="questions-container">

                    <First/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(actions.getProducts())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App) ;


