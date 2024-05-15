import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex-wrap">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
