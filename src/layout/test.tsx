import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as loginAction from "../actions/auth.action";
import 'react-toastify/dist/ReactToastify.css';

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
            <div>
                {/* <form>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer01">First name</label>
                            <input onChange={e=>this.handleChange(e)} type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer02">Last name</label>
                            <input onChange={e=>this.handleChange(e)} type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required />
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
                                <input onChange={e=>this.handleChange(e)} type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationServer03">City</label>
                            <input onChange={e=>this.handleChange(e)} type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer04">State</label>
                            <input onChange={e=>this.handleChange(e)} type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer05">Zip</label>
                            <input onChange={e=>this.handleChange(e)} type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input onChange={e=>this.handleChange(e)} className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                            <label className="form-check-label" htmlFor="invalidCheck3">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </form> */}
               
               <div data-component="navbar">

<nav className="navbar p-0 fixed-top">
      <button className="navbar-toggler navbar-toggler-left rounded-0 border-0" type="button" data-toggle="collapse" data-target="#megamenu-dropdown" aria-controls="megamenu-dropdown" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars"></i><span className="ml-3">Advanced</span>
      </button>
  
  <div><a className="navbar-brand px-1" href="#"><img src="http://kris.agentfire2.com/wp-content/mu-plugins/agentfire-shared-library/img/agentfire.svg" className="d-inline-block mt-1" alt="AgentFire Logo" height="40"/></a>

  <div className="right-links float-right mr-4">
    <a href="#" className="home"><i className="fa fa-home mr-3"></i></a>
    
    <div className="d-inline dropdown rounded-0 mx-3">
      <a className="dropdown-toggle" id="tools" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i className="fa fa-wrench" aria-hidden="true"></i></a>
      <div className="dropdown-menu dropdown-menu-right rounded-0 text-center" aria-labelledby="tools">
        <a className="dropdown-item px-2" href="#">Recompile CSS</a>
      </div>
    </div>  
    
    <div className="d-inline dropdown mr-3">
      <a className="dropdown-toggle" id="notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><span>10</span><i className="fa fa-bell"></i></a>
      <div className="dropdown-menu dropdown-menu-right rounded-0 pt-0" aria-labelledby="notifications">
        <div className="list-group">
          <div className="lg">
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
              <h5 className="mb-1">Real Estate Marketing Automation: 6 Simple Systems</h5>
              <p className="mb-0">17 October 2016 | 9:32 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">How to Generate Seller Leads For $0.88 Using...</h5>
              <p className="mb-0">3 October 2016 | 9:58 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">AgentFire Re-Opens For Business. New Services,...</h5>
              <p className="mb-0">20 September 2016 | 6:28 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">Real Estate Blogging 101: How To Get Better...</h5>
              <p className="mb-0">7 September 2016 | 3:03 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">How To Get More Listings With Strategic...</h5>
              <p className="mb-0">16 August 2016 | 8:26 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">How To Find Strategic Real Estate Partners as...</h5>
              <p className="mb-0">9 August 2016 | 6:44 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">Top 10 Real Estate Marketing Tools</h5>
              <p className="mb-0">2 August 2016 | 10:25 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">The Beginner Guide To Google Adwords For Real...</h5>
              <p className="mb-0">27 July 2016 | 1:15 am</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">The Complete Guide To Hyper-Local SEO For Realtors</h5>
              <p className="mb-0">19 July 2016 | 5:51 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">How We Took Ed Eakin’s Real Estate Website...</h5>
              <p className="mb-0">11 July 2016 | 6:19 pm</p>
            </a>
          </div>  
        </div> 
      </div>  
    </div>  
    
    <div className="d-inline dropdown mr-3">
      <a className="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i className="fa fa-envelope"></i></a>
      <div className="dropdown-menu dropdown-menu-right rounded-0 text-center" aria-labelledby="messages">
        <a className="dropdown-item">There are no new messages</a>
      </div>  
  </div>  
    
    
    <div className="d-inline dropdown">
      <a className="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
        <img src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g"/>
      </a>
      <div className="dropdown-menu dropdown-menu-right rounded-0" aria-labelledby="messages">
        <a className="dropdown-item" href="#">Edit my profile</a>
        <a className="dropdown-item" href="#">Log Out</a>
      </div> 
    </div>  
    
  </div> 
  
  </div>
  
  
  
  
  
  
  
  
  
  
  
  <div className="megamenu">
        <div className="collapse navbar-collapse" id="megamenu-dropdown">
        <div className="megamenu-links">
      <div className="row">
        <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3 pl-5" data-toggle="collapse" href="#menuOne" aria-expanded="false" aria-controls="collapseExample" id="more">Slider Revolution
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a> 
          <div className="collapse" id="menuOne">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Slider Revolution</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Navigation Editor</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Add-Ons</a>
            </div>  
          </div> 
        </div> 
        
        <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3" data-toggle="collapse" href="#menuTwo" aria-expanded="false" aria-controls="collapseExample" id="more">Flyouts
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a>  
          <div className="collapse" id="menuTwo">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">All Flyouts</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Add new Flyout</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Re-Order</a>
            </div>  
          </div>
        </div>
        <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3" data-toggle="collapse" href="#menuThree" aria-expanded="false" aria-controls="collapseExample" id="more">Cornerstone 
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a> 
          <div className="collapse" id="menuThree">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Cornerstone</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Cornerstone</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Cornerstone</a>
            </div> 
          </div>
        </div>
        </div>
          <div className="row">
            <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3 pl-5" data-toggle="collapse" href="#menuFour" aria-expanded="false" aria-controls="collapseExample" id="more">Ess. Grid
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a>  
          <div className="collapse" id="menuFour">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Essential Grid</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Item Skin Editor</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Meta Data Handling</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Search Settings</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Global Settings</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Import/Export</a>
            </div> </div></div>
            <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3" data-toggle="collapse" href="#menuFive" aria-expanded="false" aria-controls="collapseExample" id="more">AgentFire CTA Plus
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a>  
          <div className="collapse" id="menuFive">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Essential Grid</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Item Skin Editor</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Meta Data Handling</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Search Settings</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Global Settings</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Import/Export</a>
            </div> </div></div>
          </div>
    </div>  
      </div></div>
