import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Aitools from "./Components/Aitools";
import ReleqAitools from "./Components/Releqaitools";
import SearchAitools from "./Components/SearchAitools";
import SearchReleqaitools from "./Components/SearchReleqaitool";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { DarkModeProvider } from "./Context/DarkContext";
import Contactform from "./Components/Contactform";
import ContactFormReactHookForm from "./Components/ContactForm1";
import Logincon from "./Context/Logincon";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aitool",
    element: <Aitools />,
  },
  {
    path: "/releqai",
    element: <ReleqAitools />,
  },
  {
    path: "/searchai",
    element: <SearchAitools />,
  },
  {
    path: "/searchreleqai",
    element: <SearchReleqaitools />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/contact",
    element: <Contactform />,
  },
  {
    path: "/contact1",
    element: <ContactFormReactHookForm />,
  },
]);
function App() {
  return (
    <>
      <Logincon>
        <DarkModeProvider>
          <RouterProvider router={router} />
        </DarkModeProvider>
      </Logincon>
    </>
  );
}

export default App;
