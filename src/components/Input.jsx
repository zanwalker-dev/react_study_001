/* eslint-disable react/prop-types */
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-slate-300 rounded-md p-2 w-full"
      value={value}
      onChange={onChange}
      //   poderia também fazer um {...props} para dar spread em qualquer props utilizada
    />
  );
};

export default Input;
