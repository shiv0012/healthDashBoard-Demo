import { useState } from "react";

const HeartRateCard = () => {
  const [heartRate, setHeartRate] = useState(0);

  const updateHeartRate = () => {
    const newHeartRate = Math.floor(Math.random() * 100) + 60;
    setHeartRate(newHeartRate);
  };

  return (
    <div className="card">
      <h2>Heart Rate</h2>
      <p>{heartRate}</p>
      <button className="btn" onClick={updateHeartRate}>
        Update
      </button>
    </div>
  );
};

export default HeartRateCard;
