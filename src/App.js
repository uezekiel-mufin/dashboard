import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import Home from "./Component/Home/Home";
import { css } from "@emotion/react";
import "./app.css";
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='app'>
      {loading ? <BounceLoader size={300} color='purple' /> : <Home />}
    </div>
  );
};

export default App;
