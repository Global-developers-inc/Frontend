import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
