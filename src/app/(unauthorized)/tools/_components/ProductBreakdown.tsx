'use client';

import { Checkbox, Table, TextInput } from 'flowbite-react';
import { Product } from '@/app/_libs/types';
import { TableRow } from './TableRow';
import { useUnauthStore } from '@/app/providers/unauth-provider';
import { formatCurrency, sum } from '@/app/_libs/helpers';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { Invoice, InvoiceStore } from '@/app/_libs/types/invoice';
import { TRANSACTION_TYPES } from '@/app/_libs/enums';
import { Receipt, ReceiptStore } from '@/app/_libs/types/receipt';
import { useParams } from 'next/navigation';

export const ProdutBreakdown = () => {
  const { invoice, receipt, setReceipt, setInvoce } = useUnauthStore(
    (state) => state
  );
  const { slug } = useParams<{ slug: string }>();

  const data: InvoiceStore | ReceiptStore = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE ? invoice : receipt;
  }, [slug, invoice, receipt]);

  const transaction: Invoice | Receipt = useMemo(() => {
    return TRANSACTION_TYPES.INVOICE in data ? data.invoice : data.receipt;
  }, [data]);

  const setState = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE ? setInvoce : setReceipt;
  }, [slug, setInvoce, setReceipt]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    product: Product
  ) => {
    const target = e.target;
    const field = target.name;
    let value;
    if (target.type === 'number') {
      value = target.valueAsNumber || 0;
    } else {
      value = target.value;
    }
    const products = data.products.map((item) => {
      if (item.id === product.id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setState({ products });
  };

  const renderProducts = () => {
    if (!data.products) return [];
    return data.products.map((item: Product) => {
      return (
        <TableRow
          key={item.id}
          item={item}
          handleChange={handleChange}
          handleRemove={handleRemoveProduct}
          currency={data.currency?.symbol ?? ''}
        />
      );
    });
  };

  const handleRemoveProduct = (product: Product) => {
    setState({
      products: data.products.filter((itm) => itm.id !== product.id),
    });
  };

  const handleAddProduct = () => {
    setState({
      products: [
        ...(data.products ?? []),
        {
          id: Math.random().toString(),
          name: '',
          qty: 1,
          price: 0,
          discount: 0,
          amount: 0,
        },
      ],
    });
  };

  const handleInvoiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.valueAsNumber || 0;
    const field = target.name;
    setState({
      [slug === TRANSACTION_TYPES.INVOICE
        ? TRANSACTION_TYPES.INVOICE
        : TRANSACTION_TYPES.RECEIPT]: { ...transaction, [field]: value },
    });
  };

  const handleTaxable = () => {
    setState({ taxable: !data.taxable });
  };

  const subTotal = useMemo(() => {
    return sum(data.products);
  }, [data.products]);

  const taxValue = useCallback(() => {
    const percent = transaction.tax / 100 || 0;
    const discount = transaction.discount ?? 0;
    const delivery = transaction.delivery ?? 0;
    const total = data.taxable
      ? subTotal - discount + delivery
      : subTotal - discount;
    const tax = total * percent + total;
    return data.taxable ? tax : tax + delivery;
  }, [
    data.taxable,
    subTotal,
    transaction.delivery,
    transaction.discount,
    transaction.tax,
  ]);

  const taxTotal = useMemo(() => {
    if (data.taxable) {
      return subTotal - transaction.discount + transaction.delivery || 0;
    }
    return subTotal - transaction.discount || 0;
  }, [data.taxable, subTotal, transaction.delivery, transaction.discount]);

  const grandTotal = useMemo(() => {
    const discount = transaction.discount ?? 0;
    const delivery = transaction.delivery ?? 0;
    const total = !transaction.tax
      ? subTotal - discount + delivery
      : taxValue();
    return total;
  }, [
    subTotal,
    taxValue,
    transaction.delivery,
    transaction.discount,
    transaction.tax,
  ]);

  const summary = () => {
    const percent = transaction.tax / 100;
    const discount = transaction.discount ?? 0;
    const delivery = transaction.delivery ?? 0;
    const total = data.taxable
      ? subTotal - discount + delivery
      : subTotal - discount;
    const tax = total * percent;
    return tax;
  };
  return (
    <div className="grid w-full overflow-auto">
      <div className="flex flex-col justify-self-end btn my-5 mx-3">
        <button
          type="button"
          className="flex items-center justify-center gap-x-1 px-3 border transition rounded-lg w-52 mt-8 lg:mt-0 text-theme-primary 
          text-center shadow border border-theme-primary text-lg"
          onClick={handleAddProduct}
        >
          Add new <span className="text-5xl">+</span>
        </button>
      </div>
      {/* <div className="w-full overflow-x-auto"> */}
      <div className="overflow-x-auto">
        <Table className=" relative">
          <Table.Head className="normal-case font-normal">
            <Table.HeadCell className="bg-gray-800 font-medium text-white text-lg min-w-28 px-4">
              Product
            </Table.HeadCell>
            <Table.HeadCell className="bg-gray-800 border border-theme-primary/40 font-medium text-white text-lg min-w-28 px-2">
              Quantity
            </Table.HeadCell>
            <Table.HeadCell className="bg-gray-800 border border-theme-primary/40 font-medium text-white text-lg min-w-28 px-2">
              Price
            </Table.HeadCell>
            <Table.HeadCell className="bg-gray-800 border border-theme-primary/40 font-medium text-white text-lg min-w-28 px-2">
              Discount
            </Table.HeadCell>
            <Table.HeadCell className="bg-gray-800 border border-theme-primary/40 font-medium text-white text-lg min-w-28 px-2">
              Amount
            </Table.HeadCell>
            <Table.HeadCell className="bg-gray-800 text-white text-lg px-2">
              <span className="sr-only">Remove</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body>{renderProducts()}</Table.Body>
        </Table>
      </div>
      {/* </div> */}

      <div className="grid md:w-1/2 gap-4 w-full justify-self-end mt-10">
        <hr className="border-gray-500" />
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm text-gray-800">Sub Total</p>
          <div className="flex items-center ">
            <span className="text-sm pr-1 text-gray-800">
              {data.currency?.symbol ?? ''}
            </span>
            <p className="text-gray-800">{formatCurrency(subTotal)}</p>
          </div>
        </div>
        <div className="flex justify-between gap-2 items-center">
          <div className="grid md:flex  items-end gap-2">
            <div className="">
              <span className="font-semibold text-sm text-gray-800">
                Tax <em>(%)</em>
              </span>
            </div>

            {transaction?.tax && transaction.tax.toString() !== '' ? (
              <div className="flex flex-wrap items-center gap-1 text-xs">
                {/* <span className="text-xs text-gray-800">Tax</span> */}
                <span className="text-xs text-gray-800">{`${
                  transaction.tax
                } % of ${invoice.currency.symbol} ${formatCurrency(
                  taxTotal
                )}`}</span>
                <div className="flex items-center">
                  <span className="text-gray-800">
                    {invoice.currency.symbol} &nbsp;
                  </span>
                  <p className="text-xs text-gray-800">{summary()}</p>
                </div>
              </div>
            ) : null}
          </div>
          <div className="w-32">
            <TextInput
              placeholder="0"
              type="number"
              value={transaction.tax || ''}
              onChange={handleInvoiceChange}
              name="tax"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span className="font-semibold text-sm text-gray-800">
              Delivery
            </span>
            <div className="flex gap-1 items-center">
              <span className="text-xs text-gray-800">Taxable</span>
              <Checkbox size={12} onChange={handleTaxable} />
            </div>
          </div>
          <div className="flex relative w-[8.1rem] gap-2 bg-transparent focus-within:text-white border-gray-600">
            <span className="absolute text-gray-800 text-xs inset-y-0 left-0 flex items-center pl-2">
              {invoice.currency?.symbol}
            </span>
            <div>
              <input
                className="w-full block border border-slate-300 bg-white rounded-md 
                outline-none text-gray-800 shadow-sm focus:ring-primary 
                placeholder:text-gray-400 focus:outline-none duration-300 py-3 px-9 
                focus:border focus:border-blue-300 text-sm"
                placeholder="0.00"
                type="number"
                value={transaction.delivery || ''}
                name="delivery"
                onChange={handleInvoiceChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <span className="font-semibold text-sm text-gray-800">
              Discount
            </span>
          </div>
          <div className="flex relative w-[8.1rem] gap-2 bg-transparent focus-within:text-white border-gray-600">
            <span className="absolute inset-y-0 text-gray-800 text-xs left-0 flex items-center pl-2">
              {invoice.currency?.symbol}
            </span>
            <div>
              <input
                className="w-full block border border-slate-300 bg-white rounded-md 
                outline-none text-gray-800 shadow-sm focus:ring-primary 
                placeholder:text-gray-400 focus:outline-none duration-300 py-3 px-9 
                focus:border focus:border-blue-300 text-sm"
                placeholder="0.00"
                type="number"
                value={transaction.discount || ''}
                name="discount"
                onChange={handleInvoiceChange}
              />
            </div>
          </div>
        </div>
        <hr className="border-gray-500" />
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-800">Balance Amount</h2>
          <div className="flex items-center ">
            <span className="text-sm pr-1 text-gray-800">
              {invoice.currency?.symbol}
            </span>
            <p className="text-gray-800">{formatCurrency(grandTotal)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
