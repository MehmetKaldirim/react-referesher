import React from "react";
import "./GoalList.css";
const GoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((el) => {
        return <li key={el.id}>{el.goal}</li>;
      })}
    </ul>
  );
};

export default GoalList;
