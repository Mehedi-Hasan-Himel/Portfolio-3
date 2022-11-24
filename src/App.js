import "./App.css";

// import conponents
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

// import router
import { BrowserRouter } from "react-router-dom";

// import motion
// import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <AnimRoutes></AnimRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
