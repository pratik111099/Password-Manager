import "./index.css";
import logo from "../../assets/Gemini_Generated_Image_b5vj43b5vj43b5vj.png";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <div className="login">
            <img src={logo} alt="" width={60} />
            <h3>Log In</h3>
            <LoginForm />
            <p className="sbtn">
                Don't have an account? <a href="/">Sign Up</a>
            </p>
        </div>
    );
};

export default Login;
