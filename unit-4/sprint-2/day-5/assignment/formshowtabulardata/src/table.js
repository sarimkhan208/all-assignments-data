export default function Table({name,age,department,salary,maritalStatus,address}){
     
    return <table>
            <tr>
                <th>
                    Name
                </th>

                <th>
                    Age
                </th>

                <th>
                    Address
                </th>
                <th>
                    Department
                </th>
                <th>
                    Salary
                </th>
                <th>
                    Marital Status
                </th>

            </tr>


            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {age}
                </td>
                <td>
                    {department}
                </td>
                <td>
                    {salary}
                </td>
                <td>
                    {maritalStatus}
                </td>
                <td>
                    {address}
                </td>
            </tr>
        </table>
    
}