import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const SubmitButton = (propss) => {
  return (
    <Fragment>
      <MDBBtn className="w-100" color="primary">Submit</MDBBtn>     
    </Fragment>
  );
}

export default SubmitButton;