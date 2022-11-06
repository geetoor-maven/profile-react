import React from "react";
import "../style/Gallery.css";
import Photo from "./Photo";

const Gallery = () => {
    return (
        <div className="containergallery">
            <div className="image-container">
                <Photo comment={2} love={100} url={require("../img/photo1.jpeg")} />
                <Photo comment={4} love={90} url={require("../img/photo2.jpeg")}/>
                <Photo comment={7} love={30} url={require("../img/photo3.jpeg")}/>
                <Photo comment={8} love={40} url={require("../img/photo5.jpeg")}/>
                <Photo comment={7} love={35} url={require("../img/photo4.jpeg")}/>
                <Photo comment={8} love={40} url={require("../img/photo6.jpeg")}/>
                <Photo comment={8} love={90} url={require("../img/photo8.jpeg")}/>
                <Photo comment={3} love={45} url={require("../img/photo9.jpeg")}/>
                <Photo comment={1} love={40} url={require("../img/photo10.jpeg")}/>
                <Photo comment={10} love={50} url={require("../img/photo11.jpeg")}/>
                <Photo comment={8} love={40} url={require("../img/photo12.jpeg")}/>
            </div>
        </div>
    );
};

export default Gallery;
