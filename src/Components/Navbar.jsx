import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row">
      <Link to="/">
        <div className="flex w-20 h-10 bg-black text-white justify-center items-center ml-5 mt-5">
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
      </div>
    </div>
  );
};

export default Navbar;
