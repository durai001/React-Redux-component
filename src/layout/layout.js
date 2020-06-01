import React, { Component } from 'react';
import Header from './header/header'
import Sidemenu from './sidemenu/sidemenu'
import { withRouter } from 'react-router-dom'

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: true
        };
    }

    toggleMenu = () =>{
         this.setState({
            showMenu: !this.state.showMenu
        });
        this.props.stateChange(this.state.showMenu);
    }

    render() {


        return (
            <div>
                <Header />
                <Sidemenu showMenu={this.state.showMenu}  toggleMenu={this.toggleMenu}   />
            </div>

        )
    }
}
export default withRouter(Layout);