import React, {Component} from 'react';
import {Steps} from 'primereact/steps';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import Second from './second-step';
import Third from './third-step';
import Fourth from './fourth'
import Reccommended from './RecommendedPlan'
class Main extends Component {
    setHeaderForLastStep = () => {
        this.setState({
            header: 'Plan Selection',
        })
    };
    set0 = () => {

        this.setState({
            activeIndex: 0,
            header: "Who's signing up",
            component: <Second changeStep={this.set1}/>
        })

    };
    set1 = () => {

        this.setState({
            activeIndex: 1,
            header: "Relationship status",
            component: <Third changeStep={this.set2}/>
        })

    };
    set2 = () => {

        this.setState({
            activeIndex: 2,
            header: "Call Quantity",
            component: <Fourth changeStep={this.set3}/>
        })

    };
    set3 = () => {
        this.setState({
            activeIndex: 3,
            header: "Plan Selection",
            component: <Reccommended setHeaderForLastStep={this.setHeaderForLastStep}/>
        })

    };
    state = {
        activeIndex: 0,
        header: "Who's signing up",
        component: <Second changeStep={this.set1}/>,
        questions: {
            usingSteps: '',
            careMember: '',
            calls: ''
        }
    };


    validateSteps = (step) => {
        if (this.state.activeIndex <= step) {
            return true
        }
        return false

    };

    componentWillMount() {
        this.props.getProducts()
    }

    render() {
        const stepsDom = ReactDOM.findDOMNode(this.stepContainer);
        if (stepsDom) {
            const stepsUl = ReactDOM.findDOMNode(stepsDom.childNodes[0]);
            for (let a = 0; a <= 3; a++) {
                let exactLi = stepsUl.childNodes[a];
                let atag = exactLi.childNodes[0].childNodes[0];

                if (a <= this.state.activeIndex) {
                    atag.style = 'background:#F79F2C'
                } else {
                    atag.style = 'background:#fff'
                }
            }
        }

        const set0 = this.set0;
        const set1 = this.set1;
        const set2 = this.set2;
        const set3 = this.set3;


        const items = [{
            label: '',
            command: (event) => {
                if (!this.validateSteps(0)) {
                    this.setState({
                        activeIndex: 0,
                        header: "Who's signing up",
                        component: <Second changeStep={set1}/>
                    })
                }


            }
        },
            {
                label: '',
                command: (event) => {
                    if (!this.validateSteps(1)) {
                        this.setState({
                            activeIndex: 1,
                            header: "Relationship status",
                            component: <Third changeStep={set2}/>
                        })
                    }

                }
            },
            {
                label: '',
                command: (event) => {
                    if (!this.validateSteps(2)) {
                        this.setState({
                            activeIndex: 2,
                            header: "Call Quantity",
                            header2: "",
                            component: <Fourth changeStep={set3}/>
                        })
                    }

                }
            },
            {
                label: '',
                command: (event) => {
                    if (!this.validateSteps(3)) {
                        this.setState({
                            activeIndex: 2,
                            header: "Plan Selection",
                            component: <Reccommended  />
                        })
                    }
                }
            }]

        return (

            <div className="steps-section ">
                <div className="header">{this.state.header}</div>
                <Steps ref={el => {
                    this.stepContainer = el
                }} model={items} activeIndex={this.state.activeIndex} readOnly={false}/>
                <div className="steps-container">
                    {this.state.component}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(actions.getProducts())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main) ;