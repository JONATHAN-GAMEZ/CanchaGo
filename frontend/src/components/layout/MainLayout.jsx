import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
