import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="md:h-dvh flex flex-col">
      <Navbar />

      <Outlet></Outlet>
      <Footer> </Footer>
    </div>
  );
}

export default App;
