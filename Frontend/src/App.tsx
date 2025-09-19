import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./feature/Signup/Signup";
import Login from "./feature/Login/Login";
import Dashboard from "./feature/Dashboard/Dashboard";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
