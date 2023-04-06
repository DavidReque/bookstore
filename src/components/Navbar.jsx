import { Link } from "react-router-dom";
import { linkStyle, navContainerStyle } from "../Styles/styles";

export default function Navbar() {
  return (
    <div style={navContainerStyle}>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/create">
        Create
      </Link>
    </div>
  );
}