</nav>
</div>  



<div data-component="sidebar">
  <div className="sidebar">
  <ul className="list-group flex-column d-inline-block first-menu">
    <li className="list-group-item pl-3 py-2">
      <a href="#"><i className="fa fa-user-o" aria-hidden="true"><span className="ml-2 align-middle">Reporting</span></i></a>
      
      <ul className="list-group flex-column d-inline-block submenu">
        <li className="list-group-item pl-4">
          <a href="#" className="">Dashboard</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow"></span>
            <li className="list-group-item pl-4">
              <a href="#">Home</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">My Sites</a>
            </li>
          </ul>
          
        </li> 
        
        <li className="list-group-item pl-4">
          <a href="">SEO</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"113px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Dashboard</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Titles & Metas</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Social</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">XML Sitemaps</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Advanced</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Tools</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Search Console</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Go Premium</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Manual</a>
            </li>
          </ul>
        
        </li>
      </ul> 
    </li>  
    
    <li className="list-group-item pl-3 py-2">
      <a href="#"><i className="fa fa-user-o" aria-hidden="true"><span className="ml-2 align-middle">Content</span></i></a>
      <ul className="list-group flex-column d-inline-block submenu">
        <li className="list-group-item pl-4">
          <a href="#" className="">Posts</a>
        
        <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow"></span>
            <li className="list-group-item pl-4">
              <a href="#">All Posts</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New</a>
            </li>
          <li className="list-group-item pl-4">
              <a href="#">Categories</a>
            </li>
          <li className="list-group-item pl-4">
              <a href="#">Tags</a>
            </li>
          </ul>
        </li>  
        
        <li className="list-group-item pl-4">
          <a href="#" className="">Blog Assist</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"114px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Add New Blog Post</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Feed Sources</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New Feed Source</a>
            </li>
          </ul>
        </li>  
        
        
        <li className="list-group-item pl-4">
          <a href="#" className="">Pages</a>
        
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"166px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">All Pages</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New</a>
            </li>
          </ul>
        </li>  
        
        
        <li className="list-group-item pl-4">
          <a href="#" className="">Area Content</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"220px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">All Cities</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New City</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">All Neighborhoods</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New Neighborhood</a>
            </li>
          </ul>
        </li>  
        
        
        <li className="list-group-item pl-4">
          <a href="#" className="">Manual Listings</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"272px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">View All Listings</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New Listing</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Status</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Locations</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Property Types</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Import Listing</a>
            </li>
          </ul>
        </li>  
        
        <li className="list-group-item pl-4">
          <a href="#" className="">Testimonials</a>
        
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"323px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">View All</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Categories</a>
            </li>
          </ul>
        </li>  
        
        <li className="list-group-item pl-4">
          <a href="#" className="">Team Members</a>
        
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"377px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">All Members</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New Member</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Designations</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Specialties</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Areas</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">All Locations</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New Location</a>
            </li>
          </ul>
        </li>  
      
      </ul> 
    </li>  
    
    <li className="list-group-item pl-3 py-2">
      <a href="#">
        <i className="fa fa-user-o" aria-hidden="true"><span className="ml-2 align-middle">Engagement</span></i>
      </a>
      <ul className="list-group flex-column d-inline-block submenu">
        
        <li className="list-group-item pl-4">
          <a href="#" className="">Comments</a>
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow"></span>
            <li className="list-group-item pl-4">
              <a href="#">Comments</a>
            </li>
          </ul>
        </li>
        
        <li className="list-group-item pl-4">
          <a href="#" className="">Forms</a>
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"114px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">All Forms</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">New Form</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">All Entries</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Gravity Forms</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Import/Export</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Gravity Forms Tutorials</a>
            </li>
          </ul>
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">Home Valuation</a>
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"166px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">View All Leads</a>
            </li>
          </ul>
        </li>
      </ul> 
    </li>  
    
    
    <li className="list-group-item pl-3 py-2">
      <a href="#"><i className="fa fa-user-o" aria-hidden="true"><span className="ml-2 align-middle">Image Center</span></i></a>
      
      <ul className="list-group flex-column d-inline-block submenu">
        <li className="list-group-item pl-4">
          <a href="#" className="">Media Library</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow"></span>
            <li className="list-group-item pl-4">
              <a href="#">Media Library</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New</a>
            </li>
          </ul>
          
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">Soliloquy Slider</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"114px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">All Sliders</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New</a>
            </li>
          </ul>
        
        </li>
      </ul>
    </li>
    
    <li className="list-group-item pl-3 py-2">
      <a href="#"><i className="fa fa-user-o" aria-hidden="true"><span className="ml-2 align-middle">Settings</span></i></a>
      <ul className="list-group flex-column d-inline-block submenu">
        <li className="list-group-item pl-4">
          <a href="#" className="">Users</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow"></span>
            <li className="list-group-item pl-4">
              <a href="#">All Users</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Add New</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Your Profile</a>
            </li>
          </ul>
        
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">AgentFire Settings</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"114px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Home Valuation</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Testimonials</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Team Members</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Area Content</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Manual Listings</a>
            </li>
          </ul>
        
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">Grids Settings</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"166px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Ess. Grid Search Settings</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Ess. Grid Global Settings</a>
            </li>
          </ul>
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">Plugin Settings</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"220px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Soliloquy</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Flickr - Pick a Picture</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Google Analytics</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Google Maps</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">JackBox</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Media</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">No Page Comment</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Post Types Order</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Shortcode any widget</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">WP RSS Images</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">SNAP</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">WP Sitemap Page</a>
            </li>
          </ul>
        
        
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">WordPress Settings</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"272px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">General</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Discussion</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Reading</a>
            </li>
          </ul>
        
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">Re-Order</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"323px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Posts</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Pages</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Media Library</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Blog Assist</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Area Content</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Manual Listings</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Testimonials</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Team Members</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Flyouts</a>
            </li>
          </ul>
        
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">Site Appearance</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"377px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Widgets</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Menus</a>
            </li>
          </ul>
        
        </li>
      </ul>
    
    </li>
    
    <li className="list-group-item pl-3 py-2">
      <a href="#"><i className="fa fa-user-o" aria-hidden="true"><span className="ml-2 align-middle">Support</span></i></a>
      <ul className="list-group flex-column d-inline-block submenu">
        <li className="list-group-item pl-4">
          <a href="#" className="">Training</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow"></span>
            <li className="list-group-item pl-4">
              <a href="#">Video Tutorials</a>
            </li>
          </ul>
        
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">Tutorials</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"114px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Help Desk</a>
            </li>
          </ul>
        
        </li>
        <li className="list-group-item pl-4">
          <a href="#" className="">Ask a Question</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{"top":"166px;"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Send Support Request</a>
            </li>
          </ul>
        
        </li>
      </ul>
    
    </li>
    
    
  </ul>  
</div>  
</div>

<div className="wp-content">
  <div className="container-fluid">
    CONTENT GOES HERE
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
        login: (loginobj: object) => { return dispatch(loginAction.login(loginobj)) },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);