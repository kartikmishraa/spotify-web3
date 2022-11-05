import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from "../helpers/albumList";

const Home = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab="FEATURED" key="1">
          <h1 className="featuredTitle">This Too Shall Pass</h1>
          <div className="albums">
            {library.map((e) => (
              <Link className="albumSelection" to="/album" state={e}>
                <img
                  src={e.image}
                  alt="album-img"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{e.title}</p>
              </Link>
            ))}
          </div>
        </Tabs.TabPane>

        <Tabs.TabPane tab="GENRES & MOODS" key="2">
          <h1 className="featuredTitle">Pop</h1>
          <div className="albums">
            {library.slice(5, 11).map((e) => (
              <Link className="albumSelection" to="/album" state={e}>
                <img
                  src={e.image}
                  alt="album-img"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{e.title}</p>
              </Link>
            ))}
          </div>
          <h1 className="featuredTitle">Classics</h1>
          <div className="albums">
            {library.slice(12, 17).map((e) => (
              <Link className="albumSelection" to="/album" state={e}>
                <img
                  src={e.image}
                  alt="album-img"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{e.title}</p>
              </Link>
            ))}
          </div>
          <h1 className="featuredTitle">Rock</h1>
          <div className="albums">
            {library.slice(2, 7).map((e) => (
              <Link className="albumSelection" to="/album" state={e}>
                <img
                  src={e.image}
                  alt="album-img"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{e.title}</p>
              </Link>
            ))}
          </div>
        </Tabs.TabPane>

        <Tabs.TabPane tab="NEW RELEASES" key="3">
          <h1 className="featuredTitle">Find Something New</h1>
          <div className="albums">
            {library.slice(0, 4).map((e) => (
              <Link className="albumSelection" to="/album" state={e}>
                <img
                  src={e.image}
                  alt="album-img"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{e.title}</p>
              </Link>
            ))}
          </div>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default Home;
