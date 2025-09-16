import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./feature/Signup/Signup";
import Login from "./feature/Login/Login";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
