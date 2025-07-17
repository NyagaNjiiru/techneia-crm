import { useState } from 'react';
import InputField from '../components/InputField';
import TermsNotice from '../components/TermsNotice';
import FormButton from '../components/FormButton';
import SocialButtons from '../components/SocialButtons';
import logo from '../assets/techneia.png';
import { supabase } from '../utils/supabaseClient';

function Signup()
{
    const [form, setForm] = useState({ name: "", email: "", password: "", agree: false });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) =>
    {
        const { name, type, checked, value } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSignup = async (e) =>
    {
        e.preventDefault();
        if (!form.agree)
        {
            setError("You must agree to the terms and conditions.");
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: form.email,
                password: form.password,
                options: {
                    data: {
                        name: form.name
                    }
                }
            });

            if (error) {
                console.error("Signup error:", error);
                setError(error.message);
            } else {
                console.log("Signup successful:", data);
                setError(null);
                navigate('/dashboard');
            }
        } catch (e) {
            console.error("Unexpected error:", e.message);
            setError("Unexpected error occurred");
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left half */}
            <div className="w-1/2 bg-[#AAD9D9] text-black flex flex-col justify-center relative p-8">
                {/* Logo */}
                <img
                    src={ logo }
                    alt="Techneia Logo"
                    className="w-40 h-40 mb-4 object-contain absolute top-8 left-8"
                />
                <div className="text-center mx-auto">
                    <h1 className="text-4xl font-bold mb-4 font-['Outfit']">On Your Path to a Purposeful CRM!</h1>
                    <p className="text-lg font-['Roboto']">Join Us Today!</p>
                </div>
            </div>

            {/* Right half */}
            <div className="w-1/2 flex items-center justify-center bg-gray-100 text-black">
                <div className="w-full max-w-md p-8 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center font-['Roboto']">Sign up and get started</h2>
                    <form onSubmit={ handleSignup } className="space-y-4">
                        <InputField
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={ form.name }
                            onChange={ handleChange }
                        />
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
                        <TermsNotice checked={ form.agree } onChange={ handleChange } />
                        <FormButton label="Sign Up" />
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        {success && <p className="text-green-500 text-center">{success}</p>}                
                    </form>
                    <div className="mt-4 text-center text-gray-500">or sign up with</div>
                    <SocialButtons />
                </div>
            </div>
        </div>
    );
}

export default Signup;