import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
class Second extends Component {
    state = {
        route:0
    };
    componentWillMount() {
        this.props.getProducts()
    }
    selectItem = ( value, type )=>{
        const { updateQuestion, changeStep, changeStepAnother } = this.props;
        updateQuestion('usingState', value );
        if(type) changeStep();
        else changeStepAnother();
    };

    render() {
        const selectItem = this.selectItem;
        return(
            <section className="second-step">
                <div className="question-page-two questionnarie-container">
                    <p className="questionnaire-text">Are you signing up for yourself or are you<br/>sponsoring a loved one? </ p>
                    <div className="page-buttons">
                        <button onClick={function () {
                            selectItem('myself', 'one')
                        }}  className="questionnaire-page-two-button questionnaire-page-button"><a href="#">For myself</a></button>
                        <button onClick={function () {
                            selectItem('individual')
                        }}  className="questionnaire-page-two-button questionnaire-page-button"><a href="#">For an individual</a></button>
                    </div>
                </div>
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
        getProducts: () => dispatch(actions.getProducts()),
        updateQuestion:(field, value ) =>{dispatch(actions.updateQuestions(field, value))}
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Second) ;