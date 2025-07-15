function FormButton({ label })
{
    return (
        <button
            type="submit"
            className="w-full bg-[#AAD9D9] text-white py-2 rounded border border-black hover:bg-[#98c7c7] transition"
        >
            { label }
        </button>
    );
}

export default FormButton;
