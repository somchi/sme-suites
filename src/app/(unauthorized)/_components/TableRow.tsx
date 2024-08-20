import { Product } from '@/app/_utils/types';
import { formatCurrency } from '@/app/_utils/utils';
import { Table } from 'flowbite-react';

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
      <Table.Cell className="px-4">
        <div className="relative">
          <input
            type="text"
            className="text-xs w-28 bg-transparent text-gray-800
                focus:outline-none border border-gray-600 py-2
                focus:border-blue-400"
            placeholder="Product name"
            value={item.name}
            name="name"
            required
            onChange={(e) => handleChange(e, item)}
          />
        </div>
      </Table.Cell>
      <Table.Cell className="px-4">
        <div className="flex relative bg-transparent focus-within:text-white border-gray-600">
          <input
            type="number"
            className="text-xs w-16 bg-transparent 
                focus:outline-none border border-gray-600 pl-5 pr-2
                focus:border-blue-600 text-gray-800"
            value={item.qty === 0 ? '' : item.qty}
            name="qty"
            required
            onChange={(e) => handleChange(e, item)}
          />
        </div>
      </Table.Cell>
      <Table.Cell className="px-4">
        <div className="flex relative bg-transparent focus-within:text-white border-gray-600">
          <span className="absolute text-gray-800 text-xs inset-y-0 left-0 flex items-center pl-2">
            {currency}
          </span>
          <input
            type="number"
            className="text-xs w-28 bg-transparent 
                focus:outline-none border border-gray-600 pl-9 pr-1
                focus:border-blue-600 text-gray-800"
            value={item.price === 0 ? '' : item.price}
            name="price"
            required
            onChange={(e) => handleChange(e, item)}
          />
        </div>
      </Table.Cell>
      <Table.Cell className="px-4">
        <div className="flex relative  bg-transparent focus-within:text-white border-gray-600">
          <span className="absolute text-gray-800 text-xs inset-y-0 left-0 flex items-center text-gray-800 pl-2">
            {currency}
          </span>
          <input
            type="number"
            className="text-xs w-28 bg-transparent 
                focus:outline-none border border-gray-600 pl-5 pl-9
                focus:border-blue-600 text-gray-800"
            value={item.discount === 0 ? '' : item.discount}
            name="discount"
            onChange={(e) => handleChange(e, item)}
          />
        </div>
      </Table.Cell>
      <Table.Cell className="px-4">
        <div className="flex border border-gray-600 w-28 bg-transparent border-gray-600">
          <span className="flex text-xs items-center pl-2">{currency}</span>
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
