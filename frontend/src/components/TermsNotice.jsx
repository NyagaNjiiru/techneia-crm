function TermsNotice({ checked, onChange }) {
  return (
    <label className="flex items-center text-gray-600 text-sm">
      <input
        type="checkbox"
        name="agree"
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      I agree to the terms and privacy policy
    </label>
  );
}

export default TermsNotice;
