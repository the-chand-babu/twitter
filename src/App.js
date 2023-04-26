import logo from "./logo.svg";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import SignIn from "./pages/signIn/SignIn.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import Home from "./pages/homePage/Home.jsx";
function App() {
  return (
    <div className="App">
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
     
    </div>
  );
}

export default App;
