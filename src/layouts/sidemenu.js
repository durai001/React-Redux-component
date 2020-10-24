import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import logo from "../assets/img/react-logo.png"
import * as types from "../store/actions/types";

class sidemenu extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="side-menu ">
                <div className="logo-placeholder p-1">
                    <span className="logo ml-n1 c-pointer" onClick={e => { this.props.history.push("/userDetails") }}>
                        <img className="" src={logo} className="logo-img" alt="Component-Logo" />
                    </span>
                    <span className="ml-1 font-weight-bold"> COMPONENT </span>
                </div>
                <div className='menu-icon '> <i className="fas fa-angle-right fa-lg "></i></div>
                <div className="sidemenu-body ">
                    <div className="mb-2 mt-2 "
                        onClick={e => { this.props.history.push("/userDetails") }}
                    >
                        < i className="fas fa-users " ></i>
                        <span className="ml-3">User Details</span>
                    </div>

                </div>
            </div >
        );
    }
}


function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        Header: (title) => { return dispatch({ type: types.PAGE_TITLE, payload: title }) },

    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(sidemenu));