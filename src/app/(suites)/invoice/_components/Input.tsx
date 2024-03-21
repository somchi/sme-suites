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
      className="w-full block border bg-theme-inputBg my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
      type={inputType ?? 'text'}
      required={required ?? false}
      value={value ?? ''}
      onChange={onChange}
      name={name}
    />
  );
};
