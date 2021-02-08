import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

function NavSearch() {
  return (
    <MDBCol md="8">
      <div className="input-group search-bar"> 
        <input
          className="form-control"
          type="text"
          placeholder="Win Search"
          aria-label="Win Search"
        />
        <span className="input-group-text btn search-box" id="basic-text1">
            <MDBIcon className="search-icon" icon="search" />
        </span>
      </div>
    </MDBCol>
  );
}

export default NavSearch;
