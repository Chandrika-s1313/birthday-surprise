import React, { useState } from "react";
import "./BirthdayMessage.css";

const BirthdayMessage = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="message-background">
      <div className={`book-frame ${opened ? "opened" : ""}`}>
        {/* Inside page */}
        <div className="book-page">
          <h2 className="message-title">Happy Birthday Nanna</h2>
          <p className="message-text">
            You deserve all the happiness, love, and smiles in the world today and always.
            Hope you spend the day with abundance of love from your beloved ones.
            

          </p>
          <button className="back-btn" onClick={() => setOpened(false)}>
            ←
          </button>
        </div>

        {/* Cover with GIF */}
        <div className="book-cover">
          <h2 className="message-title">A Special Message</h2>

          {/* Add your GIF here */}
          <img src="/bubu-dudu-sseeyall.gif" alt="Birthday animation" className="cover-gif" />

          <div className="balloon-graphic">🎈🎈🎈</div>
          <div className="bow">🎁</div>

          {!opened && (
            <button className="tap-btn" onClick={() => setOpened(true)}>
              Tap to Open
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessage;
