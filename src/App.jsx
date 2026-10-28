import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AOS from "aos";
import { useEffect } from "react";
import { useResponsive } from "./hooks/useResponsive";

function App() {
  const { isDesktop, isTablet } = useResponsive();
  useEffect(() => {
    AOS.init({
      duration: 1000, // kecepatan animasi (1 detik)
      once: false, // set true jika ingin animasi cuma jalan 1 kali
    });
  }, [isDesktop, isTablet]);

  useEffect(() => {
    AOS.refreshHard();
  }, []);
  return (
    <div className="md:h-dvh flex flex-col">
      <Navbar />
      <Outlet></Outlet>
      <Footer> </Footer>
    </div>
  );
}

export default App;
