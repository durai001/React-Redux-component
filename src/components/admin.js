import React, { Component } from 'react';
import '../assets/css/theme.css'
import '../assets/css/skins/default.css'
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from "react-router";
import * as userAction from "../actions/user.action";
import * as authAction from "../actions/auth.action";
import * as types from "../actions/types"
import _ from 'lodash'
import Popup from "reactjs-popup";
import ReactPaginate from 'react-paginate';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import moment from "moment";
import { DatePickerInput } from 'rc-datepicker';



class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editUserId: 0,
            openPopup: false,
            deletePopup: false,
            allUsers: {
                pagination: {},
                userList: [{
                    address: "Chennai city",
                    city: "Chennai",
                    email: "duraivinoth001@gmail.com",
                    firstname: "Durai",
                    gender: "Male",
                    lastname: "Vinoth",
                    phoneNumber: "9092429504",
                    role: { roleName: "User", id: 1 },
                    state: "tamilnadu",
                    zipcode: "600087"
                }]
            },
            newUser: {},


            name: "",
            email: "",
            // gender:'',
            // genderDropDownValue:['Male','Female'],
            roleType: 0,
            role: [],
            popupType: "",
            confirm_password: "",
            password: "",
            search: ""
        }

    }
    getAllUsers = (search) => {

        //     authAction.getTransulators(1, 100,search).then(res => {
        //         if (res.type === "USER_FAILURE") {
        //            toast.error(res.type.payload, {
        //                position: toast.POSITION.TOP_RIGHT
        //            });
        //        } else{
        //             this.setState({
        //                allUsers: res.payload.message
        //            })
        //        }
        //    })


    }

    componentDidMount() {
        //       if(JSON.parse(localStorage.getItem("user")).roleType!=1){
        //           this.props.history.push('/user-management')
        //       }
        //    this.geUserList('') ;
        //    this.getRoles();
    }
    openPopup = () => {
        this.setState({ openPopup: !this.state.openPopup })
    }
    deletePopup = () => {
        this.setState({ deletePopup: !this.state.deletePopup })

    }
    deleteUser = (id) => {
        this.setState({ deletePopup: false })
        userAction.deleteUser(this.state.editUserId).then(res => {
            if (res.statusCode === 200) {
                toast.success("User deleted successfully", {
                    position: toast.POSITION.TOP_RIGHT
                });
                this.geUserList('');
            } else {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    }
    editProfile = (userObj) => {
        this.setState({
            openPopup: true,
            editUserId: userObj.id,
            popupType: "edit",
            name: userObj.name,
            email: userObj.email,
            // gender:userObj.gender,
            roleType: userObj.role.id,
        })
    }
    getRoles = () => {
        userAction.getRoles().then(res => {
            if (res.statusCode === 200) {
                this.setState({ role: res.data })

            } else {
                toast.error("Network Error", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    }
    saveUser = (e, type) => {
        e.preventDefault();

        if (type === "edit") {
            let obj = {
                name: this.state.name,
                // email:this.state.email,
                // gender:this.state.gender,
                role_id: this.state.roleType,
            }
            userAction.updateUser(this.state.editUserId, obj).then(res => {
                if (res.statusCode === 200) {
                    this.geUserList('');

                    toast.success("User updated successfully", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                } else {
                    toast.success(res.error, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })
        } else if (type === "save") {
            let obj = this.state.newUser
            obj.role = { roleName: "User", id: 1 }
            if (obj.password === obj.confirm_password) {
                let allUsers = this.state.allUsers
                allUsers.userList.push(obj)
                this.setState({ allUsers, showPopup: !this.state.showPopup, })
                // authAction.registerUser(obj).then(res => {
                //     if (res.statusCode === 200) {
                //         this.geUserList('');
                toast.success("User registered successfully", {
                    position: toast.POSITION.TOP_RIGHT
                });
                //     } else {
                //         console.log(res.message)
                //         if (res.message && res.message.details) {
                //             res.message.details.forEach(element => {
                //                 toast.error(element.message, {
                //                     position: toast.POSITION.TOP_RIGHT
                //                 });
                //             });
                //         } else {
                //             toast.error(res.message, {
                //                 position: toast.POSITION.TOP_RIGHT
                //             });
                //         }


                //     }
                // })
            } else {
                toast.error("Password and confirm password must be same", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }


        }

    }
    searchUser = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.getAllUsers(e.target.value)
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    closeHandle = () => {
        this.setState({
            showPopup: !this.state.showPopup,
        })
    }
    handleCreateUser = (e) => {
        let newUser = this.state.newUser
        console.log(newUser)
        if (e.target.name === "phoneNumber" || e.target.name === "zipcode") {
            if (e.target.name === "phoneNumber" && e.target.value.length <= 10) {
                newUser[e.target.name] = e.target.value
                console.log(newUser)
                this.setState({ newUser })
            }
            if (e.target.name === "zipcode" && e.target.value.length <= 8) {
                newUser[e.target.name] = e.target.value
                console.log(newUser)

                this.setState({ newUser })
            }
        } else {
            newUser[e.target.name] = e.target.value
            this.setState({ newUser })
        }

    }
    onChange = (date) => {
        this.setState({
            newUser: { ...this.state.newUser, dob: new Date(date) }
        }, () => {
            console.log(this.state.newUser)
        })
    }
    handlePageChange = (pageNumber) => {
        this.setState({
            pageNumber: pageNumber,
        })
        this.getAllUsers(pageNumber, this.state.pageLimit, '')
    }

    render() {
        let { allUsers, newUser } = { ...this.state }
        console.log(allUsers)
        return (
            <section role="main" className="content-body">
                <header className="page-header">
                    <h2>Manage Users</h2>
                </header>
                <div>
                    {this.state.showPopup === true ? <Popup
                        open={this.state.showPopup}
                        closeOnDocumentClick={false}
                        onClose={e => this.setState({ showPopup: !this.state.showPopup })}
                    >
                        <div className="model-close p-3">
                            <h3 className="mt0 mb0"><b> Create User</b>
                                <a className="close" onClick={e => this.closeHandle()}>
                                    &times;
                        </a></h3>
                        </div>

                        <hr className="mt0 mb0" />
                        {/* {this.state.capturedImage===""? <Webcam className="take-picture"
                                   audio={false}   ref={this.setRef}   
                                  screenshotFormat="image/jpeg" onUserMediaError={e=>this.onUserMediaError(e)}/> : */}
                        {/* <img src={userImg}  className="round-img"  alt="User Image" /> */}
                        {/* //  } */}

                        <form className="p-3">

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">First Name</label>
                                    <input type="text" name="firstname" value={this.state.newUser.firstname ? this.state.newUser.firstname : ""} onChange={e => { this.handleCreateUser(e) }} onKeyUp={e => { this.handleCreateUser(e) }} className="form-control" required />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState">Last Name</label>
                                    <input type="text" name="lastname" value={this.state.newUser.lastname ? this.state.newUser.lastname : ""} onChange={e => { this.handleCreateUser(e) }} onKeyUp={e => { this.handleCreateUser(e) }} className="form-control" />
                                </div>

                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Gender</label>
                                    {/* <input type="text" name="gender" value={this.state.newUser.gender?this.state.newUser.gender:""} */}
                                    <select type="text" name="gender" value={this.state.newUser.gender ? this.state.newUser.gender : ""} onChange={e => { this.handleCreateUser(e) }} onKeyUp={e => { this.handleCreateUser(e) }} className="form-control" >
                                        <option selected>Choose...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>


                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="inputDob">DOB</label> <br></br>

                                    <div >
                                        <DatePickerInput
                                            type="button"
                                            className='my-custom-datepicker-component ml'
                                            name="dob"
                                            withPortal
                                            onChange={this.onChange}
                                            value={newUser.dob ? moment(newUser.dob).format("MM/DD/YYYY") : new Date()}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" name="address"
                                    value={this.state.newUser.address ? this.state.newUser.address : ""}
                                    onChange={e => { this.handleCreateUser(e) }} onKeyUp={e => { this.handleCreateUser(e) }}
                                    className="form-control" />
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="text" name="city" value={this.state.newUser.city ? this.state.newUser.city : ""} onChange={e => { this.handleCreateUser(e) }} onKeyUp={e => { this.handleCreateUser(e) }} className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">State</label>
                                    <input type="text" name="state" value={this.state.newUser.state ? this.state.newUser.state : ""} onChange={e => { this.handleCreateUser(e) }} onKeyDown={e => { this.handleCreateUser(e) }} className="form-control" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Zip</label>
                                    <input type="number" name="zipcode" value={this.state.newUser.zipcode ? this.state.newUser.zipcode : ""} onChange={e => { this.handleCreateUser(e) }} onKeyDown={e => { this.handleCreateUser(e) }} className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" name="email" value={this.state.newUser.email ? this.state.newUser.email : ""} onChange={e => { this.handleCreateUser(e) }} onKeyUp={e => { this.handleCreateUser(e) }} className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputphone">Phone</label>
                                    <input type="number" name="phoneNumber" value={this.state.newUser.phoneNumber ? this.state.newUser.phoneNumber : ""} onChange={e => { this.handleCreateUser(e) }} onKeyUp={e => { this.handleCreateUser(e) }} className="form-control" pattern="[0-9]" required />
                                </div>
                            </div>
                            <div className="text-right">
                                <button type="button" onClick={e => this.saveUser(e, "save")} className="btn btn-primary border-0"><i className="fas fa-save text-white mt-1 mr-1"></i>Save</button>
                            </div>
                        </form>

                    </Popup> :
                        null}
                </div>

                <div className="search-content">
                    <div className="search-control-wrapper">
                        <form action="#">
                            <div className="form-group">
                                <div className="input-group input-group-sm">
                                    <input type="text" value={this.state.userSearch} name="userSearch"
                                        onChange={e => this.searchUser(e)}
                                        onKeyUp={e => this.searchUser(e)}
                                        className="form-control form-control-md"
                                        placeholder="Search..." />
                                    <span className="input-group-append text-white">
                                        <a className="btn btn-primary p-2 btn-sm "><i className="fas fa-search"></i> Search</a>
                                        <a className="btn btn-success p-2 btn-sm" onClick={e => { this.setState({ showPopup: true }) }}><i className="fas fa-plus"></i> New</a>
                                    </span>

                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row mt-5 ml-1">
                        <div className="col-12">
                            {allUsers.userList && allUsers.userList.length > 0 ?
                                <p className="total-results text-muted">{allUsers.userList ? `Showing ${allUsers.userList.length} of ${this.state.allUsers.pagination.rowCount || allUsers.userList.length}` : null} results</p>
                                : null
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-3">

                            <ul className="list-unstyled search-results-list w-100 col-12">
                                {allUsers.userList ? allUsers.userList.map((user, index) =>
                                    <li key={index} className="p-0 m-0">
                                        <p className="result-type user-icon "><span className="badge badge-primary">{user.role.roleName}</span> <i className="fa fa-trash text-danger mt-4 fs fa-lg" onClick={e => this.deleteUser(user)} aria-hidden="true"></i></p>
                                        <a onClick={(e) => { this.HistoryPush('/patient_details', user) }}>
                                            <div className="result-data pointer ">
                                                <p className="h4 title text-primary mb-0 ">{user.firstname} {user.lastname}</p>
                                                <p className="description">{user.email} </p>
                                            </div>
                                        </a>
                                    </li>
                                ) : null}

                            </ul>
                            {allUsers.pagination &&
                                <div className="float-right p-3 h4">

                                    <ReactPaginate
                                        previousLabel={'previous'}
                                        nextLabel={'next'}
                                        breakLabel={'...'}
                                        pageCount={allUsers.pagination.pageCount||1}
                                        marginPagesDisplayed={3}
                                        pageRangeDisplayed={3}
                                        onPageChange={e => this.handlePageChange(e.selected + 1)}
                                        containerClassName={'pagination'}
                                        subContainerClassName={'pages pagination'}
                                        activeClassName={'active'}
                                    />

                                </div>}
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

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));