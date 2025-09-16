import "./index.css";

const SignupForm = () => {
    return (
        <form className="signup-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="signup-btn">Sign Up</button>
        </form>
    );
};

export default SignupForm;
