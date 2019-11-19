import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../scss-styles/header.scss'
type MyProps = {};
type MyState = {};

class HeaderComponent extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = ({
        })
    }
    render() {
        // let users=this.state['user']
        return (
            <div className="header">
                <div data-component="navbar">
                    <nav className="navbar p-0 ">
                        <i className="fas fa-home fa-2x mt-2 ml-2 c-pointer c-pointer hover "></i>
                    </nav>
                </div>
                <div className="drop-down">
                    <i className="fas fa-user fa-2x c-pointer mt-2 hover"></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);