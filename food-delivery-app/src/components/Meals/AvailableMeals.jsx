import React, { Fragment } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealIem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza",
    description: "With Finest veggies",
    price: 250,
  },
  {
    id: "m2",
    name: "Pasta",
    description: "A german specialty!",
    price: 150,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American,raw,",
    price: 100,
  },
  {
    id: "m4",
    name: "Chinese",
    description: "Healthy...and green...",
    price: 80,
  },
];

const AvailableMeals = () => {
  let mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}  
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Fragment>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default AvailableMeals;
