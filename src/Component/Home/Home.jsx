import React from "react";
import DrawerComp from "../Drawer/Drawer.jsx";
import Main from "../Main/Main.jsx";
import Date from "../Date/Date.jsx";
const Home = () => {
  return (
    <>
      <DrawerComp />
      <Date />
      <Main />
    </>
  );
};

export default Home;
