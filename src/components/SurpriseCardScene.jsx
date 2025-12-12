import React, { useState } from "react";
import "./SurpriseCardScene.css";

const photoList = [
  "/photos/photo1.jpg",
  "/photos/photo2.JPG",
  "/photos/photo3.JPG",
  "/photos/photo4.JPG",
  "/photos/photo5.jpg",
  "/photos/photo6.jpg",
  "/photos/photo7.JPG",
  "/photos/photo8.JPG",
  "/photos/photo9.JPG",
  "/photos/photo10.jpg",
  "/photos/photo11.jpg",
  "/photos/photo12.jpg",
  "/photos/photo13.jpg",
  "/photos/photo14.jpg",
  "/photos/photo15.jpg",
  "/photos/photo16.jpg",
  "/photos/photo17.jpg",
  "/photos/photo18.jpg",
  "/photos/photo19.JPG",
  "/photos/photo20.jpg",
  "/photos/photo21.JPG",
  "/photos/photo22.JPG",
  "/photos/photo23.JPG",
  "/photos/photo24.jpg"
];

const SurpriseCardScene = ({ onOpenMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % photoList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + photoList.length) % photoList.length);
  };

  return (
    <div className="magic-background">
      <div className="card-title">Some Sweet 24 moments of us</div>
      <div className="card-subtitle">(Swipe the cards)</div>

      <div className="card-stack">
        <button className="arrow-btn left" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="card">
          <img
            src={photoList[currentIndex]}
            alt={`Memory ${currentIndex + 1}`}
            className="card-img"
          />
          <div className="heart-icon left">💖</div>
          <div className="heart-icon right">💖</div>
        </div>

        <button className="arrow-btn right" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {currentIndex === photoList.length - 1 && (
        <button className="open-message-btn" onClick={onOpenMessage}>
          Open My Message
        </button>
      )}
    </div>
  );
};

export default SurpriseCardScene;
