import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import logoImage from '../../assets/images/logo-web.png';
import userImage from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import * as userAction from "../../actions/user.action";
import _ from 'lodash'
import { ToastContainer, toast } from 'react-toastify';
import { baseUrl } from '../../config';
import { stat } from 'fs';
 
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu:false,
      profile:this.props.profile,
      activeType:this.props.activeType
    }
  }
  
  componentDidMount(){
    if(window.location.pathname==="/scan"){
      this.setState({showPatientDetailsButton:true})
    }
    this.props.getMyProfile()
  // this.setState({profile:this.props.profile})
   }
  componentWillReceiveProps(nextProps){
 if(!_.isEmpty(nextProps.errorObj)){
  console.log(nextProps.errorObj)
  // toast.error(nextProps.errorObj.message.message, {
  //   position: toast.POSITION.TOP_RIGHT
  //   });
   if(nextProps.errorObj.status===400){
    // this.logOut()
   }
      
}   
     this.setState({profile:nextProps.profile})
  }
  logOut = () => {
    // this.props.newSession()
    localStorage.removeItem('app-token')
    this.props.history.push('/')
}
HistoryPush=(path)=>{
  this.props.history.push(path)
  this.setState({ displayMenu: false})

}
goToChangePassword=()=>{
  this.props.history.push('/change-password')
}
lockScreen=()=>{
  this.HistoryPush('/lock-screen')
}
  render() {
     return (
      <div>
        <header className="header header-nav-menu header-nav-stripe">
                <div className="logo-container">
					<a   className="logo">
          <img src={logoImage} className="c-pointer" width="166" height="35" alt="logo" onClick={()=>{this.HistoryPush('/dashboard')}}/>
          </a>
				 
					<div className="header-nav collapse">
						<div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
							<nav>
								{/* <ul className="nav nav-pills" id="mainNav">
									<li className="colorblue">
                      <NavLink to="/patient_management"  exact className={this.state.activeType==='session'?"nav-link menu-active mr-2":"nav-link mr-2 fs-18"} >
									        <i className="fas fa-american-sign-language-interpreting"></i> header navigation 1
                      </NavLink> 
                      
                      
									</li>
                  <li className="colorblue">
                  <NavLink to="/training-model"  exact className={this.state.activeType===''?"nav-link menu-active":"nav-link "} >
									        <i className="fas fa-american-sign-language-interpreting"></i> header navigation 2
                      </NavLink> 
                      
                  </li>
                </ul> */}
                </nav>
              </div>
           </div>
				</div>
				<span className="separator"></span>
				<div className="header-right">
					<span className="separator"></span>
					<div id="userbox" className="userbox">
                <a  onMouseLeave={e=>this.setState({displayMenu:false})} className="pointer" data-toggle="dropdown"
                    onClick={e=>this.setState({ displayMenu: !this.state.displayMenu })} >
                    <figure className="profile-picture"> <img src={this.state.profile.profileImg?baseUrl+this.state.profile.profileImg:userImage} alt="Joseph Doe" className="rounded-circle"/></figure>
                    <div className="profile-info">
                        <span className="name">{!_.isEmpty(this.state.profile)?this.state.profile.firstname+""+this.state.profile.lastname:"Optisol user"}</span>
                        <span className="role mt-1">{!_.isEmpty(this.state.profile)?this.state.profile.userType===3?"User":"Admin":"User"}</span>
                    </div>
                    {this.state.displayMenu ? <i class="fas fa-chevron-up"></i>
                    :
                    <i className="fas fa-chevron-down bg-white" ></i>
                    }
                    {this.state.displayMenu ? (
                      <ul  className="list-unstyled mb-2 admin-dropdown bg-white position-absolute p-2">
                          <li><a role="menuitem" tabIndex="-1" onClick={()=>{this.HistoryPush('/profile')}}><i className="fas fa-user pr-2"></i> My Profile</a> </li>
                          <li><a role="menuitem" tabIndex="-1" onClick={()=>{this.HistoryPush('/change-password')}}><i className="fas fa-user pr-2"></i> Change Password</a> </li>
                          <li><a role="menuitem" tabIndex="-1" onClick={e=>this.logOut(e)}><i className="fas fa-power-off pr-2"></i> Logout</a></li>
                      </ul>
                  ) :
                  null} 
                </a>
                
               
            </div>
				</div>
			</header>
       <ToastContainer />
      </div>

    )
  }
}
 
const mapStateToProps = (state) => {
  return {
    profile:state.login.my_profile,
    errorObj:state.login.errorObj
   }
}
const mapDispatchToProps = (dispatch) => {
return {
  getMyProfile:(obj)=>{return dispatch(userAction.getMyProfile())}

}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

