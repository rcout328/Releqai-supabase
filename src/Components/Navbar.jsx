import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkContext from "../Context/DarkContext";
import supabase from "./Supabase";
import { LoginContext } from "../Context/Logincon";

const Navbar = () => {
  const [darks, setDarks] = useContext(DarkContext);
  const [sessions, setSession] = useContext(LoginContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setDarks(!darks);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Sign-out error:", error.message);
      } else {
        console.log("User signed out successfully");
        // You can redirect to a different page or perform other actions as needed
      }
    } catch (error) {
      console.error("Unexpected error during sign-out:", error.message);
    }
  };

  return (
    <nav
      className={`bg-${darks ? "white" : "black"} text-${
        darks ? "black" : "white"
      } py-4`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo Square Box */}
        <div
          className={`w-12 h-12 rounded-full bg-${
            darks ? "black" : "white"
          } flex items-center justify-center`}
        >
          <Link to="/">
            <div
              className={`text-xl font-semibold ${
                darks ? "text-white" : "text-black"
              }`}
            >
              YL
            </div>
          </Link>
        </div>

        {sessions ? (
          <div className="hidden md:flex space-x-6">
            <ul className="flex flex-row space-x-5">
              <li>
                <Link
                  to="/"
                  className={`hover:${darks ? "text-gray-400" : "text-white"}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aitool"
                  className={`hover:${darks ? "text-gray-400" : "text-white"}`}
                >
                  Ai tool
                </Link>
              </li>
              <li>
                <Link
                  to="/releqai"
                  className={`hover:${darks ? "text-gray-400" : "text-white"}`}
                >
                  Releq Ai
                </Link>
              </li>
              <li>
                <Link
                  to="/searchai"
                  className={`hover:${darks ? "text-gray-400" : "text-white"}`}
                >
                  Search ai
                </Link>
              </li>
              <li>
                <Link
                  to="/searchreleqai"
                  className={`hover:${darks ? "text-gray-400" : "text-white"}`}
                >
                  Search Releqai
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`hover:${darks ? "text-gray-400" : "text-white"}`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact1"
                  className={`hover:${darks ? "text-gray-400" : "text-white"}`}
                >
                  Contact1
                </Link>
              </li>
            </ul>
            <button
              onClick={toggle}
              className={`hover:${darks ? "text-gray-400" : "text-white"} `}
            >
              {darks ? "Light" : "Dark"}
            </button>
            <button
              onClick={signOut}
              className={`hover:${darks ? "text-gray-400" : "text-white"} ml-5`}
            >
              Signout
            </button>
          </div>
        ) : (
          <button></button>
        )}

        <div className="md:hidden flex items-center">
          <button
            className={`text-xl ${
              darks ? "text-black" : "text-white"
            } focus:outline-none`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {sessions ? (
          <div className="md:flex items-center space-x-4"></div>
        ) : (
          <div className="hidden md:flex space-x-4 md:flex-col">
            <Link
              to="/login"
              className={`hover:${darks ? "text-gray-400" : "text-white"}`}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={`hover:${darks ? "text-gray-400" : "text-white"}`}
            >
              Signup
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 border-t border-gray-700">
          {sessions ? (
            <>
              <ul
                className={`text-center py-4 ${
                  darks ? "text-white" : "text-white"
                } `}
              >
                <li>
                  <Link
                    to="/"
                    className={`block py-3 hover:${
                      darks ? "text-white" : "text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aitool"
                    className={`block py-3 hover:${
                      darks ? "text-gray-400" : "text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Ai tool
                  </Link>
                </li>
                <li>
                  <Link
                    to="/releqai"
                    className={`block py-3 hover:${
                      darks ? "text-gray-400" : "text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Releq Ai
                  </Link>
                </li>
                <li>
                  <Link
                    to="/searchai"
                    className={`block py-3 hover:${
                      darks ? "text-gray-400" : "text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Search ai
                  </Link>
                </li>
                <li>
                  <Link
                    to="/searchreleqai"
                    className={`block py-3 hover:${
                      darks ? "text-gray-400" : "text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Search Releqai
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`block py-3 hover:${
                      darks ? "text-gray-400" : "text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact1"
                    className={`block py-3 hover:${
                      darks ? "text-gray-400" : "text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact1
                  </Link>
                </li>
                <li
                  className={`block py-3 hover:${
                    darks ? "text-gray-400" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <button onClick={toggle}>{darks ? "Light" : "Dark"}</button>
                </li>
                <li
                  className={`block py-3 hover:${
                    darks ? "text-gray-400" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <button onClick={signOut}>Signout</button>
                </li>
              </ul>
            </>
          ) : (
            <div className="flex flex-col">
              <button>
                <Link
                  to="/login"
                  className={`block py-3 hover:${
                    darks ? "text-gray-400" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </button>
              <button>
                <Link
                  to="/signup"
                  className={`block py-3 hover:${
                    darks ? "text-gray-400" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Signup
                </Link>
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
