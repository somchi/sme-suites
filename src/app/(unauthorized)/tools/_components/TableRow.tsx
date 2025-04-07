import { formatCurrency } from '@/app/_libs/helpers';
import { Product } from '@/app/_libs/types';
import { Table, TextInput } from 'flowbite-react';

type Props = {
  item: Product;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, item: Product) => void;
  handleRemove: (item: Product) => void;
  currency: string;
};

export const TableRow = ({
  item,
  handleChange,
  handleRemove,
  currency,
}: Props) => {
  return (
    <Table.Row key={item.id}>
      <Table.Cell className="px-0 pr-2 py-0">
        <div className="relative">
          <TextInput
            placeholder="Product name"
            value={item.name}
            name="name"
            required
            onChange={(e) => handleChange(e, item)}
            className="w-full min-w-28"
          />
        </div>
      </Table.Cell>
      <Table.Cell className="px-0 pr-2 py-0">
        <div className="flex relative">
          <TextInput
            type="number"
            className="w-full min-w-28"
            value={item.qty === 0 ? '' : item.qty}
            name="qty"
            required
            onChange={(e) => handleChange(e, item)}
          />
        </div>
      </Table.Cell>
      <Table.Cell className="px-0 pr-2 py-0">
        <div className="flex relative">
          <TextInput
            type="number"
            className="w-full min-w-28"
            icon={() => {
              return (
                <span className="absolute text-gray-800 text-xs inset-y-0 left-0 flex items-center pl-2">
                  {currency}
                </span>
              );
            }}
            value={item.price === 0 ? '' : item.price}
            name="price"
            required
            onChange={(e) => handleChange(e, item)}
          />
        </div>
      </Table.Cell>
      <Table.Cell className="px-0 pr-2 py-0">
        <div className="flex relative ">
          <TextInput
            type="number"
            className="w-full min-w-28"
            icon={() => {
              return (
                <span className="absolute text-gray-800 text-xs inset-y-0 left-0 flex items-center pl-2">
                  {currency}
                </span>
              );
            }}
            value={item.discount === 0 ? '' : item.discount}
            name="discount"
            onChange={(e) => handleChange(e, item)}
          />
        </div>
      </Table.Cell>
      <Table.Cell className="px-0 pr-2 py-0">
        <div className="flex w-full min-w-40 border bg-zinc-100 border-gray-300 bg-gray-50 text-gray-900 px-2.5 py-1 text-sm rounded-lg">
          <span className="flex text-xs items-center">{currency}</span>
          <span className="text-xs bg-transparent py-2 pl-2 pr-2">
            {item.qty && item.price
              ? formatCurrency(
                  parseFloat(item.price.toString()) *
                    parseFloat(item.qty.toString()) -
                    parseFloat(item.discount.toString())
                )
              : 0}
          </span>
        </div>
      </Table.Cell>
      <Table.Cell className="px-4">
        {item.id !== '01' ? (
          <button className="text-red-600" onClick={() => handleRemove(item)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3"
            >
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>{' '}
              <path
                fillRule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        ) : null}
      </Table.Cell>
    </Table.Row>
  );
};
