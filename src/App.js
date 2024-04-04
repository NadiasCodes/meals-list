import "./App.css";
import Counter from "./Components/Counter";
import MealsList from "./Components/MealsList";
import MealsProvider from "./Provider/MealsProvider";

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
