import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import Cookies  from 'universal-cookie';
// import {Carousel} from 'react-responsive-carousel';

class Reccommended extends Component {

    constructor( props ){
        super( props );
        this.cookies = new Cookies();
        this.checkoutUrl = this.cookies.get('recharge_cart_url') || 'https://checkout.rechargeapps.com/r/checkout?myshopify_domain=carenote.myshopify.com&cart_token=27f95cbbffbdf93e40aa81cc30df9cfd'
    }
    componentWillMount() {
        this.setUpSubscriptionCookies()
    }

    state = {
        seeAll: false,
        showCarousel: 'none'
    };

    selectItem = (value) => {
        this.props.updateQuestion('careMember', value);
        this.props.changeStep()
    };

    seeAllPlans = ()=>{
        window.scrollTo(0, 0);
        this.props.setHeaderForLastStep();
        this.setState({
            seeAll:true,
            showCarousel: 'block'
        })
    };

    setUpSubscriptionCookies =()=>{

        const questions = this.props.questions;
        const cookie = {
            relationship_status:questions.careMember,
            call_quantity:questions.calls,
            whos_signing:questions.usingState
        };
        this.cookies.set('additional-subscription_data', cookie );
    };


    addToCart = ( variant ) =>{
        console.log( variant );
        this.props.addToCart( variant , this.checkoutUrl)
    };

    render() {



        let products = {

            "Silver": {
                plan: {},
                topHeader: 'Our starter plan. Receive one Care Call per week plus unlimited text messaging.',
                description: ' <a>1 Care Call per week</a> <a>Unlimited text messaging</a> <a>Carenotes sent weekly</a>',
                price: '$49/mo'
            },

            "Gold": {
                plan: {},
                topHeader: 'Our most popular plan.   All the benefits of Silver plus an additional call per week.',
                description: '<a>2 Care Calls per week</a> <a>2 Outbound calls per week</a> <a>Unlimited text messaging</a> <a>Carentes sent weekly</a>',
                price: '$89/mo'
            },
            "Platinum": {
                plan: {},
                topHeader: 'Premium plan offers everything from Gold plus everyday Care Calls, and a personal concierge.',
                description: '<a>7 Care Calls per week</a> <a>Unlimited outbound calls</a> <a>Unlimited text messaging</a> <a>Carentes sent daily</a> <a>Dedicated personal concierge</a>',
                price: '$299/mo'
            },

        };
        const addToCart = this.addToCart;

        Object.keys(this.props.parcedProducts).map(el => {

            products[this.props.parcedProducts[el].name].plan = this.props.parcedProducts[el];

        });

        let reccommended = '';

        const selectItem = this.selectItem;

        if (this.props.questions.calls == '1') {
            reccommended = 'Silver'
        }
        if (this.props.questions.calls == '2') {
            reccommended = 'Gold'
        }
        if (this.props.questions.calls == 'unlimit') {
            reccommended = 'Platinum'
        }

        const returnHtml = (html) => {
            return {__html: html};
        };

        const seeAllPlans = this.seeAllPlans;

        const { showCarousel } = this.state;


        // "Silver": {
        //     plan: {},
        //     topHeader: 'Our starter plan. Receive one Care Call per week plus unlimited text messaging.',
        //         description: ' <a>1 Care Call per week</a> <a>Unlimited text messaging</a> <a>Carenotes sent weekly</a>',
        //         price: '$49/mo'
        // },


        return (

            <section className="reccommended-step">
                <p style={{display:!this.state.seeAll?'block':'none'}} className="questionnaire-text">Here's your recommended Carenote plan</p>
                <p style={{display:this.state.seeAll?'block':'none'}} className="questionnaire-text">Select a Carenote Plan</p>

                <div className="plans-template-container">
                    {
                        Object.keys(products).map(el => {
                            let itemContainerClass = this.state.seeAll ? 'item-container displayed_all displayed' : 'item-container ';
                            let planItemClass = 'plan-item ' + el;
                            if (el === reccommended) {
                                planItemClass = planItemClass + ' recommended';
                                itemContainerClass = itemContainerClass + ' recommended';
                            }
                            return ( <div className={itemContainerClass} key={el}>
                                    <div className={planItemClass}>
                                        <div className="item-header">{el}</div>
                                        <div className="item-center">
                                            <div className="main-description">
                                                {products[el].topHeader}
                                            </div>
                                            <div className="price">{products[el].price}</div>
                                            <div className="short-description"
                                                 dangerouslySetInnerHTML={returnHtml(products[el].description)}>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={function () {
                                        addToCart(products[el].plan.variantId)
                                    }} className="by-button">Select {el}</button>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="footer-plans-containers"><span>100% satisfaction guarantee. You may cancel our service withing 30 days for a full refund</span>
                    <button style={{display:this.state.seeAll?'none':'block'}} onClick={seeAllPlans} id="see-more-button" className="see-more-button" >
                        See More
                        Plans
                    </button>
                </div>



                {/*<div style={{display: showCarousel}}>*/}
                    {/*<Carousel centerSlidePercentage infiniteLoop={false}>*/}
                        {/*{*/}
                            {/*Object.keys(products).map((el, i) => {*/}
                                {/*let itemContainerClass = this.state.seeAll ? 'item-container displayed_all displayed' : 'item-container ';*/}
                                {/*let planItemClass = 'plan-item ' + el;*/}

                                {/*if (el === reccommended) {*/}
                                    {/*planItemClass = planItemClass + ' recommended';*/}
                                    {/*itemContainerClass = itemContainerClass + ' recommended';*/}

                                {/*}*/}

                                {/*return  <div className={itemContainerClass} key={i}>*/}
                                    {/*<img style={{display: 'none'}} src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />*/}
                                    {/*<div className={planItemClass}>*/}
                                        {/*<div className="item-header">{el}</div>*/}
                                        {/*<div className="item-center">*/}
                                            {/*<div className="main-description">*/}
                                                {/*{products[el].topHeader}*/}
                                            {/*</div>*/}
                                            {/*<div className="price">{products[el].price}</div>*/}
                                            {/*<div className="short-description"*/}
                                                 {/*dangerouslySetInnerHTML={returnHtml(products[el].description)}>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<button onClick={function () {*/}
                                        {/*addToCart(products[el].plan.variantId)*/}
                                    {/*}} className="by-button">Select {el}</button>*/}
                                {/*</div>*/}
                            {/*})*/}
                        {/*}*/}
                    {/*</Carousel>*/}
                {/*</div>*/}



            </section>
        )

    }
}

const mapStateToProps = state => {
    return {
        parcedProducts: state.parcedProducts,
        products: state.products,
        questions: state.questions
    };
};
const mapDispatchToProps = dispatch => {
    return {
        updateQuestion: (field, value) => {
            dispatch(actions.updateQuestions(field, value))
        },
        addToCart:(variant, url )=>dispatch(actions.addToCart(variant, url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reccommended) ;