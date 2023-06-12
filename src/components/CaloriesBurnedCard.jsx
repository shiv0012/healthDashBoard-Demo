import { useState, useEffect } from "react";
const CaloriesBurnedCard = ({ stepsCount, heartRate }) => {
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  useEffect(() => {
    const calculateCaloriesBurned = () => {
      // Calculation logic for calories burned based on steps count and heart rate
      // Replace this with your own calculation logic
      const calculatedCaloriesBurned = stepsCount * 0.05 + heartRate * 0.02;
      return calculatedCaloriesBurned.toFixed(2); // Round to 2 decimal places
    };

    setCaloriesBurned(calculateCaloriesBurned());
  }, [stepsCount, heartRate]);

  return (
    <div className="card">
      <h2>Calories Burned</h2>
      <p>Steps Count: {stepsCount}</p>
      <p>Heart Rate: {heartRate}</p>
      <p>Calories Burned: {caloriesBurned} kcal</p>
    </div>
  );
};

export default CaloriesBurnedCard;
