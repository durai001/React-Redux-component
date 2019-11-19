import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.scss';
// import loginImg from '../assets/images/login.jpg'

type MyProps = { login: any };
type MyState = { loginObj: object };

class loginComponent extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = ({
            loginObj: {}
        })
    }

    handleChange = (e: any) => {
        toast.error("", {
            position: toast.POSITION.TOP_RIGHT
        });
        // let user = { ...this.state }
    }
    UNSAFE_componentWillReceiveProps(nextProps: any) {
        console.log(nextProps)
    }

    render() {
        // let users=this.state['user']
        return (
            <div className="home">
                <form>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer01">First name</label>
                            <input onChange={e => this.handleChange(e)} type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer02">Last name</label>
                            <input onChange={e => this.handleChange(e)} type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServerUsername">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                </div>
                                <input onChange={e => this.handleChange(e)} type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationServer03">City</label>
                            <input onChange={e => this.handleChange(e)} type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer04">State</label>
                            <input onChange={e => this.handleChange(e)} type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer05">Zip</label>
                            <input onChange={e => this.handleChange(e)} type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input onChange={e => this.handleChange(e)} className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                            <label className="form-check-label" htmlFor="invalidCheck3">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit form</button>
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
        login: () => { return dispatch() },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);