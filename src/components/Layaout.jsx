import Navbar from "./Navbar";

export default function Layaout({ children }) {
  const containerStyle = {
    with: "90%",
    margin: "100px auto",
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>{children}</div>
    </div>
  );
}
