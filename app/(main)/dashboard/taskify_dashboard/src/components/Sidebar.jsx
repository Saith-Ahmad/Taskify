import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-white p-6 shadow-md flex flex-col gap-6">
      <div className="text-2xl font-bold text-purple-700 flex items-center gap-2">
        <img src="/logo.png" alt="Taskify Logo" className="h-8" />
        TASKIFY
      </div>
      <nav className="flex flex-col gap-4 text-gray-800 text-lg">
        <a href="#" className="bg-purple-600 text-white rounded-md px-3 py-2">Dashboard</a>
        <a href="#" className="hover:text-purple-700">Projects</a>
        <a href="#" className="hover:text-purple-700">Logout</a>
      </nav>
    </aside>
  );
};

export default Sidebar;