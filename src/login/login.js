import React, { Component } from 'react';
import logoImage from '../assets/images/logo-web.png'
import '../assets/css/theme.css'
import '../assets/css/skins/default.css';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as authAction from "../actions/auth.action";
import * as userAction from "../actions/user.action";
import { headers } from "../config";
import { ToastContainer, toast } from 'react-toastify';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fields: {},
      errors: {},
      users: {},
      rememberMe: false
    };

  }

  componentDidMount() {
    let rememberMe = localStorage.getItem("app-rememberMe") === 'true'
    let rememberName = localStorage.getItem("app-userName")
    let rememberPassword = localStorage.getItem("app-password")
    console.log(rememberMe, rememberName, rememberPassword)
    if (!rememberMe) {
      this.setState({ rememberMe, email: "", password: "" })
    } else {
      this.setState({ rememberMe: true, email: rememberName ? rememberName : "", password: rememberPassword ? rememberPassword : "" })
    }
  }

  handleValidation() {
    if (this.state.email === "" || this.state.password === "") {
      return false
    } else {
      return true;
    }
  }

  handleCheck = () => {
    this.setState({ rememberMe: !this.state.rememberMe });
  }

  authSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      let obj = {
        email: this.state.email,
        password: this.state.password
      }
      //  authAction.login(obj).then(res=>{
      //    console.log(res)
      //      if(res.status===200){
      //        res=res['data']
      //      let user={
      //       userId:res.userId,
      //       userType:res.userType
      //      }
      console.log(this.state.rememberMe)
      if (this.state.rememberMe) {
        localStorage.setItem("app-userName", this.state.email)
        localStorage.setItem("app-password", this.state.password)
        localStorage.setItem("app-rememberMe", true)
      } else {
        localStorage.removeItem("app-userName")
        localStorage.removeItem("app-password")
        localStorage.removeItem("app-rememberMe")

      }
      localStorage.setItem("app-token", 'token')




      //     localStorage.setItem("user",user)
      //     headers.headers.Authorization="JWT "+res.token
      //      this.props.getMyProfile()

      // if (user.userType === 2 || user.userType === 1) {
      if (false) {
        toast.error("You are not allow to login", {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        toast.success("Login success", {
          position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(() => {
          this.props.history.push('/dashboard')
        }, 1000);
      }
      //    }else{
      //      toast.error( res.data.message.message, {
      //       position: toast.POSITION.TOP_RIGHT
      //   });     
      //   }
      //  }).catch(e=>{
      //    console.log(e)
      //    toast.error( "Something went wrong", {
      //     position: toast.POSITION.TOP_RIGHT
      // });    
      //  })
    } else {
      toast.error("Pease enter username and password", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

  }

  handleChange = (e) => {
    if (e.target.name === "email") {
      let mailValidation = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      if (mailValidation) {
        this.setState({ validationError: "Email is not valid" })
      }
    }
    if (e.target.name === "password") {
      let PasswordValidation = e.target.value.length > 6
      if (PasswordValidation) {
        this.setState({ validationError: "Password must be more then 6 charecter" })
      }
    }
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <section className="body-sign">
        <div className="center-sign">
          <a className="logo float-left"><img src={logoImage} height="54" alt="logo" /></a>
          <div className="panel card-sign">
            <div className="card-title-sign mt-0 text-right">
              <h2 className="title text-uppercase font-weight-bold m-0"><i className="fas fa-user mr-1"></i> Sign In</h2>
            </div>
            <div className="card-body">
              <form name="authform" method="post" >
                <div className="form-group mb-3">
                  <label>Email</label>
                  <div className="input-group">
                    <input name="username" type="text" className="form-control form-control-lg" placeholder="Username" name="email" onChange={this.handleChange} onKeyUp={this.handleChange} value={this.state.email} />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </span>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <div className="clearfix">
                    <label className="float-left">Password</label>
                  </div>
                  <div className="input-group">
                    <input name="pwd" type="password" className="form-control form-control-lg" placeholder="Password" name="password" onChange={this.handleChange} onKeyUp={this.handleChange} value={this.state.password} />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-lock"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="checkbox-custom checkbox-default">
                      <input type="checkbox" onChange={e => this.setState({ rememberMe: !this.state.rememberMe })} checked={this.state.rememberMe} />
                      <label>Remember Me</label>
                    </div>
                  </div>
                  <div className="col-sm-4 text-right">
                    <button id="submit" onClick={e => this.authSubmit(e)} value="Submit" className="btn btn-primary mt-2">Sign In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center  fs-18 mt10 c-pointer" onClick={e => { this.props.history.push('/forgot-password') }}>Forgot Password</div>
          <p className="text-center text-muted mt-3 mb-3">&copy; Copyright 2019. All Rights Reserved.</p>
        </div>
        <ToastContainer />
      </section>
    );
  }
}




function mapStateToProps(state) {
  return {

  }
}

function mapActionToProps(dispatch) {
  return {
    getMyProfile: (obj) => { dispatch(userAction.getMyProfile()) }
  };
}


export default withRouter(connect(mapStateToProps, mapActionToProps)(Login));
