import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-sm rounded-md p-4">
      <div className="flex justify-between mb-1 text-sm">
        <span>{project.name}</span>
        <span>{project.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className={`h-2 rounded ${project.progress === 100 ? 'bg-green-500' : project.progress === 0 ? 'bg-red-500' : 'bg-orange-500'}`}
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;