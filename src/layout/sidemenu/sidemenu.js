
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import _ from 'lodash'
import Loader from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import * as userAction from "../../actions/user.action";

class Sidemenu extends Component {

    constructor() {
        super();
        this.state = {
            showLoader: false
        }
    }
    componentDidMount() {

        if (localStorage.getItem("app-token")) {
            this.props.getMyProfile()

        } else {
            this.HistoryPush('/')
        }
    }

    handleChange = (event) => {
        if (event.target.name === "translator") {
            event.target.value = parseInt(event.target.value)

        }
        this.setState({ [event.target.name]: event.target.value })
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.tokenExprired === true) {
            toast.warn("token expired", {
                position: toast.POSITION.TOP_RIGHT
            });
            localStorage.removeItem('app-token')
            setTimeout(() => {
                this.HistoryPush("/")

            }, 2000);
        }
    }
    HistoryPush = (path) => {
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="">
                {this.state.showLoader ? (
                    <div className="loading" >
                        <div className="loader">
                            <Loader
                                type="Watch"
                                color="#00BFFF"
                                height="100"
                                width="100"
                            />
                        </div>
                    </div>
                ) : null}

                <aside className={'sidebar-left ' + (this.props.showMenu ? '' : ' own-sidemenu-main closed')} id="sidebar-left">

                    <div className="sidebar-header">
                        <div className="sidebar-toggle d-none d-md-block" onClick={this.props.toggleMenu}>
                            <i className="fas fa-bars" aria-label="Toggle sidebar" onClick={this.props.toggleMenu}></i>
                        </div>
                    </div>

                    <div className="nano has-scrollbar">
                        <div className="nano-content" tabIndex="0">
                            <nav id="menu" className="nav-main" role="navigation">
                                <ul className="nav nav-main"  >
                                    <li className="c-pointer">
                                        <a className="nav-link fs-18" onClick={() => { this.HistoryPush('/dashboard') }}>
                                            <i className="fas fa-home"></i>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>

                                    <li className="c-pointer">
                                        <a className="nav-link fs-18" onClick={() => { this.HistoryPush('/admin') }}>
                                            <i className="fas fa-cog"></i>
                                            <span>Manage users</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </aside >
                <ToastContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tokenExprired: state.login.tokenExprired,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMyProfile: () => { dispatch(userAction.getMyProfile()) }


    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidemenu));

