import { useState, CSSProperties } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Spinner() {
  const [loading] = useState(true);
  const [color] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <MoonLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={36}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;