import "./index.css";

const LoginForm = () => {
    return (
        <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-btn">Log In</button>
        </form>
    );
};

export default LoginForm;
