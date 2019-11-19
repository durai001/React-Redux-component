import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../scss-styles/sidemenu.scss'
type MyProps = {};
type MyState = {};

class SidemenuComponent extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = ({
        })
    }
    render() {
        return (
            <div className="side-menu">
                <i className="fas fa-bars fa-2x float-right c-pointer hover "></i>
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

export default connect(mapStateToProps, mapDispatchToProps)(SidemenuComponent);