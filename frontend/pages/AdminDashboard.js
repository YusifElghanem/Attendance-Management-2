import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>لوحة المشرف</h1>
      <Link to="/players-attendance">
        <button>حضور اللاعبين</button>
      </Link>
      <Link to="/trainers-exercises">
        <button>تمارين المدربين</button>
      </Link>
      <Link to="/attendance-tracking">
        <button>الحضور والانصراف</button>
      </Link>
      <Link to="/player-details">
        <button>تفاصيل اللاعبين</button>
      </Link>
      <Link to="/trainers">
        <button>تفاصيل المدربين</button>
      </Link>
    </div>
  );
};

export default AdminDashboard;
