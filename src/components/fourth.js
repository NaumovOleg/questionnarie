import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
class Fourth extends Component {
    componentWillMount() {
    }

    selectItem = ( value )=>{
        this.props.updateQuestion('calls', value );
        this.props.changeStep( )
    };

    render() {
        const selectItem = this.selectItem;
        return(
            <section className="third-step">
                <div className="question-page-four questionnarie-container">
                    <div className="page-four-buttons">
                        <button onClick={function () {
                            selectItem('1')
                        }}  className="questionnaire-page-four-button questionnaire-page-button"><a href="#">1 call per week</a></button>
                        <button  onClick={function () {
                            selectItem('2')
                        }} className="questionnaire-page-four-button questionnaire-page-button"><a href="#">2 calls per week</a></button>
                        <button onClick={function () {
                            selectItem('unlimit')
                        }}  className="questionnaire-page-four-button questionnaire-page-button"><a href="#">Everyday</a></button>
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
        updateQuestion:(field, value ) =>{dispatch(actions.updateQuestions(field, value))}

    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Fourth) ;