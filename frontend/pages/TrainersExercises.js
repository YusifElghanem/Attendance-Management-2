import React, { useState, useEffect } from "react";

const TrainersExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [trainerName, setTrainerName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/exercises")
      .then((response) => response.json())
      .then((data) => setExercises(data));
  }, []);

  const addExercise = () => {
    fetch("http://localhost:5000/api/exercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: exerciseName, trainer: trainerName }),
    }).then(() => {
      setExercises([...exercises, { name: exerciseName, trainer: trainerName }]);
      setExerciseName("");
      setTrainerName("");
    });
  };

  return (
    <div>
      <h1>تمارين المدربين</h1>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name} - {exercise.trainer}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="اسم التمرين"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <input
        type="text"
        placeholder="اسم المدرب"
        value={trainerName}
        onChange={(e) => setTrainerName(e.target.value)}
      />
      <button onClick={addExercise}>إضافة تمرين</button>
    </div>
  );
};

export default TrainersExercises;
