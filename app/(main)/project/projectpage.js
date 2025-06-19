import React from 'react';

const ProjectPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white shadow-md p-5 flex flex-col gap-6">
        <div className="text-2xl font-bold text-purple-700 flex items-center gap-2">
          <img src="/logo.png" alt="Taskify Logo" className="h-8" />
          TASKIFY
        </div>
        <nav className="flex flex-col gap-4 text-gray-700 text-lg">
          <a href="/dashboard" className="hover:text-purple-600">Dashboard</a>
          <a href="/projects" className="hover:text-purple-600">Projects</a>
          <a href="/logout" className="hover:text-purple-600">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-3/5 p-8">
        <h1 className="text-2xl font-semibold mb-6">First Project</h1>
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: 'View', icon: '👁' },
            { label: 'Edit', icon: '✏' },
            { label: 'Todo', icon: '🗒' },
            { label: 'Calendar', icon: '📅' },
            { label: 'Comments', icon: '💬' },
            { label: 'Files', icon: '📁' },
            { label: 'Delete', icon: '🗑' }
          ].map((btn) => (
            <div
              key={btn.label}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:bg-purple-50 cursor-pointer transition-all"
            >
              <div className="text-3xl mb-2">{btn.icon}</div>
              <div className="text-lg font-medium text-purple-700">{btn.label}</div>
            </div>
          ))}
        </div>
      </main>

      {}
      <aside className="w-1/5 p-6 bg-white shadow-md">
        <div className="mb-4">
          <h3 className="text-gray-800 font-bold text-lg">Hafiz Fahad</h3>
          <p className="text-sm text-gray-600">hafizfahadmumtaz@gmail.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2"># You have 2 tasks</h4>
          <div className="text-sm space-y-3">
            <div>
              <span className="block text-xs text-gray-500">June 19, 2025</span>
              <span>Handle the speed of website</span>
            </div>
            <div>
              <span className="block text-xs text-gray-500">June 18, 2025</span>
              <span>Make Payment Integration</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProjectPage;