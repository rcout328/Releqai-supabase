import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Aitools from "./Components/Aitools";
import ReleqAitools from "./Components/Releqaitools";
import SearchAitools from "./Components/SearchAitools";
import SearchReleqaitools from "./Components/SearchReleqaitool";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
