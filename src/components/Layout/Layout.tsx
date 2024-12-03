import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Toolbar from "@components/Toolbar";

export default function Layout({ type }) {
  const [isToolbarOpen, setIsToolbarOpen] = useState(true);

  const toggleToolbar = () => {
    setIsToolbarOpen(!isToolbarOpen);
  };
  console.log(type == "main");
  if (type == "main") {
    return (
      <>
        <Header
          isToolbarOpen={isToolbarOpen}
          toggleToolbar={toggleToolbar}
          type="main"
        />
        <Toolbar isToolbarOpen={isToolbarOpen} isRole="user" />
        <main
          style={{
            marginLeft: isToolbarOpen ? "243px" : "0px",
            backgroundColor: "#f7f7f7",
            overflowX: "hidden",
            transition: "0.5s ease-out",
          }}
        >
          <Outlet context={isToolbarOpen} />
        </main>
        <Footer isToolbarOpen={isToolbarOpen} />
      </>
    );
  } else if (type == "admin") {
    return (
      <>
        <Header
          isToolbarOpen={isToolbarOpen}
          toggleToolbar={toggleToolbar}
          type="main"
        />
        <Toolbar isToolbarOpen={isToolbarOpen} isRole="admin" />
        <main
          style={{
            marginLeft: isToolbarOpen ? "243px" : "0px",
            backgroundColor: "#f7f7f7",
            overflowX: "hidden",
            transition: "0.5s ease-out",
          }}
        >
          <Outlet context={isToolbarOpen} />
        </main>
        <Footer isToolbarOpen={isToolbarOpen} />
      </>
    );
  } else {
    return (
      <>
        <Header type="custom" />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}
