type Props = {
  inputType?: string;
  required?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
};

export const Input = ({
  inputType,
  required,
  value,
  onChange,
  name,
  placeholder,
}: Props) => {
  return (
    <input
      className="w-full block border border-slate-300 bg-white rounded-md 
      outline-none text-gray-800 shadow-sm ring-theme-primary focus:ring-primary 
      placeholder:text-gray-400 focus:outline-none duration-300 py-2 px-4 
      focus:border focus:border-blue-300"
      type={inputType ?? 'text'}
      required={required ?? false}
      value={value ?? ''}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
    />
  );
};
