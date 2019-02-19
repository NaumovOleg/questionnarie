import React, {Component} from 'react';
import {Steps} from 'primereact/steps';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import Second from './second-step';
import Third from './third-step';
import Fourth from './fourth'
import Reccommended from './RecommendedPlan'
class Main extends Component {
    set0 = ()=>{

            this.setState({
                activeIndex: 0,
                header: "Who's signing up",
                component: <Second changeStep={this.set1}/>
            })

    };

    set1 = ()=>{

            this.setState({
                activeIndex: 1,
                header: "Relationship status",
                component: <Third changeStep={this.set2}/>
            })

    };
    set2 = ()=>{

            this.setState({
                activeIndex: 2,
                header: "How many calls would your father like to receive per week?",
                component: <Fourth  changeStep={this.set3} />
            })

    };
    set3 = ()=>{

        this.setState({
            activeIndex: 3,
            header: "Here's your recommended Carenote plan",
            component: <Reccommended  />
        })

    };
    state = {
        activeIndex: 0,
        header: "Who's signing up",
        component: <Second changeStep={this.set1} />,
        questions:{
            usingSteps:'',
            careMember:'',
            calls:''
        }
    };

    validateSteps = ( step )=>{
        if( this.state.activeIndex<=step){
            return true
        }
        return false

    };

    componentWillMount() {
        this.props.getProducts()
    }

    render() {

        const set0 = this.set0;
        const set1 = this.set1;
        const set2 = this.set2;
        const set3 = this.set3;


        const items = [{
            label: '',
            command: (event) => {
                if( !this.validateSteps(0) ){
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
                    if( !this.validateSteps(1) ){
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
                    if( !this.validateSteps(2) ){
                        this.setState({
                            activeIndex: 2,
                            header: "How many calls would your father like to<br/>receive per week?",
                            component: <Fourth changeStep={set3} />
                        })
                    }

                }
            },
            {
                label: '',
                command: (event) => {
                    if( !this.validateSteps(3) ){
                        this.setState({
                            activeIndex: 2,
                            header: "Here's your recommended Carenote plan",
                            component: <Reccommended  />
                        })
                    }
                }
            }]

        return (

            <div className="steps-section ">
                <div className="header">{this.state.header}</div>
                <Steps model={items} activeIndex={this.state.activeIndex} readOnly={false}/>
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