import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import FormButton from '../components/FormButton';
import SocialButtons from '../components/SocialButtons';
import logo from '../assets/techneia.png';
import { supabase } from '../utils/supabaseClient';

function Login()
{
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) =>
    {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: form.email,
                password: form.password
            });

            if (error) {
                console.error('Supabase login error:', error);
                setError(error.message);
            } else {
                console.log('Login successful:', data);
                setError(null);
                navigate('/dashboard');
            }
        } catch (e) {
            console.error("Unexpected error:", e.message);
            setError("Unexpected error occurred");
        }
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
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                </form>
                <div className="mt-4 text-gray-500">or sign in using</div>
                <SocialButtons />
            </div>
        </div>
    );
}

export default Login;
