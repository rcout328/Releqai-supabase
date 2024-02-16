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
]);
function App() {
  return (
    <>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </>
  );
}

export default App;
