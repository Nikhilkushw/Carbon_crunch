import React from "react";
import Navbar from "./navbar/navbar";
import Content from "./content/content";
import Extra_content from "./extra_content/extra_content";
import "./App.css";
import bg from "./assets/image.png";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "0px 40px",
        }}
      >
        <Navbar />
        <div style={{ marginTop: "150px" }}>
          <Content />
        </div>
      </div>
      <div>
        <Extra_content />
      </div>
    </div>
  );
};

export default App;
