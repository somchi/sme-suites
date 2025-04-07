import { formatCurrency } from '@/app/_libs/helpers';
import { Product } from '@/app/_libs/types';
import { InvoiceStore } from '@/app/_libs/types/invoice';
import { ReceiptStore } from '@/app/_libs/types/receipt';
import { Table } from 'flowbite-react';

type Props = {
  state: InvoiceStore | ReceiptStore;
  item: Product;
};

export const StandardTable = ({ state, item }: Props) => {
  return (
    <Table.Row key={item.id}>
      <Table.Cell className="px-4 py-1">
        <span
          style={{ color: state.brandColor.textColor }}
          className={`items-center pl-2`}
        >
          {item.name}
        </span>
      </Table.Cell>
      <Table.Cell className="px-4 py-1">
        <span
          style={{ color: state.brandColor.textColor }}
          className={`items-center pl-2`}
        >
          {item.qty}
        </span>
      </Table.Cell>
      <Table.Cell className="px-4 py-1">
        <div className="flex w-28 bg-transparent border-gray-600">
          <span
            style={{ color: state.brandColor.textColor }}
            className={`flex items-center pl-2`}
          >
            <em>{state.currency.symbol}</em>
          </span>
          <span
            style={{ color: state.brandColor.textColor }}
            className={`text-xs bg-transparent py-2 pl-2 pr-2`}
          >
            {formatCurrency(parseFloat(item.price.toString()))}
          </span>
        </div>
      </Table.Cell>
      <Table.Cell className="px-4 py-1">
        <div className="flex w-28 bg-transparent border-gray-600">
          <span
            style={{ color: state.brandColor.textColor }}
            className={`flex items-center pl-2`}
          >
            <em>{state.currency.symbol}</em>
          </span>
          <span
            style={{ color: state.brandColor.textColor }}
            className={`text-xs bg-transparent py-2 pl-2 pr-2`}
          >
            {item.discount
              ? formatCurrency(parseFloat(item.discount.toString()))
              : 0}
          </span>
        </div>
      </Table.Cell>
      <Table.Cell className="px-4 py-1">
        <div className="flex w-28 bg-transparent border-gray-600">
          <span
            style={{ color: state.brandColor.textColor }}
            className={`flex items-center pl-2`}
          >
            <em>{state.currency.symbol}</em>
          </span>
          <span
            style={{ color: state.brandColor.textColor }}
            className={`text-xs bg-transparent py-2 pl-2 pr-2`}
          >
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
    </Table.Row>
  );
};
