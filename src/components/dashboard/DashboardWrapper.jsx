import React from "react";

function DashboardWrapper({ children }) {
  return <div>{children || <div>Dashboard child</div>}</div>;
}

export default DashboardWrapper;
