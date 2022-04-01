import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
export const MealContext = createContext("data");



function App() {
  
  const hi = <p>Hi from App.js</p>;
  const bye = <p>Bye from App.js</p>

  return (
    <div className="App">
      <MealContext.Provider value={[hi,bye]}>
      <Routes>
        
          <Route path="/" element={<Home />} />
        
      </Routes>
      </MealContext.Provider>
    </div>
  );
}

export default App;
