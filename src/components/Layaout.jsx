import Navbar from "./Navbar";

export default function Layaout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
