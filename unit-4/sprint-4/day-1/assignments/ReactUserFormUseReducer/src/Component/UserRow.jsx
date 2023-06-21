import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  // console.log("marital",maritalStatus)
  return <>
  <table>
    <thead>
      <tr>
        <td>S.no</td>
        <td>User</td>
        <td>Gender</td>
        <td>Role</td>
        <td>Marital Status</td>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          {id}
        </td>
        <td>
          {name}
        </td>
        <td>
          {gender}
        </td>
        <td>
          {role}
        </td>
        <td>
          {maritalStatus?"married":"unmarried"}
        </td>
      </tr>
    </tbody>
  </table>
  </>;
};
export { UserRow };
