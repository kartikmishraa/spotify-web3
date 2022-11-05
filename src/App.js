import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
        <Link to="/" style={{ color: "#1DB954" }}>
          <p>Home</p>
        </Link>
        {/* <Link to="/album" style={{ color: "#1DB954" }}>
          <p>Albums</p>
        </Link> */}
        <p>Your Music</p>
        <div className="recentPlayed">
          <p className="recentTitle"> RECENTLY PLAYED</p>
          <div className="install">
            <span>Install App</span>
            <DownCircleOutlined style={{ fontSize: "30px" }} />
          </div>
        </div>
      </Sider>
      <Content className="contentWindow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
