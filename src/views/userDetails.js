import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import * as userAction from "../store/actions/user.action";
import * as types from "../store/actions/types";
import 'react-toastify/dist/ReactToastify.css';


class userDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPopup: false,
            userData: {
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                gender: "",
                companyName: "",

            },
            errorMsg: {
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                gender: "",
                companyName: "",
            }

        }
    }

    componentDidMount = () => {
 
    }

    newUserPopup = () => {
        this.setState({ userPopup: true, popupType: "new" })
    }

    createUser = (e) => {
        let formdata = new FormData()
        let { userData } = { ...this.state }
        if (!this.validateUser(userData)) {
            this.setState({ userPopup: false })
            formdata.append('firstName', userData.firstName)
            formdata.append('lastName', userData.lastName)
            formdata.append('email', userData.email)
            formdata.append('gender', userData.gender)
            formdata.append('companyName', userData.companyName)
            formdata.append('address', userData.address)
            // this.props.profileCreate(formdata).then(response => {
            //     if (response) {
                    // this.getTableData()
            //         this.toasterHandler("success", "User added successfully")
            //     } else {
            //         this.toasterHandler("error", "Failed to add user")
            //     }
            // }).catch((err) => {
            //     this.toasterHandler("error", "Failed to add user")
            // })
        }
    }

   

    deleteUser = (id) => {
        // let formdata = new FormData()
        // formdata.append('id', id)
        // if (window.confirm('DO you want to delete this user?')) {
        //     this.props.profileDelete(formdata).then(response => {
        //         if (response) {
        //             this.getTableData()
        //             this.toasterHandler("success", "User deleted successfully")
        //         } else {
        //             this.toasterHandler("error", "Failed to delete user")
        //         }
        //     }).catch((err) => {
        //         this.toasterHandler("error", "Failed to delete user")
        //     })
        // }
    }

    editUser = () => {
        // let formdata = new FormData()
        // let { userData } = { ...this.state }
        // // this.setState({ userData, userPopup: false })
        // if (!this.validateUser(userData)) {
        //     formdata.append('firstName', userData.firstName)
        //     formdata.append('lastName', userData.lastName)
        //     formdata.append('email', userData.email)
        //     formdata.append('gender', userData.gender)
        //     formdata.append('companyName', userData.companyName)
        //     formdata.append('address', userData.address)
        //     formdata.append('id', this.state.currentUserId)
        //     this.props.profileUpdate(formdata).then(response => {
        //         if (response) {
        //             this.getTableData()
        //             this.toasterHandler("success", "User updated successfully")
        //             this.setState({ userPopup: false, popupType: "", userData: {} })
        //         } else {
        //             this.toasterHandler("error", "Failed to edit user")
        //         }
        //     }).catch((err) => {
        //         this.toasterHandler("error", "Failed to edit user")
        //     })
        // }
    }

    toasterHandler = (type, msg) => {
        toast[type](msg, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }



    validateUser = (user) => {
        let { errorMsg, errorFlag } = { ...this.state }
        let name = /^([a-zA-Z]{1,30})$/
        let mail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
        let company = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/
        errorFlag = false
        errorMsg = {}
        if (!user.firstName || !name.test(user.firstName)) {
            errorMsg['firstName'] = "Invalid"
            errorFlag = true
        }
        if (!user.lastName || !name.test(user.lastName)) {
            errorMsg['lastName'] = "Invalid"
            errorFlag = true
        }
        if (!mail.test(user.email)) {
            errorMsg['email'] = "Please enter a valid email"
            errorFlag = true
        }
        if (!company.test(user.companyName)) {
            errorMsg['companyName'] = "Please enter a valid Company name"
            errorFlag = true

        }
        if (!user.address) {
            errorMsg['address'] = "Please enter a valid address"
            errorFlag = true
        }

        this.setState({ errorMsg })
        return errorFlag
    }

    updateUser = (user) => {
        let { userData } = { ...this.state }
        userData.firstName = user.first_name
        userData.lastName = user.last_name
        userData.gender = user.gender
        userData.companyName = user.company_name
        userData.email = user.email
        userData.address = user.address
        this.setState({ userData, userPopup: true, popupType: "update", currentUserId: user.id })
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

    userAssessment = (user) => {
        this.props.Header("Profile Assessment")
        this.props.history.push({ pathname: '/userAssessment', state: { userid: user.id } })
    }



    render() {
        let { userPopup, tableData, errorMsg } = { ...this.state }
        return (
            <div className="content-userPage">
                {userPopup &&
                    <div >
                        <div className="popup">
                            <div className=" card-form">
                                <div className="card-header m-3">
                                    <span className="h4">{this.state.popupType === "update" ? "Edit Profile" : "New Profile"} </span>
                                    <button type="button" className="close text-dark" onClick={() => { this.setState({ userPopup: false, popupType: "", errorMsg: {} }); }}><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="card-body">
                                    <div className="p-1 user-card">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <label >First Name</label><span className="text-danger float-right ml10">{errorMsg['firstName'] ? errorMsg['firstName'] : null}</span><br></br>
                                                <input type="text" className={"form-control" + (errorMsg['firstName'] ? " border-danger" : "")} value={this.state.userData.firstName} name="firstName" onChange={e => this.handleChange(e)} required />
                                            </div>
                                            <div className="col-lg-5">
                                                <label >Last Name</label><span className="text-danger float-right ml10">{errorMsg['lastName'] ? errorMsg['lastName'] : null}</span><br></br>
                                                <input type="text" className={"form-control" + (errorMsg['lastName'] ? " border-danger" : "")} name="lastName" value={this.state.userData.lastName} onChange={e => this.handleChange(e)} required />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <label> Gender </label>
                                                <div className="mt-2 d-flex justify-content-start row ">
                                                    <div className="col-4 ml-2">
                                                        <input type="radio" name="male" className="mr-2 " checked={this.state.userData.gender === "Male"} required />Male
                                                        </div>
                                                    <div className="col-4">
                                                        <input type="radio" name="female" className="mr-2" checked={this.state.userData.gender === "Female"} onClick={e => this.handleGenderChange("Female")} required />Female
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <label>Company Name</label><span className="text-danger float-right ml10">{errorMsg['companyName'] ? errorMsg['companyName'] : null}</span><br></br>
                                                <input type="text" className={"form-control" + (errorMsg['companyName'] ? " border-danger" : "")} name="companyName" value={this.state.userData.companyName} onChange={e => this.handleChange(e)} required />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <label class="mr-5">Email</label><span className="text-danger float-right ml10">{errorMsg['email'] ? errorMsg['email'] : null}</span><br></br>
                                                <input type="text" className={"form-control" + (errorMsg['email'] ? " border-danger" : "")} name="email" value={this.state.userData.email} onChange={e => this.handleChange(e)} required />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <label className="mr-5">Address</label><span className="text-danger float-right ml10">{errorMsg['address'] ? errorMsg['address'] : null}</span><br></br>
                                                <input type="text" className={"form-control" + (errorMsg['address'] ? " border-danger" : "")} name="address" value={this.state.userData.address} onChange={e => this.handleChange(e)} required />
                                            </div>
                                        </div>

                                        <div className="row mt-3 ml-3 d-flex justify-content-start">

                                            <div className="col-3">
                                                {this.state.popupType === "update" ?
                                                    <button className="btn btn-success" type="button" onClick={e => this.editUser()}>Update</button>
                                                    :
                                                    <button className="btn btn-primary" type="button" onClick={e => this.createUser()}>Create</button>
                                                }
                                            </div>
                                            {/* <div className="col-2">
                                                            <button className="btn btn-danger ml-2" type="button" onClick={e => this.setState({ userPopup: false })}>Close</button>

                                                        </div>   */}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>}
                <table className="table text-center m-5 user-table">
                    <thead className="">
                        <tr className="user-table-header">
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>ADDRESS</th>
                            <th>GENDER</th>
                            <th>COMPANY NAME</th>
                            <th>EMAIL</th>
                            <th>ASSESSMENT</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className=" ">
                        {tableData ?
                            tableData.map((data, index) =>
                                <tr key={index} className="bg-white table-row">
                                    <td>{data.first_name}</td>
                                    <td>{data.last_name}</td>
                                    <td>{data.address}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.company_name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <span onClick={e => { this.userAssessment(data) }}><i className="fas fa-tasks text-primary"></i></span>
                                    </td>
                                    <td colSpan={2}>
                                        <span onClick={e => { this.updateUser(data) }}><i className="fas fa-edit text-success "></i></span>
                                        <span onClick={e => { this.deleteUser(data.id) }}><i className="fas fa-trash text-danger"></i></span>
                                    </td>
                                </tr>
                            ) : null
                        }
                    </tbody>
                </table>
                <div className="col-12">
                    <button className="btn btn-primary float-right" onClick={e => this.setState({ userData: { gender: "Male" } }, this.newUserPopup)}>Create new</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {


    };
}

function mapDispatchToProps(dispatch) {
    return {
         profileRead: () => { return dispatch(userAction.profileRead()); },
        profileCreate: (data) => { return dispatch(userAction.profileCreate(data)); },
        profileUpdate: (data) => { return dispatch(userAction.profileUpdate(data)); },
        profileDelete: (data) => { return dispatch(userAction.profileDelete(data)); },
        Header: (title) => { return dispatch({ type: types.PAGE_TITLE, payload: title }) },
    };
}
export default withRouter(connect(
    mapStateToProps, mapDispatchToProps
)(userDetails));