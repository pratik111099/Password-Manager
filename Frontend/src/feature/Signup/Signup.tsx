import "./index.css";
import SignupForm from "./SignupForm";
import logo from "../../assets/Gemini_Generated_Image_b5vj43b5vj43b5vj.png";

const Signup = () => {
    return (
        <div className="signup">
            <img src={logo} alt="" width={60} />
            <h3>Sign up</h3>
            <SignupForm />
            <p className="lbtn">
                Already have an account? <a href="/">Login</a>
            </p>
        </div>
    );
};

export default Signup;
