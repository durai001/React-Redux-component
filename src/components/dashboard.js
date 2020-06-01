import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as userAction from "../actions/user.action"
import * as types from "../actions/types"
import _ from 'lodash'
import Popup from "reactjs-popup";
import ReactPaginate from 'react-paginate';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import moment from "moment";
// import userImg from '../assets/images/user.jpg';
import { DatePickerInput } from 'rc-datepicker';
// https://reactjsexample.com/a-decent-and-pretty-date-picker-to-be-used-with-reactjs/


import { ToastContainer, toast } from 'react-toastify';
import { Pagination } from 'react-bootstrap';

class TranslationSession extends Component {
	constructor(props) {
		super();
		this.state = {
			pageLimit: 5,
			newPatient: {},
			showPopup: false,
			patientSearch: "",
			patient_list: { pagination: { page: 1, pageSize: 10, rowCount: 3, pageCount: 1 }, patients: [] },
			date: new Date(),

		}
	}

	componentDidMount() {


		if (localStorage.getItem('app-token')) {
			this.getAllPatients(1, this.state.pageLimit, '')
		} else {
			this.HistoryPush("/")
		}

	}
	onChange = (date) => {
		this.setState({
			newPatient: { ...this.state.newPatient, dob: new Date(date) }
		}, () => {
			console.log(this.state.newPatient)
		})
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.error) {

		} else {
			// patient_list=!_.isEmpty(nextProps.patient_list) ?nextProps.patient_list:patient_list
			//  this.setState({patient_list:nextProps.patient_list})
		}

	}

	HistoryPush = (path, user) => {
		if (path === "/patient_details") {
			this.props.patientId(user)
		}
		this.props.history.push(path)
		this.setState({ displayMenu: false })

	}
	searchPatient = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {

		})
		this.getAllPatients(1, this.state.pageLimit, e.target.value)
	}
	closeHandle = () => {
		this.setState({
			showPopup: !this.state.showPopup,
			discoveryDetail: "",
			discoveryName: ""
		})
	}
	handleCreatePatient = (e) => {
		let newPatient = this.state.newPatient
		if (e.target.name === "phoneNumber" || e.target.name === "zipcode") {
			if (e.target.name === "phoneNumber" && e.target.value.length <= 10) {
				newPatient[e.target.name] = e.target.value
				console.log(newPatient)
				this.setState({ newPatient })
			}
			if (e.target.name === "zipcode" && e.target.value.length <= 8) {
				newPatient[e.target.name] = e.target.value
				console.log(newPatient)

				this.setState({ newPatient })
			}
		} else {
			newPatient[e.target.name] = e.target.value
			this.setState({ newPatient })
		}

	}
	createPatient = () => {

		let newPatient = this.state.newPatient
		console.log(newPatient)

		newPatient.dob = newPatient.dob ? moment.utc(newPatient.dob).format("YYYY-MM-DD HH:mm:ss") : moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
		console.log(newPatient.dob)
		newPatient.phoneNumber = parseInt(newPatient.phoneNumber)
		this.setState({ newPatient })

		if (newPatient.phoneNumber && (newPatient.phoneNumber.toString().length > 10 || newPatient.phoneNumber.toString().length < 10)) {
			toast.error("phone number should be 10 digits ", {
				position: toast.POSITION.TOP_RIGHT
			});

		} else {
			// let user={
			// 	address: newPatient.address,//"asdf",
			//    city:newPatient.city,
			//    dob: newPatient.dob,
			//    email:newPatient.email,
			//    firstname:newPatient.firstname,
			//    gender:newPatient.gender,
			// 	 lastname: newPatient.lastname,
			//    phoneNumber:newPatient.phoneNumber,
			// 	state: newPatient.state,
			// 	zipcode: newPatient.zipcode,
			//    }
			// 	   console.log(user)
			userAction.createPatient(newPatient).then(res => {
				if (res && res.status === 200) {
					toast.success(res.data.status.message ? res.data.status.message : "something went wrong", {
						position: toast.POSITION.TOP_RIGHT
					});
					this.getAllPatients(1, this.state.pageLimit, '')
					this.setState({ showPopup: false, newPatient: {} })
				} else {
					toast.error(res.data.message, {
						position: toast.POSITION.TOP_RIGHT
					});
				}
			})
		}
	}
	handlePageChange = (pageNumber) => {
		this.setState({
			pageNumber: pageNumber,
		})

		this.getAllPatients(pageNumber, this.state.pageLimit, '')
	}

	deletePatient = (user) => {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='custom-ui'>
						<h1>Are you sure?</h1>
						<p>You want to delete this user?</p>
						<button className="btn btn-success" onClick={() => {
							userAction.deleteUser(user.id).then(result => {
								this.getAllPatients(this.state.pageNumber, this.state.pageLimit, '')
							}); onClose();
						}
						}>
							Yes, Delete it!
					  </button>
						<button className="btn btn-danger" onClick={onClose}>No</button>
					</div>
				);
			}
		});

	}
	checkLog = (checkLog) => {
	}
	getAllPatients = (pageNumber, limit, search) => {
		this.props.getAllPatients({ pageNumber: pageNumber, limit: limit, search: search }).then(res => {
			this.setState({ patient_list: this.props.patient_list }, () => {
			})
		})

	}
	handleDateChange = (date) => {
		this.setState(prevState => ({
			newPatient: {
				...prevState.newPatient,
				dob: isNaN(Date.parse(date)) === false ? new Date(date) : date// moment(date).format('MM-DD-YYYY')       
			}
		}))
	}

	handleDateChanges = (date) => {
		this.setState({
			newPatient: {
				...this.state.newPatient,
				dob: moment.utc(date).format("YYYY-MM-DD HH:mm:ss")
			}
		}, () => {
		})
	}
	handleChange = (newDate) => {
		return this.setState({ date: newDate });
	}
	uploadFile = (e) => {

		console.log("###################", e)
		let self = this
		var URL = window.URL || window.webkitURL
		if (URL && e.target.files[0]) {


			var reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			reader.onloadend = function () {
				var base64data = reader.result;
				console.log(base64data);

				self.setState({
					disableProcessing: false,
					CSVFile: base64data
				}, () => {
					let obj = {
						"CSVFile": base64data
					}
					userAction.createPatientViaCSV(obj).then(response => {
						console.log(response)
						if (response.statusCode === 200) {
							self.getAllPatients(self.state.pageNumber, self.state.pageLimit, '')
							if (response.data && response.data.patientCreated) {
								toast.success("Successfully Imported", {
									position: toast.POSITION.TOP_RIGHT
								});
							} else {
								toast.warn("No rows updated", {
									position: toast.POSITION.TOP_RIGHT
								});
							}

						} else {
							toast.error(response.data ? response.data.message : "Network error", {
								position: toast.POSITION.TOP_RIGHT
							});
							console.log(response)
						}
					})

				})
			}


		}
	}
	exportPatient = () => {
		userAction.exportPatient().then(res => {
			console.log(res)
			if (res && res.statusCode === 200) {
				toast.success(res.data, {
					position: toast.POSITION.TOP_RIGHT
				});
			} else {
				toast.error(res.data ? res.data.message : "Network error", {
					position: toast.POSITION.TOP_RIGHT
				});
			}
		})
	}
	render() {


		let { patient_list, newPatient } = { ...this.state }
		let active = 2;
		let items = [];
		for (let number = 1; number <= 5; number++) {
			items.push(
				<Pagination.Item key={number} active={number === active}>
					{number}
				</Pagination.Item>,
			);
		}

		return (
			<div>
				{this.state.showPopup === true ?
					<Popup
						open={this.state.showPopup}
						closeOnDocumentClick={false}
						onClose={e => this.setState({ showPopup: !this.state.showPopup })}
					>
						<div className="model-close p-3">
							<h3 className="mt0 mb0"><b> Popup Header </b>
								<a className="close" onClick={e => this.closeHandle()}>
									&times;
                        </a></h3>
						</div>

						<hr className="mt0 mb0" />
						<form className="p-3">
							Popup Body Here
						</form>

					</Popup> :
					null}
				<section role="main" className="content-body">
					<header className={'page-header ' + (this.state.showMenu ? '' : 'header-left')}>
						<h2>Page Header</h2>
					</header>

					 Dashboard 

				</section>

				<ToastContainer />
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		patient_list: state.userReducer.userList,
		scanReducer: state.scanReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getAllPatients: (obj) => { return dispatch(userAction.getAllPatients(obj)) },
		patientId: (obj) => { dispatch({ type: types.PATIENT_ID, payload: obj }) },
		//  createPatientViaCSV:(obj)=>{return dispatch(userAction.createPatientViaCSV(obj))},

	}

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TranslationSession));