import { Link } from "react-router-dom";

export default function Navbar() {
  const navContainerStyle = {
    padding: '10px',
    gap: '5px',
    justifyContent: 'center'
  }

  const linkStyle = {
    padding: '10px',
    fontSize: '18px',
    color: 'white'
  }

  return (
    <div style={navContainerStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/create">Create</Link>
    </div>
  );
}
