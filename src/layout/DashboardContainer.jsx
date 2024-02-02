import styles from "./Dashboard.module.css";
import { NavLink } from "react-router-dom";

function DashbordContainer() {
  return (
    <>
      <div className={styles.mainDashbord}>
        {/* <h1>Main Dashbord</h1> */}
        <header className={styles.header}>
          <h3>Header Section</h3>
        </header>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <NavLink
                to="/orderBookingPage"
                className={(obj) => {
                  return obj.isActive ? "activeNav" : null;
                }}
              >
                Order Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allotementPage"
                className={(obj) => {
                  return obj.isActive ? "activeNav" : null;
                }}
              >
                Vehicle Allotement
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/deliveryOrderPage"
                className={(obj) => {
                  return obj.isActive ? "activeNav" : null;
                }}
              >
                Delivery Order
              </NavLink>
            </li>
          </ul>
          {/* <li>
            <a href="home">Order Booking</a>
          </li>
          <li>
            <a href="home">Allotement</a>
          </li>
          <li>
            <a href="home">Delivery Order</a>
          </li>
          <li>
            {" "}
            <a href="home">Sales Invoice</a>
          </li>
          <li>
            <a href="home">Payment Receipts</a>
          </li> */}
        </nav>
        <main className={styles.mainContent}>
          <h1>Main Content</h1>
        </main>
        <footer className={styles.footerContent}>
          <h3>Footer Content</h3>
        </footer>
      </div>
    </>
  );
}

export default DashbordContainer;
