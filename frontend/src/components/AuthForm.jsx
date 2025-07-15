import { useState } from 'react';

function AuthForm({ title, onSubmit })
{
    const [form, setForm] = useState({ email: "", password: ""});

    const handleChange = (e) =>
    {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <div className = "min-h-screen flex items-center justify-center bg-gray-100">
            <div className = "w-full max-w-md p-8 bg-white rounded-x1 shadow-md">
                <h2 className = "text-2xl font-bold mb-6 text-center text-gray-800">
                    { title }
                </h2>
                <form onSubmit = { handleSubmit } className = "space-y-4">
                    <input
                        name = "email"
                        type = "email"
                        placeholder = "Email"
                        className = "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange = { handleChange }
                        value = { form.email }
                        required
                    />
                    <input
                        name = "password"
                        type = "password"
                        placeholder = "Password"
                        className = "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange = { handleChange }
                        value = { form.password }
                        required
                    />
                    <button
                        type = "submit"
                        className = "w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        { title }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AuthForm;