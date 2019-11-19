import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as loginAction from "../actions/auth.action";
import { withRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../scss-styles/pages/login.scss'


type MyProps = { login: any, history: { push: any } };
type MyState = { loginObj: object };

class loginComponent extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = ({
            loginObj: {}
        })
    }
    login = (e: any) => {
        e.preventDefault();
        this.props.login(this.state.loginObj).then((res: any) => {
            console.log(res)
            if (res && res.payload && res.payload.status === 200) {
                toast.success("Logged In Successfully", {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                this.props.history.push('/home')
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
        return (
            <div className="login">
                <form className="login-form" action="#">
                    <div className="input-group input-group-lg">
                        <div className="input-group-addon"><span className="fa fa-lg fa-envelope mt-3" /></div>
                        <input type="email" className="form-control" id="user-name" placeholder="Email" required />
                    </div>
                    <div className="input-group input-group-lg">
                        <div className="input-group-addon"><span className="fa fa-lg fa-key mt-3" /></div>
                        <input type="password" className="form-control" id="password" placeholder="Password" required  />
                    </div>
                    <input type="submit" id="login" className="btn btn-primary fa-lg" value="Sign in" onClick={e => this.login(e)} />
                    <span className="text-primary c-pointer" onClick={e=>{this.props.history.push('/sign-up')}}>Sing-Up</span>
                    <div className="login-bar">
                        <input type="checkbox" id="stay-signed-in" tabIndex={4} />
                        <label htmlFor="stay-signed-in">Keep me signed in</label>
                        <a href="#" className="pull-right">Forgotten your password?</a>
                    </div>
                </form>
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
        login: (loginobj: object) => { return dispatch(loginAction.login(loginobj)) },
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(loginComponent));