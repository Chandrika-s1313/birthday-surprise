import React, { useState } from "react";
import "./BirthdaySurprise.css";
import SurpriseCardScene from "./SurpriseCardScene";

const BirthdaySurprise = ({ onOpenMessage }) => {   // accept the prop
  const [showCardScene, setShowCardScene] = useState(false);

  const startSurprise = () => {
    setShowCardScene(true);
  };

  return (
    <div className="magic-background">
      {!showCardScene ? (
        <>
          <img src="/birthday.gif" alt="Birthday GIF" className="gif" />
          <h1>A Budamkay was born today, 24 years ago!</h1>
          <p>A little surprise awaits...</p>
          <button onClick={startSurprise}>🎁 Start the surprise</button>
        </>
      ) : (
        // pass the prop down here
        <SurpriseCardScene onOpenMessage={onOpenMessage} /> 
      )}
    </div>
  );
};

export default BirthdaySurprise;
