import React from "react";
import { Link } from "react-router-dom";

const TrainerDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>لوحة المدرب</h1>
      <Link to="/players-attendance">
        <button>حضور اللاعبين</button>
      </Link>
      <Link to="/trainers-exercises">
        <button>تمارين المدربين</button>
      </Link>
    </div>
  );
};

export default TrainerDashboard;
