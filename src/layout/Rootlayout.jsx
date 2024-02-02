import { Outlet, Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import logo from "../assets/img/logo.png";
import styles from "./RootLayout.module.css";
import { useNavigate } from "react-router-dom";
import Container from "../component/UI/Container";

function RootLayout() {
  const { isLoggedIn, setIsloggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <NavLink
              to="/"
              className={(obj) => {
                return obj.isActive ? "activeNav" : null;
              }}
            >
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <nav className={styles.navItems}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={(obj) => {
                    return obj.isActive ? "activeNav" : null;
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Services"
                  className={(obj) => {
                    return obj.isActive ? "activeNav" : null;
                  }}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={(obj) => {
                    return obj.isActive ? "activeNav" : null;
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  // (isActive) Direct DeStructure from Object
                  className={({ isActive }) => {
                    return isActive ? "activeNav" : null;
                  }}
                >
                  Contact
                </NavLink>
              </li>
              {!isLoggedIn && (
                <li>
                  <NavLink
                    to="login"
                    // (isActive) Direct DeStructure from Object
                    className={({ isActive }) => {
                      return isActive ? "activeNav" : null;
                    }}
                  >
                    Admin Login
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                // (
                //   <li>
                //     <NavLink
                //       onClick={() => {
                //         setIsloggedIn(false);
                //       }}
                //       to="/login"
                //       // (isActive) Direct DeStructure from Object
                //       className={({ isActive }) => {
                //         return isActive ? "activeNav" : null;
                //       }}
                //     >
                //       Logout
                //     </NavLink>
                //   </li>
                // )
                <button
                  onClick={() => {
                    setIsloggedIn(false);
                  }}
                >
                  Logout
                </button>
              )}
            </ul>
          </nav>
        </div>

        <br />
        {/* <hr /> */}
        <br />
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}

export default RootLayout;
