export const getProjects = async () => {
  return [
    { name: 'Amazon Clone', progress: 0 },
    { name: 'First Project', progress: 100 },
    { name: 'E-Com Website Design', progress: 60 },
  ];
};

export const getUser = async () => {
  return {
    name: 'Admin',
    email: 'ahmadwebcrafts@gmail.com',
    tasks: []
  };
};