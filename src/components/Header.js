import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';

export default class hamburgerMenuPage extends Component {
state = {
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (
    <div className='navbar_wide'>
      <MDBNavbar color="light-blue lighten-4" light>
        <MDBContainer>
          <MDBNavbarBrand>
            PythonWeekend Bratislava
          </MDBNavbarBrand>
          </MDBContainer>
      </MDBNavbar>
    </div>
    );
  }
}