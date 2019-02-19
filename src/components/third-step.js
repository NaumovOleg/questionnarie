import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
class Third extends Component {
    componentWillMount() {
    }

    selectItem = ( value )=>{
        this.props.updateQuestion('careMember', value );
        this.props.changeStep( )
    };

    render() {
        const selectItem = this.selectItem;
        return(
            <section className="third-step">
                <div className="question-page-three questionnarie-container">
                    <p className="questionnaire-text">What’s your relationship to your <br/> loved one?</p>
                    <div className="page-three-buttons">
                        <button onClick={function () {
                            selectItem('father')
                        }} className="questionnaire-page-three-button questionnaire-page-button"><a href="#">My father</a></button>
                        <button onClick={function () {
                            selectItem('mother')
                        }}  className="questionnaire-page-three-button questionnaire-page-button"><a href="#">My mother</a></button>
                    </div>
                    <div className="page-three-buttons">
                        <button onClick={function () {
                            selectItem('other relative')
                        }}  className="questionnaire-page-three-button questionnaire-page-button"><a href="#">Other relative</a></button>
                        <button onClick={function () {
                            selectItem('riend')
                        }}  className="questionnaire-page-three-button questionnaire-page-button"><a href="#">Friend</a></button>
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

export default connect( mapStateToProps, mapDispatchToProps )(Third) ;