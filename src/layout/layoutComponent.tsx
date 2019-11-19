import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderComponent from "./headerComponent";
import SidemenuComponent from "./sidemenuComponent";
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
type MyProps = {};
type MyState = {};

class LayoutComponent extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
    };
  }

  // toggleMenu = () => {
  //   this.setState({
  //     showMenu: !this.state.showMenu,
  //   });
  //   this.props.stateChange(this.state.showMenu);
  // };

  render() {
    return (
      <div>
        <HeaderComponent />
        <SidemenuComponent />
      </div>
    );
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutComponent));