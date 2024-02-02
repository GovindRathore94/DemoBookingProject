import RootLayout from "./layout/Rootlayout";
import RequireAuth from "./component/RequireAuth";
import AuthProvider from "./context/AuthProvider";

import {
  Home,
  Services,
  About,
  Contact,
  Login,
  Signup,
  Error,
  OrderBookingPage,
  AllotementPage,
  DeliveryOrder,
} from "./pages";

// Step 1
// import 4 things

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Step 2 // Create Route

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Error />} />
      <Route path="/orderBookingPage" element={<OrderBookingPage />} />
      <Route path="/allotementPage" element={<AllotementPage />} />
      <Route path="/deliveryOrderPage" element={<DeliveryOrder />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
