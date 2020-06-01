import React, { Component } from 'react';
import userImg from '../assets/images/user.jpg';
import '../assets/css/theme.css'
import '../assets/css/skins/default.css'
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import * as userAction from "../actions/user.action";
import Webcam from "react-webcam";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import { baseUrl } from '../config';
import Popup from "reactjs-popup";
import moment from "moment";
import _ from 'lodash'
import 'rc-datepicker/lib/style.css';

import { DatePickerInput } from 'rc-datepicker';

const date = '2015-06-26' // or Date or Moment.js

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      profile: {},
      takePhoto: false,
      profileImage: "",
      webCamError: "",
      capturedImage: ""
    }
  }
  onChange = (date) => {
    console.log(date)

    this.setState(prevState => ({
      profile: {
        ...prevState.profile,
        dob: new Date(date)   // moment(date).format('MM-DD-YYYY')       
      }
    }))
  }
  updateProfile = () => {
    let profile = {
      firstname: this.state.profile.firstname,
      lastname: this.state.profile.lastname,
      address: this.state.profile.address,
      phoneNumber: parseInt(this.state.profile.phoneNumber),
      city: this.state.profile.city,
      zipcode: parseInt(this.state.profile.zipcode),
      state: this.state.profile.state,
      dob: this.state.profile.dob ? moment(this.state.profile.dob).format("YYYY-MM-DD HH:mm:ss") : moment().format("DD-MM-YYYY"),
      gender: this.state.profile.gender

    }
    console.log(profile)
    if (profile.phoneNumber.toString().length > 10 || profile.phoneNumber.toString().length < 10) {
      toast.error("phone number should be 10 digits ", {
        position: toast.POSITION.TOP_RIGHT
      });

    } else {
      userAction.updateProfile(profile).then(res => {

        if (res.statusCode === 200) {
          this.setState({ editMode: false, profile: res.data })
          toast.success("Profile Successfullly Updated", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      }).catch(e => {
        console.log(e)
        toast.error("something went wrong", {
          position: toast.POSITION.TOP_RIGHT
        });
      })
    }
  }
  HistoryPush = (path) => {
    this.props.history.push(path)

  }
  componentDidMount() {
    if (_.isEmpty(this.props.profile)) {
      this.props.getMyProfile()
    } else {
      this.myProfile(this.props.profile)
    }
  }

  myProfile = (profile) => {
    this.setState({ profile })
  }
  componentWillReceiveProps(nextProps) {
    this.myProfile(nextProps.profile)

  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleatientDetailChange = (e) => {
    let profile = this.state.profile
    profile[e.target.name] = e.target.value
    this.setState({ profile })
  }
  onUserMediaError = (event) => {

    this.setState({
      webCamError: "Cam not found"
    })
  }
  setRef = webcam => {
    this.webcam = webcam;
  };
  updateProfilePic = () => {
    let base64 = { profileImg: this.state.capturedImage }


    userAction.updateUserProfile(this.state.profile.id, base64).then(Response => {
      if (Response.statusCode === 200) {
        this.props.getMyProfile()
        this.setState({ takePhoto: false, editMode: false, capturedImage: "" })
      } else {
        toast.error(Response.message ? Response.message : "Something went wrong", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    })
  }
  capture = () => {
    if (this.state.webCamError === "") {
      this.setState({ capturedImage: this.webcam.getScreenshot() })
    } else {
      toast.error(this.state.webCamError, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
  render() {
    const { editMode, profile } = { ...this.state }
    return (
      <section role="main" className="content-body">

        <header className={'page-header ' + (this.state.showMenu ? '' : 'header-left')}>
          <h2>Profile</h2>
          {!editMode ? <i className="fas fa-edit float-right text-white p20"
            onClick={() => { this.setState({ editMode: true }) }} data-toggle="tooltip" title={"Edit"}></i> : <i data-toggle="tooltip" title={"Cancel"} className="fas fa-times fa-lg float-right text-white p20"
              onClick={() => { this.setState({ editMode: false }) }}></i>}

        </header>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 mb-4 mb-xl-0 mt-sm-3">
            <section className="card">
              <div className="card-body">
                <div className="thumb-info mb-3">
                  <img src={this.state.profile.profileImg ? baseUrl + this.state.profile.profileImg : userImg} alt={this.state.profile.profileImg ? baseUrl + this.state.profile.profileImg : userImg} className="rounded img-fluid" alt="User Image" />
                  <div className="thumb-info-title">
                    <span className="thumb-info-inner"> User Name  {this.state.profile.firstname} {this.state.profile.lastname}</span>
                  </div>
                </div>
                {this.state.editMode ?
                  <div className="text-center">

                    <i class="fas fa-camera  text-primary fa-3x " data-toggle="tooltip" data-placement="right" title="Open Webcam" onClick={e => { this.setState({ takePhoto: true }) }}></i>
                  </div>
                  : null}
              </div>
            </section>
          </div>
          <Popup
            open={this.state.takePhoto}
            closeOnDocumentClick={false}
            onClose={e => this.setState({ takePhoto: false })}
          >
            <div className="model-close p-3">
              <h3 className="mt0 mb0"><b>Update Profile picture</b>
                <a className="close" onClick={e => this.setState({ takePhoto: false })}>
                  &times;
                        </a></h3>
            </div>
            <hr className="mt0 mb0" />
            <form className="p-3">
              <div className="form-row">
                <div className=" col-md-12 text-center" >
                  <span className="text-center">

                    {this.state.capturedImage === "" ? <Webcam className="take-picture"
                      audio={false} ref={this.setRef}
                      screenshotFormat="image/jpeg" onUserMediaError={e => this.onUserMediaError(e)} /> :
                      <img src={this.state.capturedImage} className="rounded img-fluid take-picture" alt="User Image" />
                    }

                    {this.state.capturedImage === "" ?
                      <div className="text-center">
                        <i class="fas fa-camera text-primary fa-3x" data-toggle="tooltip" title="Take Picture" onClick={e => this.capture()} ></i>
                      </div>
                      : <div className="text-center">
                        <i class="fas fa-retweet text-primary fa-3x" data-toggle="tooltip" title="Re-Take" onClick={e => this.setState({ capturedImage: "" })}></i>
                        <i class="fas fa-save text-primary fa-3x ml-2" data-toggle="tooltip" data-placement="right"
                          title="Save Image" onClick={e => this.updateProfilePic()}></i></div>}
                  </span>
                </div>


              </div>
            </form>
          </Popup>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 profile-result">

            <div className="custom-tabs">
              <Tabs>
                <TabList>
                  <Tab style={{ cursor: 'default' }}>Profile Details</Tab>
                </TabList>
                <TabPanel>


                  <form className="p-3">
                    {this.state.editMode === true ? <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputAddress" className="form-group ">First Name </label>
                        <input type="text" name="firstname" onKeyUp={e => this.handleatientDetailChange(e)} onChange={e => this.handleatientDetailChange(e)} value={this.state.profile.firstname ? this.state.profile.firstname : ""} className="form-control" id="inputAddress" />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputAddress" className="form-group ">Last Name </label>
                        <input type="text" name="lastname" onKeyUp={e => this.handleatientDetailChange(e)} onChange={e => this.handleatientDetailChange(e)} value={this.state.profile.lastname ? this.state.profile.lastname : ""} className="form-control" id="inputAddress" />
                      </div>
                    </div> : null}

                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputAddress" className="form-group ">Gender </label>
                        {!this.state.editMode ?
                          <input type="text" name="gender"
                            onChange={e => this.handleatientDetailChange(e)}
                            onKeyUp={e => this.handleatientDetailChange(e)}
                            disabled={true}
                            value={this.state.profile.gender ? this.state.profile.gender : ""}
                            className="form-control" id="inputGender" /> :
                          <select type="text" name="gender"
                            value={this.state.profile.gender ? this.state.profile.gender : ""}
                            onChange={e => this.handleatientDetailChange(e)}
                            onKeyUp={e => this.handleatientDetailChange(e)}
                            className="form-control" >
                            <option selected>Choose...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>}
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="inputDob" className="form-group ">DOB </label>
                        {editMode ?
                          <div>
                            <DatePickerInput
                              type="button"
                              value={profile.dob ? new Date(profile.dob) : new Date()}
                              onChange={this.onChange}
                              className='my-custom-datepicker-component'
                            />
                          </div> :
                          <input type="text" name="dob" disabled={true}
                            value={profile.dob ? moment(profile.dob).format("MM/DD/YYYY") : moment().format("DD-MM-YYYY")}
                            className="form-control" id="inputDob"
                          />

                        }


                      </div>

                    </div>

                    {/* <div className="form-row">
   <div className="form-group col-md-6">
       <label htmlFor="inputEmail">Email</label>
       <input type="text"  disabled={true} name="email" 
       onKeyUp={e=>this.handleatientDetailChange(e)} 
        onChange={e=>this.handleatientDetailChange(e)} 
          value={this.state.profile.email ?this.state.profile.email:"" } 
           className="form-control" id="inputEmail" />
   </div>
   <div className="form-group col-md-6">
       <label htmlFor="inputphone">Phone</label>
       <input type="number"  disabled={!this.state.editMode} 
       name="phoneNumber"  onKeyUp={e=>this.handleatientDetailChange(e)}  onChange={e=>{this.handleatientDetailChange(e)}}  
        value={parseInt(this.state.profile.phoneNumber)?parseInt(this.state.profile.phoneNumber):""}  className="form-control" id="inputPhone"
        />
   </div>
                                            </div> 
 */}


                    <div className="form-group">
                      <label htmlFor="inputAddress" className="w-100">Address </label>
                      <input type="text" disabled={!this.state.editMode} name="address" onKeyUp={e => this.handleatientDetailChange(e)} onChange={e => this.handleatientDetailChange(e)} value={this.state.profile.address ? this.state.profile.address : ""} className="form-control" id="inputAddress" />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" disabled={!this.state.editMode} name="city" onKeyUp={e => this.handleatientDetailChange(e)} onChange={e => this.handleatientDetailChange(e)} value={this.state.profile.city ? this.state.profile.city : ""} className="form-control" id="inputCity" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <input type="text" disabled={!this.state.editMode} name="state"
                          value={this.state.profile.state ? this.state.profile.state : ""} onKeyUp={e => this.handleatientDetailChange(e)}
                          onChange={e => this.handleatientDetailChange(e)} className="form-control" />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" disabled={!this.state.editMode} name="zipcode" onKeyUp={e => this.handleatientDetailChange(e)} onChange={e => this.handleatientDetailChange(e)} value={this.state.profile.zipcode ? this.state.profile.zipcode : ""} className="form-control" id="inputZip" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="text" disabled={true} name="email" onKeyUp={e => this.handleatientDetailChange(e)} onChange={e => this.handleatientDetailChange(e)} value={this.state.profile.email ? this.state.profile.email : ""} className="form-control" id="inputEmail" />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputphone">Phone</label>
                        <input type="number" disabled={!this.state.editMode}
                          name="phoneNumber" onKeyUp={e => this.handleatientDetailChange(e)} onChange={e => { this.handleatientDetailChange(e) }}
                          value={parseInt(this.state.profile.phoneNumber) ? parseInt(this.state.profile.phoneNumber) : ""} className="form-control" id="inputPhone"
                        />
                      </div>
                    </div>
                    {this.state.editMode === true ?
                      <div className="text-right">
                        <button type="button" onClick={e => this.updateProfile()} className="btn btn-primary border-0 mr-1"><i className="fas fa-save text-white mt-1 mr-1"></i>Update</button>
                        <button type="button" onClick={e => this.setState({ editMode: !this.state.editMode })} className="btn btn-danger border-0 mr-2">Cancel</button>
                      </div>
                      : null}
                  </form>

                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.login.my_profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMyProfile: () => { dispatch(userAction.getMyProfile()) }

  }
}
export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(Profile)
  ;