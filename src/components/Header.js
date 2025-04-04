import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from
"../context/DarkModeContext";
import "../styles/header.css";
function Header() {
const { darkMode, setDarkMode } =
useContext(DarkModeContext);
return (
<nav className="navbar">
<Link to="/">Home</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
<button className="toggle-dark-mode topright"
onClick={() => setDarkMode(!darkMode)}>
{darkMode ? " Light Mode" : " DarkMode"}
</button>
</nav>
);
}
export default Header;