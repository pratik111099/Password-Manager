import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./feature/Signup/Signup";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
