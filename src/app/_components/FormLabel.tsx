import { Label } from 'flowbite-react';

interface Props {
  text: string;
  htmlFor: string;
}
export const FormLabel = ({ text, htmlFor }: Props) => {
  return <Label htmlFor={htmlFor} value={text} className="text-lg font-lora" />;
};
