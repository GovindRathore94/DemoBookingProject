import React from "react";
import AnalogWatch from "../component/AnalogWatch";
import DashboardContainer from "../layout/DashboardContainer";
// import styles from "../layout/DashboardContainer.module.css";

function Login() {
  return (
    <>
      <div>Admin Login</div>
      <br />
      <div>
        <AnalogWatch />
      </div>
      <div>
        <DashboardContainer />
      </div>
    </>
  );
}

export default Login;
