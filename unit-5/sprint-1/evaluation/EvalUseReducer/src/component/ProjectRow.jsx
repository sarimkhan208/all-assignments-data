import React from "react";

export const ProjectRow = ({no,name,techStack,assignedTo,status}) => {
  return (
    <>
      <td data-testid="project-id">{no}</td>
      <td data-testid="project-name">{name}</td>
      <td data-testid="project-tech-stack">{techStack}</td>
      <td data-testid="project-assigned-to">{assignedTo}</td>
      <td data-testid="project-status">
        {status}
      </td>
      <td>
        <button data-testid="toggle-button">Toggle</button>
      </td>
    </>
  );
};
