import { Link } from "react-router-dom";
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";
const Navbar = () => {
  const [darks, setDarks] = useContext(DarkContext);

  const toggle = () => {
    setDarks(!darks);
  };
  return (
    <div
      className={`flex flex-row ${
        darks ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Link to="/">
        <div
          className={`flex w-20 h-10 ${
            darks ? "bg-black text-white" : "bg-white text-black"
          } justify-center items-center ml-5 mt-5`}
        >
          Releqai
        </div>
      </Link>

      <div className="flex mt-7 absolute top-0 right-0 mr-10">
        <ul className="flex flex-row space-x-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aitool">Ai tool</Link>
          </li>
          <li>
            <Link to="/releqai">Releq Ai</Link>
          </li>
          <li>
            <Link to="/searchai">Search ai</Link>
          </li>
          <li>
            <Link to="/searchreleqai">Search Releqai</Link>
          </li>
        </ul>
        <button onClick={toggle} className="pl-5">
          {darks ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
