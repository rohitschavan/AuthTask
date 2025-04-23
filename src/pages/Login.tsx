import React, { useState } from "react";
import LoginForm from "common/components/molecules/LoginForm";
import FormLayout from "common/components/templates/FormLayout";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
interface UserLogin {
    email: string;
    password: string;
}

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); 

    const handleLogin = async (data: UserLogin) => {
        try {
            const { email, password } = data;
            const formData = new URLSearchParams();
            formData.append("email", email);
            formData.append("password", password);

           
            const response = await axios.put(
                'https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/login',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            const { accessToken, refreshToken } = response.data;
            login(accessToken, refreshToken); 
           
           
            toast.success('Login Success')
            navigate('/dashboard')
        } catch (err) {
            console.log("Login error:", err);
            const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
            toast.error(errorMessage);
      
        }
    };

    return (
        <>
            <FormLayout>
                <div>
                    <h1 className="heading">Login</h1>
                    <LoginForm
                        data={{ email, password }}
                        onChange={(e) => {
                            const { name, value } = e.target;
                            if (name === "email") {
                                setEmail(value);
                            } else if (name === "password") {
                                setPassword(value);
                            }
                        }}
                        onSubmit={handleLogin}  
                    />
                </div>
            </FormLayout>
        </>
    );
};

export default Login;
