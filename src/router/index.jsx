import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/about";
import Skill from "../pages/skill";
import Educations from "../pages/educations";
import Experiences from "../pages/experiences";
import Portfolio from "../pages/portofolio";
import Certification from "../pages/certification";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/skill", element: <Skill /> },
      { path: "/education", element: <Educations /> },
      { path: "/experience", element: <Experiences /> },
      { path: "/certification", element: <Certification /> },
      { path: "/portofolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
