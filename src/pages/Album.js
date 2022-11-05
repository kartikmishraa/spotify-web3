import React from "react";
import { useLocation } from "react-router-dom";
import albumDetails from "../helpers/apiCallResponse";
import "./Album.css";
import Opensea from "../images/opensea.png";
import { ClockCircleOutlined } from "@ant-design/icons";

const Album = () => {
  const { state: album } = useLocation();

  return (
    <>
      <div className="albumContent">
        <div className="topBan">
          <img src={album.image} alt="album-logo" className="albumCover" />
          <div className="albumDeets">
            <div>ALBUM</div>
            <div className="title">{album.title}</div>
            <div className="artist">
              {albumDetails && JSON.parse(albumDetails[0].metadata).artist}
            </div>
            <div>
              {albumDetails && JSON.parse(albumDetails[0].metadata).year}{" "}
              &#9830; {"  "}
              {albumDetails && albumDetails.length} Songs
            </div>
          </div>
        </div>
        <div className="topBan">
          <div
            className="playButton"
            onClick={() => {
              console.log("startMusic");
            }}
          >
            PLAY
          </div>
          <div
            className="openButton"
            onClick={() => {
              window.open(
                `https://testnets.opensea.io/assets/mumbai/${album.contract}/1`
              );
            }}
          >
            OpenSea
            <img src={Opensea} className="openLogo" />
          </div>
        </div>

        <div className="tableHeader">
          <div className="numberHeader">#</div>
          <div className="titleHeader">TITLE</div>
          <div className="numberHeader">
            <ClockCircleOutlined />
          </div>
        </div>

        {albumDetails &&
          albumDetails.map((nft, i) => {
            nft = JSON.parse(nft.metadata);
            return (
              <>
                <div className="tableContent">
                  <div className="numberHeader">{i + 1}</div>
                  <div
                    className="titleHeader"
                    style={{ color: "rgb(205, 203, 203)" }}
                  >
                    {nft.name}
                  </div>
                  <div className="numberHeader">{nft.duration}</div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Album;
