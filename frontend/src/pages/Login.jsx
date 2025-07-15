import { useState } from 'react';
import InputField from '../components/InputField';
import FormButton from '../components/FormButton';
import SocialButtons from '../components/SocialButtons';
import logo from '../assets/techneia.png';

function Login()
{
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) =>
    {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) =>
    {
        e.preventDefault();
        console.log("Logging in with:", form);
        // call backend here
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
            {/* Logo */}
            <img
                src={ logo }
                alt="Techneia Logo"
                className="w-40 h-40 mb-4 object-contain"
            />
            
            <div className="w-full max-w-md p-8 rounded-xl shadow-md text-center">
                <h2 className="text-lg font-semibold mb-6">Welcome back!</h2>
                <form onSubmit={ handleLogin } className="space-y-4">
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={ form.email }
                        onChange={ handleChange }
                    />
                    <InputField
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={ form.password }
                        onChange={ handleChange }
                    />
                    <FormButton label="Sign In" />
                </form>
                <div className="mt-4 text-gray-500">or sign in using</div>
                <SocialButtons />
            </div>
        </div>
    );
}

export default Login;
