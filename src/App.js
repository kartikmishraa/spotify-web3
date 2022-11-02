import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import "./App.css";
import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
const { Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider width={300} className="sideBar">
        <img src={Spotify} alt="spotify-logo" className="logo" />
        <div className="searchBar">
          <span>Search</span>
          <SearchOutlined style={{ fontSize: "30px" }} />
        </div>
        <div className="homePage">Home</div> {/*To be verified*/}
        <div className="albumPage">Your Albums</div> {/*To be verified*/}
      </Sider>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
