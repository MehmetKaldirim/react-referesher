import React from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const courseGoals = [
    { id: "cg1", goal: "Refresh your React knowledge" },
    { id: "cg2", goal: "Refresh your Express knowledge" },
    { id: "cg3", goal: "Refresh your MongoDB knowledge" },
    { id: "cg4", goal: "Deploy your MERN App" },
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals);
  };
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
