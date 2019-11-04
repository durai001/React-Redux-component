import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as loginAction from "../actions/auth.action";
import 'react-toastify/dist/ReactToastify.css';

// import loginImg from '../assets/images/login.jpg'

type MyProps = {login:any};
type MyState = { loginObj: object };

class loginComponent extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = ({
            loginObj: {}
        })
    }
    login = (e: any) => {
        this.props.login(this.state.loginObj).then((res:any)=>{
            console.log(res)
            if(res&&res.payload&&res.payload.status===200){
                toast.success("Logged In Successfully", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }else{
                toast.error("Something Went Wrong", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            
        })
       
    }
    handleChange = (e: any) => {

        // let user = { ...this.state }
    }
    componentWillReceiveProps(nextProps: any) {
        console.log(nextProps)
    }

    render() {
        let loginObj: any = this.state.loginObj
        // let users=this.state['user']
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
                                        <span className="input-group-text"> <i className="fas fa-envelope-square"></i></span>
                                    </div>
                                    <input type="text" className="form-control" value={loginObj.mail} onChange={e => { this.setState({ loginObj: { ...loginObj, mail: e.target.value } }) }} placeholder="email" />

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" value={loginObj.password} onChange={e => { this.setState({ loginObj: { ...loginObj, password: e.target.value } }) }} placeholder="password" />
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

function mapStateToProps(state: any) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch: any) {
     return {
         login:(loginobj:object)=>{return dispatch(loginAction.login(loginobj))},
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);