import { createContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MoreDetails from "./components/MoreDetails/MoreDetails";
export const MealContext = createContext("data");



function App() {
  

  return (
    <div className="App">
  
       <h2 className="app-title"> <Link className="app-title-link" to = '/'> Recipe <span className="colored">React App</span> </Link> </h2>
      <MealContext.Provider value={''}>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MoreDetails />} />
        
      </Routes>
      </MealContext.Provider>
    </div>
  );
}

export default App;
