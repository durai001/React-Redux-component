import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import loginImg from '../assets/images/login.jpg'


class loginComponent extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            user: { mail: "", password: "" }
        }
    }
    login = (e: any) => {
        toast.success("Logged In Successfully", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    handleChange = (e: any) => {
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mt-3">Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="username" />

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
					</div>
                            </form>
                            <div className="form-group">
                                <button className="btn float-right login_btn" onClick={(e) => this.login(e)}> Login </button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<span className="text-primary c-pointer" >Sign Up</span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <span className="text-primary c-pointer" >Forgot your password?</span>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

function mapStateToProps(state: object) {
    return {

    };
}

function mapDispatchToProps(dispatch: any) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);