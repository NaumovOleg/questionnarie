import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
class Last extends Component {
    componentWillMount() {
        this.props.getProducts()
    }

    render() {
        return(
            <section className="last-step">
                Last
            </section>
        )

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

export default connect( mapStateToProps, mapDispatchToProps )(Last) ;