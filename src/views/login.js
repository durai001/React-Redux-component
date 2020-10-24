import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../assets/css/login.css"
import logo from "../assets/img/react-logo.png"
// import Axios from 'axios';
// import { baseUrl } from '../config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as types from "../store/actions/types";
import {
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";
import '../styles/login.css'
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPopup: false
        }
    }
    login = (e) => {
        e.preventDefault();
        let { email, password } = { ...this.state }
        let formdata = new FormData()
        formdata.append('email', email)
        formdata.append('password', password)
        // Axios.post(baseUrl + '/profiles/login', formdata).then(res => {
        //     if (res['data'].status === 200) {
        //         let user = res['data']
        //         this.props.LoggedUser(user['first_name'])
        //         sessionStorage.setItem('loggeduser_profile_id',user['profile_id'])   
        //         this.props.Header("User Details")
        this.props.history.push('/userDetails')
        //     } else {
        //         this.toasterHandler("error", "Invalid Credentials")
        //     }
        // }).catch(e=>{
        //     this.toasterHandler("error", "Login Failed")
        // })

    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    toasterHandler = (type, msg) => {
        toast[type](msg, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
    render() {
        return (
            <div className="login-container">
                <Card className="login-card col-sm-6" >
                    <CardTitle>
                        <div className="float-left">
                            <span className="logo">
                                <img className="" src={logo} className="logo-img" alt="Component-Logo" />
                            </span>
                            <span> COMPONENT - LOGIN</span>
                        </div>
                    </CardTitle>

                    
                    <CardBody>
                        <form className="was-validated " onSubmit={e => this.login(e)}>
                            <div >
                                <div>
                                    <label htmlFor="email" className="float-left font-weight-bold" >Email</label>
                                    <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} required />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="password" className="float-left font-weight-bold mt-3" >Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} required />
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <button type="submit" className="btn btn-primary float-right" > Log In</button>
                            </div>
                        </form>

                    </CardBody>
                        <div className=" text-center fs13 mb-3">
                            Copy Rights 2020 - Type any username and password to login
                        </div>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        LoggedUser: (user) => { return dispatch({ type: types.LOGGED_USER, payload: user }) },
        Header: (title) => { return dispatch({ type: types.PAGE_TITLE, payload: title }) },
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));