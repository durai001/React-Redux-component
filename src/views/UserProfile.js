
import React from "react";
import * as profileAction from "../store/actions/profile.action";
// import _  from 'lodash'
import * as types from "../store/actions/types";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        gender: "",
        company_name: "",

      },
      errorMsg: {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        gender: "",
        company_name: "",
      }

    }
  }
  componentDidMount() {
    //   let id=sessionStorage.getItem('loggeduser_profile_id')
    //   if (id) {
    //     this.setState({ profile_id: id },()=>
    //     this.getProfileData()
    //     )
    // } else {
    //     this.props.Header("User Details")
    //     this.props.history.push("/userDetails")
    // }

  }
  getProfileData = () => {
    let { userData } = { ...this.state }
    let formdata = new FormData()
    formdata.append('profile_id', this.state.profile_id)
    this.props.getProfile(formdata).then(response => {
      if (response.Status === 200) {
        let data = response['data']
        Object.keys(data).map((val, ind) =>
          userData[val] = data[val]
        )
        this.setState({ userData })
      } else {
        this.handleToastMessage("error", "Failed to load Profile")
      }
    }).catch((err) => {
      this.handleToastMessage("error", "Failed to load Profile")
    })
  }
  handleToastMessage = (type, message) => {
    toast[type](message)
  }
  handleChange = (e) => {
    let { userData, errorMsg } = { ...this.state }
    userData[e.target.name] = e.target.value
    errorMsg[e.target.name] = ""
    this.setState({ userData })

  }
  handleGenderChange = (val) => {
    let { userData } = { ...this.state }
    userData["gender"] = val
    this.setState({ userData })
  }

  validateUser = (user, password) => {
    let { errorMsg, errorFlag } = { ...this.state }
    let name = /^([a-zA-Z]{1,30})$/
    let mail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
    let company = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/
    errorFlag = false
    errorMsg = {}
    if (password) {
      if (!user.cur_password) {
        errorMsg['cur_password'] = "Invalid"
        errorFlag = true
      }
      if (!user.new_password) {
        errorMsg['new_password'] = "Invalid"
        errorFlag = true
      }
      if (!user.re_password) {
        errorMsg['re_password'] = "Invalid"
        errorFlag = true
      } else {
        if (user.re_password !== user.new_password) {
          errorMsg['re_password'] = "Password doesnt match"
          errorFlag = true
        }
      }
    } else {

      if (!user.first_name || !name.test(user.first_name)) {
        errorMsg['first_name'] = "Invalid"
        errorFlag = true
      }
      if (!user.last_name || !name.test(user.last_name)) {
        errorMsg['last_name'] = "Invalid"
        errorFlag = true
      }
      if (!mail.test(user.email)) {
        errorMsg['email'] = "Please enter a valid email"
        errorFlag = true
      }
      if (!company.test(user.company_name)) {
        errorMsg['company_name'] = "Please enter a valid Company name"
        errorFlag = true
      }
      if (!user.address) {
        errorMsg['address'] = "Please enter a valid address"
        errorFlag = true
      }
      if (!user.city) {
        errorMsg['city'] = "Invalid"
        errorFlag = true
      }
      if (!user.country) {
        errorMsg['country'] = "Invalid"
        errorFlag = true
      }
    }

    this.setState({ errorMsg })
    return errorFlag
  }
  save = () => {
    let { userData } = { ...this.state }
    if (!this.validateUser(userData)) {
      let formdata = new FormData()
      formdata.append('profile_id', this.state.profile_id)
      Object.keys(userData).map((val, ind) =>
        formdata.append(val, userData[val])
      )
      this.props.updateProfile(formdata).then(response => {
        if (response.Status === 200) {
          this.getProfileData()
          this.handleToastMessage("success", "Profile Updated Successfully")
        } else {
          this.handleToastMessage("error", "Failed to update Profile")
        }
      }).catch((err) => {
        this.handleToastMessage("error", "Failed to update Profile")
      })

    }
  }
  Changepassword = () => {
    let { userData } = { ...this.state }
    let obj = {
      cur_password: userData.cur_password,
      new_password: userData.new_password,
      re_password: userData.re_password
    }
    if (!this.validateUser(obj, true)) {
      let formdata = new FormData()
      formdata.append('profile_id', this.state.profile_id)
      formdata.append('email', userData.email)
      formdata.append('current_password', userData.cur_password)
      formdata.append('new_password', userData.re_password)
      this.props.changePassword(formdata).then(response => {
        if (response.Status === 200) {

          this.handleToastMessage("success", "Password changed Successfully")
        } else {
          this.handleToastMessage("error", response.message)
        }
      }).catch((err) => {
        this.handleToastMessage("error", "Failed to change password")
      })


    }
  }
  render() {
    let { errorMsg, userData, popup } = { ...this.state }

    return (
      <>
        <div className="content">
          {popup &&
            <div >
              <div className="popup">
                <div className=" card-form">
                  <div className="card-header m-3">
                    <span className="h4">Change Password</span>
                    <button type="button" className="close text-dark" onClick={() => { this.setState({ popup: false }) }}><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div className="card-body d-flex justify-content-center">
                    <div className=" col-10">
                      <div className="row">
                        <div className="col-10 mt-2">
                          <label className="font-weight-bold" >Current Password</label><span className="text-danger float-right ">{errorMsg['cur_password'] ? errorMsg['cur_password'] : null}</span><br></br>
                          <input type="password" className={"form-control" + (errorMsg['cur_password'] ? " border-danger" : "")} value={userData.cur_password} name="cur_password" onChange={e => this.handleChange(e)} required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-10 mt-3">
                          <label className="font-weight-bold" >New Password</label><span className="text-danger float-right ">{errorMsg['new_password'] ? errorMsg['new_password'] : null}</span><br></br>
                          <input type="password" className={"form-control" + (errorMsg['new_password'] ? " border-danger" : "")} name="new_password" value={userData.new_password} onChange={e => this.handleChange(e)} required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-10 mt-3">
                          <label className="font-weight-bold" >Retype Password</label><span className="text-danger float-right ">{errorMsg['re_password'] ? errorMsg['re_password'] : null}</span><br></br>
                          <input type="password" className={"form-control" + (errorMsg['re_password'] ? " border-danger" : "")} name="re_password" value={userData.re_password} onChange={e => this.handleChange(e)} required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-flex justify-content-center col-10">
                          <button className="btn btn-success mt-2" type="button" onClick={e => this.Changepassword()}>Change</button><br></br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          <div className=" card-profile">
            <div className="card-header p-2">
              <span className="h4">{"My Profile"} </span>
            </div>
            <div className="card-body  d-flex justify-content-center mt-n2">
              <div className=" col-10">
                <div className="row">
                  <div className="col-lg-5">
                    <label className="font-weight-bold" >First Name</label><span className="text-danger float-right ">{errorMsg['first_name'] ? errorMsg['first_name'] : null}</span><br></br>
                    <input type="text" className={"form-control" + (errorMsg['first_name'] ? " border-danger" : "")} value={userData.first_name} name="first_name" onChange={e => this.handleChange(e)} required />
                  </div>
                  <div className="col-lg-5">
                    <label className="font-weight-bold" >Last Name</label><span className="text-danger float-right ">{errorMsg['last_name'] ? errorMsg['last_name'] : null}</span><br></br>
                    <input type="text" className={"form-control" + (errorMsg['last_name'] ? " border-danger" : "")} name="last_name" value={userData.last_name} onChange={e => this.handleChange(e)} required />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-10">
                    <label className="font-weight-bold"> Gender </label>
                    <div className="mt-2 d-flex justify-content-start row ">
                      <div className="col-4 ml-2">
                        <input type="radio" name="male" className="mr-2 " checked={userData.gender === "male"} onClick={e => this.handleGenderChange("male")} required />Male
                                                        </div>
                      <div className="col-4">
                        <input type="radio" name="female" className="mr-2" checked={userData.gender === "female"} onClick={e => this.handleGenderChange("female")} required />Female
                                                        </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-10">
                    <label className="font-weight-bold">Company Name</label><span className="text-danger float-right ">{errorMsg['company_name'] ? errorMsg['company_name'] : null}</span><br></br>
                    <input type="text" className={"form-control" + (errorMsg['company_name'] ? " border-danger" : "")} name="company_name" value={userData.company_name} onChange={e => this.handleChange(e)} required />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-10">
                    <label className="font-weight-bold mr-5">Email</label><span className="text-danger float-right ">{errorMsg['email'] ? errorMsg['email'] : null}</span><br></br>
                    <input type="text" className={"form-control" + (errorMsg['email'] ? " border-danger" : "")} name="email" value={userData.email} onChange={e => this.handleChange(e)} required />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-10">
                    <label className="font-weight-bold mr-5">Address</label><span className="text-danger float-right ">{errorMsg['address'] ? errorMsg['address'] : null}</span><br></br>
                    <input type="text" className={"form-control" + (errorMsg['address'] ? " border-danger" : "")} name="address" value={userData.address} onChange={e => this.handleChange(e)} required />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-5">
                    <label className="font-weight-bold" >City</label><span className="text-danger float-right ">{errorMsg['city'] ? errorMsg['city'] : null}</span><br></br>
                    <input type="text" className={"form-control" + (errorMsg['city'] ? " border-danger" : "")} value={userData.city} name="city" onChange={e => this.handleChange(e)} required />
                  </div>
                  <div className="col-5">
                    <label className="font-weight-bold" >Country</label><span className="text-danger float-right ">{errorMsg['country'] ? errorMsg['country'] : null}</span><br></br>
                    <input type="text" className={"form-control" + (errorMsg['country'] ? " border-danger" : "")} name="country" value={userData.country} onChange={e => this.handleChange(e)} required />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-10">
                    <label className="font-weight-bold mr-5">About me</label><span className="text-danger float-right ">{errorMsg['about'] ? errorMsg['about'] : null}</span><br></br>
                    <textarea rows="3" className={"form-control" + (errorMsg['about'] ? " border-danger" : "")} name="about" value={userData.about} onChange={e => this.handleChange(e)} required />
                  </div>
                </div>

                <div className="row">

                  <div className="d-flex justify-content-center col-10">
                    <button className="btn btn-success mt-2" type="button" onClick={e => this.save()}>Update</button><br></br>
                    <button className="btn btn-warning mt-2 ml-4" type="button" onClick={e => this.setState({ popup: true })}>Change Password</button><br></br>
                  </div>

                </div>

              </div>


            </div>

          </div>

        </div>
      </>
    );
  }
}

function mapStateToProps(state) {

  return {
    assessmentUser: state.assessmentReducer.ass_user,


  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: (data) => { return dispatch(profileAction.getProfile(data)); },
    updateProfile: (data) => { return dispatch(profileAction.updateProfile(data)); },
    changePassword: (data) => { return dispatch(profileAction.changePassword(data)); },

    Header: (title) => { return dispatch({ type: types.PAGE_TITLE, payload: title }) },


  };
}
export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(UserProfile));

