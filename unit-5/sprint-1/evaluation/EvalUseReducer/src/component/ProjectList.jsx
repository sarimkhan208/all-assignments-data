import React from "react";
import { ProjectRow } from "./ProjectRow";

// export const ProjectList = (data) => {
//   // console.log(data.data)
//   return (
//     <div className="project-list-wrapper">
//         {/* Add table head  */}
//         <table data-testid="project-container">
//           <thead>
//             <th>S.no</th>
//             <th>Name</th>
//             <th>Tech Stack</th>
//             <th>Assigned To</th>
//             <th>Current Status</th>
//             <th>Toggle</th>
//           </thead>

//           <tbody>
//             {
//               data.data.map((el,i)=>(<tr><ProjectRow 
                
//                 no={i+1}
//                 name={el.name}
//                 techStack={el.tech_stack}
//                 assignedTo={el.assigned_to}
//                 status={el.status}
//                 /></tr>))
//             }
//           </tbody>
//         </table>
//         {/* Map through the list and use `ProjectRow` Component  */}
//     </div>
//   );
// };


export const ProjectList = (data) => {
  console.log(data.data)
  return (
    <div className="project-list-wrapper">
      <table data-testid="project-container">
        {/* Add table head  */}
        <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Tech Stack</th>
              <th>Assigned To</th>
              <th>Current Status</th>
              <th>Toggle</th>
            </tr>
        </thead>
        {/* Map through the list and use `ProjectRow` Component  */}
        <tbody>
            {
              data.data.map((el,i)=>(<tr><ProjectRow 
                
                no={i+1}
                name={el.name}
                techStack={el.tech_stack}
                assignedTo={el.assigned_to}
                status={el.status}
                /></tr>))
            }
          </tbody>
      </table>
    </div>
  );
};





// import React from "react";
// import { ProjectRow } from "./ProjectRow";

// export const ProjectList = (data) => {
//   // console.log(data.data)
//   return (
//     <div className="project-list-wrapper">
//       <table data-testid="project-container">
//         {/* Add table head  */}
//         <table>
//           <thead>
//             <th>S.no</th>
//             <th>Name</th>
//             <th>Tech Stack</th>
//             <th>Assigned To</th>
//             <th>Current Status</th>
//             <th>Toggle</th>
//           </thead>

//           <tbody>
          
//             {
//               data.data.map((el,i)=>(<tr><ProjectRow 
                
//                 no={i+1}
//                 name={el.name}
//                 techStack={el.tech_stack}
//                 assignedTo={el.assigned_to}
//                 status={el.status}
//                 /></tr>))
//             }
//           </tbody>
//         </table>
//         {/* Map through the list and use `ProjectRow` Component  */}
//       </table>
//     </div>
//   );
// };
