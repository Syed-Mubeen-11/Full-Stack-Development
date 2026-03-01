import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <>
      <Header />
      
      {/* Pages will render BELOW navbar */}
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
