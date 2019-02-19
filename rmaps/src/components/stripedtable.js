import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const StripedTable = props => {
  return (
    <MDBTableBody>
        <tr>
          <td>{props.title}</td>
          <td>{props.education}</td>
          <td>{props.salary}</td>
        </tr>
      </MDBTableBody>
  );
}

export default StripedTable;