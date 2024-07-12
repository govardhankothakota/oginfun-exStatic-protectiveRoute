import logo from "./logo.svg";
import "./App.css";
import Signup from "./component/Signup";
import Login from "./component/Login";
import DashBoard from "./component/DashBoard";
import DailyStatus from "./component/DailyStatus";
import Home from "./component/Home";
import Messages from "./component/Massages";
import More from "./component/More";
import Task from "./component/Task";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dsu" element={<DailyStatus />}></Route>
          <Route path="/task" element={<Task />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/more" element={<More />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
