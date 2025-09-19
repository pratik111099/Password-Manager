import { useState, type ChangeEvent, type FormEvent } from "react";
import "./index.css";
import axios from "axios";

const SignupForm = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [conPassword, setConPassword] = useState<string>("");

    const apiKey = import.meta.env.VITE_USER_API;

    async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        if (password !== conPassword)
            return alert("Confirm Password is worng!!!");
        const newUser = {
            name,
            email,
            password,
        };

        try {
            const user = await axios.post(`${apiKey}/user`, newUser);
            if (user.status === 201)
                alert(
                    `Dear ${user.data.name}, your account created successfully!`
                );
            // sessionStorage.setItem("user", JSON.stringify({}));
        } catch (error) {
            alert(error);
        }
    }

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                }
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                }
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={conPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setConPassword(e.target.value)
                }
            />
            <button className="signup-btn">Sign Up</button>
        </form>
    );
};

export default SignupForm;
