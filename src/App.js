import React, {Component} from 'react';
import {Steps} from 'primereact/steps';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import First  from'./components/first-step';

class App extends Component {
    componentWillMount() {
        this.props.getProducts()
    }

    render() {

        return (

            <div className="App">
                <First/>
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


