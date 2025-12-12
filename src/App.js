import React, { useState } from "react";
import BirthdayIntro from "./components/BirthdayIntro";
import BirthdaySurprise from "./components/BirthdaySurprise";
import BirthdayBook from "./components/BirthdayBook";

function App() {
  const [stage, setStage] = useState("intro");

  const handleReplay = () => {
    setStage("intro");
  };

  return (
    <div className="App">
      {stage === "intro" && (
        <BirthdayIntro onComplete={() => setStage("surprise")} />
      )}
      {stage === "surprise" && (
        <BirthdaySurprise onOpenMessage={() => setStage("message")} />
      )}
      {stage === "message" && <BirthdayBook onReplay={handleReplay} />}
    </div>
  );
}
export default App;
