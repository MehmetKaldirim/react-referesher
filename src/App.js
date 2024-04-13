import React from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";

const App = () => {
  const courseGoals = [
    { id: "cg1", goal: "Refresh your React knowledge" },
    { id: "cg2", goal: "Refresh your Express knowledge" },
    { id: "cg3", goal: "Refresh your MongoDB knowledge" },
    { id: "cg4", goal: "Deploy your MERN App" },
  ];
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
