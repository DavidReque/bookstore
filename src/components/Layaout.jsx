import { containerStyle } from "../Styles/styles";
import Navbar from "./Navbar";

export default function Layaout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={containerStyle}>{children}</div>
    </div>
  );
}
