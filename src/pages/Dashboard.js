import React from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import RoleList from '../components/RoleList';

const Dashboard = () => {
  return (
    <div>
      <UserForm onUserAdded={() => window.location.reload()} />
      <UserList />
      <RoleList />
    </div>
  );
};

export default Dashboard;
