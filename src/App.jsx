import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [food, setFood] = useState([]);
  const [starter, setStarter] = useState(3);

  const loadBtn = () => {
    setStarter((food) => (food += 3));
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
      .then((response) => response.json())
      .then((data) => setFood(data.meals));
  }, []);

  return (
    <div className="App">
      <h1>
        British Meals
        <img
          className="imgDiv"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/640px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
          alt=""
        />
      </h1>

      <div className="container">
        {food.slice(0, starter).map((items) => {
          return (
            <div className="card">
              <div className="img">
                <img src={items.strMealThumb} alt="" />
                <p> {items.strMeal} </p>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => loadBtn()}>Load More</button>
    </div>
  );
};

export default App;
