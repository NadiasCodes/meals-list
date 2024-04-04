import React from "react";
import { useMealsListContext } from "../Provider/MealsProvider";
import "./MealsList.css";

const MealsList = () => {
  const { meals } = useMealsListContext();
  return (
    <div className="meals-container">
      <div className="meals-box">
        <h1>Meals List using Context API</h1>
        {meals.map((meal, index) => (
          <h2 key={index}>{meal}</h2>
        ))}
      </div>
    </div>
  );
};

export default MealsList;
