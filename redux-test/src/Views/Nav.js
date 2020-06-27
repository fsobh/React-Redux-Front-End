import React from "react";
import logo from "../logo.svg";

export default function NavBar() {
  return (
    <nav
      style={{
        height: 60,
        background: "#282c34",
        top: 0,
        display: "flex",
        alignItems: "center",
        position: "fixed",
        width: "100%",
      }}
    >
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ height: 50, width: 50 }}
      />
      <a style={{ margin: 5, color: "#fff", textDecoration: "none" }} href="/">
        Home
      </a>
      <a
        style={{ margin: 5, color: "#fff", textDecoration: "none" }}
        href="/Login"
      >
        Login
      </a>
      <a style={{ margin: 5, color: "#fff", textDecoration: "none" }}>
        Contact
      </a>
      <a style={{ margin: 5, color: "#fff", textDecoration: "none" }}>About</a>
    </nav>
  );
}
