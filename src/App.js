import React from "react";
import UserManagement from "./UserManagement";
import RoleManagement from "./RoleManagement";

const App = () => {
  return (
    <div>
      <h1>RBAC UI</h1>
      <UserManagement />
      <RoleManagement />
    </div>
  );
};

export default App;
