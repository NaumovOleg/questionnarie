import React, {Component} from 'react';
import {connect} from 'react-redux';
import headerIcon from '../assets/CareNote.png';
class Header extends Component {
    componentWillMount() {
    }

    selectItem = ( value )=>{

    };

    render() {

        return(
            <section className="header">
                <div className="header-container">
                    <div className="logo" onClick={function () {
                        document.location = '/'
                    }}>
                        <img src={headerIcon} />
                    </div>
                </div>

            </section>
        )

    }
}

const mapStateToProps = state => {
    return {
    };
};
const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Header) ;
