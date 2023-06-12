import { useState } from "react";

const StepsCard = () => {
  const [stepsCount, setStepsCount] = useState(0);

  const incrementSteps = () => {
    setStepsCount(stepsCount + 1);
  };

  return (
    <div className="card">
      <h2>Steps</h2>
      <p>{stepsCount}</p>
      <button className="btn" onClick={incrementSteps}>
        Increment
      </button>
    </div>
  );
};

export default StepsCard;
