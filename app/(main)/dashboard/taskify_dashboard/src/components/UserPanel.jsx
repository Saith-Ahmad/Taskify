import React from 'react';

const UserPanel = ({ user }) => {
  return (
    <aside className="w-1/5 bg-white p-6 shadow-md">
      {user && (
        <>
          <div className="mb-4">
            <h3 className="font-bold text-lg">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <div className="bg-purple-100 text-purple-700 p-3 rounded-md text-sm">
            <strong>✅ You have {user.tasks.length} task</strong><br />
            Well done! You don't have any task from your projects.
          </div>
        </>
      )}
    </aside>
  );
};

export default UserPanel;