type Props = {
  inputType?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export const Input = ({
  inputType,
  required,
  value,
  onChange,
  name,
}: Props) => {
  return (
    <input
      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
      type={inputType ?? 'text'}
      required={required ?? false}
      value={value ?? ''}
      onChange={onChange}
      name={name}
    />
  );
};
