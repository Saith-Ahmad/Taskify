import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import UserPanel from '../components/UserPanel';
import { getProjects, getUser } from '../services/api';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProjects().then(data => setProjects(data));
    getUser().then(data => setUser(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="w-3/5 p-10">
        <h2 className="text-xl font-semibold mb-4">Welcome</h2>
        <p className="mb-8 text-sm">
          Welcome to Taskify. The only project management system you need to handle all your organizational processes. We will be happy to provide you the management services what you deserve!
        </p>
        <h3 className="text-lg font-semibold mb-4">Projects</h3>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <h3 className="text-md font-semibold mt-10 text-purple-700">✔ You Have {user?.tasks?.length ?? 0} Task</h3>
        <p className="text-sm text-gray-500">Well done! You don’t have any task from your projects.</p>
      </main>
      <UserPanel user={user} />
    </div>
  );
};

export default Dashboard;