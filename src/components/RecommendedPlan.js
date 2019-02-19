import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
class Reccommended  extends Component {
    componentWillMount() {
    }

    selectItem = ( value )=>{
        this.props.updateQuestion('careMember', value );
        this.props.changeStep( )
    };

    render() {
        const selectItem = this.selectItem;
        return(
            <section className="reccommended-step">
              reccommended
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
        updateQuestion:(field, value ) =>{dispatch(actions.updateQuestions(field, value))}
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Reccommended) ;