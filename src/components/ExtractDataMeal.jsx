import { useState } from "react";

const ExtractDataMeal = ({ setDataMeal }) => {
  const [meal, setMeal] = useState("");

  const getDataMeal = async () => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.meals) {
        setDataMeal(data.meals[0]);
      } else {
        alert("Comida no encontrada");
      }
    } catch (error) {
      console.error("Error al traer la comida:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="Ej: Pizza"
      />
      <button onClick={getDataMeal}>Show Meal</button>
    </div>
  );
};

export default ExtractDataMeal;