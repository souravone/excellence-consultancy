import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

function AppLayout() {
  return (
    <div>
      {/* <Navbar /> */}
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
