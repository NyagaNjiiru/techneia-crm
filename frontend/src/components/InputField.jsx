function InputField({ type, name, placeholder, value, onChange })
{
    return (
        <input
            type={ type }
            name={ name }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
            className="w-full px-4 py-2 border border-black rounded text-black focus:outline-none focus:ring-2 focus:ring-[#AAD9D9]"
        />
    );
}

export default InputField;
