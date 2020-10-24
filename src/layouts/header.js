import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import {DropdownToggle,DropdownMenu,DropdownItem,UncontrolledDropdown,NavLink} from "reactstrap";

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        }
      }
      componentDidMount(){
    //     let user=this.props.loggedUser 
    //     let title=this.props.headerTitle
    //     let res=(JSON.parse(sessionStorage.getItem('header')))
    //      if(!user){
    //         if(res && res.user){
    //             user=res.user
    //         }else{
    //             this.props.history.push("/login")
    //         }
    //      }
    //      if(!title){
    //         if(res && res.title){
    //             title=res.title
    //         }
    //      }
    //    this.setState({user:user,title:title})
    //    let obj={
    //     "user":user,
    //     "title":title
    //     }
    //     sessionStorage.setItem('header',JSON.stringify(obj) )   
     }
     logout = () => {
        sessionStorage.removeItem('header')
        sessionStorage.removeItem('loggeduser_profile_id')
        this.props.history.push("/login")
    }
    render() {
        return (
            <div>
                <header className="header">
                    <div className="row  d-flex justify-content-between ">
                        <div className=" text-primary  mt-4 bg-light">
                            <span className="ml85 h5 font-weight-bold">
                                {this.props.page}
                            </span>
                        </div>
                        <div className="text-right">
                            <div className="mt-1 mr-3 bg-light">
                            <UncontrolledDropdown nav className="border-0">
                            <DropdownToggle
                                caret
                                data-toggle="dropdown"
                                nav
                                onClick={e => e.preventDefault()}
                                className="bg-light"
                            >
                                <div className="name-profileImage ">{this.state.user ? this.state.user.charAt(0) : "UN"} </div>
                                <span className="d-inline ml-2">{this.state.user||"User name"}</span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-navbar" right tag="ul">
                                <NavLink tag="li">
                                <DropdownItem className="nav-item" onClick={e => this.props.history.push('/user-profile')}>Profile</DropdownItem>
                                </NavLink>
                                {/* <NavLink tag="li">
                                <DropdownItem className="nav-item">Settings</DropdownItem>
                                </NavLink> */}
                                <DropdownItem divider tag="li" />
                                <NavLink tag="li">
                                <DropdownItem className="nav-item" onClick={e => this.logout()}>Log out</DropdownItem>
                                </NavLink>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loggedUser: state.assessmentReducer.logged_user,
        headerTitle:state.assessmentReducer.headerTitle
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header));