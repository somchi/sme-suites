'use client';

import { Checkbox, Table } from 'flowbite-react';
import { useContext, useMemo, useState } from 'react';
import { InvoiceContext } from '../../context/invoice/invoice.context';
import { Product } from '@/app/_utils/types/invoice';
import {
  SET_INVOICE_DATA,
  SET_PRODUCTS,
} from '../../context/invoice/inovice.reducer';
import { Input } from './Input';
import { TableRow } from './TableRow';
import { formatCurrency } from '@/app/_utils/utils';

export const ProdutBreakdown = () => {
  const { invoiceState, invoiceDispatch } = useContext(InvoiceContext);
  const [taxable, setTaxable] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    product: Product
  ) => {
    const target = e.target;
    const field = target.name;
    const value = target.value;
    const finalVal = value === '' && field !== 'name' ? '0' : value;
    const formatVal =
      field === 'name'
        ? value
        : field === 'qty'
        ? parseInt(finalVal)
        : parseFloat(finalVal);

    const data = invoiceState.products.map((item) => {
      if (item.id === product.id) {
        return { ...item, [field]: formatVal };
      }
      return item;
    });
    invoiceDispatch({
      type: SET_PRODUCTS,
      payload: data,
    });
  };

  const handleAddItem = () => {
    const id = Date.now().toString();
    const data: Product = {
      id,
      name: '',
      discount: 0,
      price: 0,
      qty: 0,
      amount: 0,
    };
    invoiceDispatch({
      type: SET_PRODUCTS,
      payload: [...invoiceState.products, data],
    });
  };

  const handleRemove = (item: Product) => {
    const products = invoiceState.products.filter((itm) => itm.id !== item.id);
    invoiceDispatch({
      type: SET_PRODUCTS,
      payload: products,
    });
  };

  const sum = (products: Product[]) => {
    return products.reduce(
      (acc, curr) => acc + curr.price * curr.qty - curr.discount,
      0
    );
  };

  const handleInvoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    const field = target.name;
    const finalVal =
      value === '' &&
      (field === 'tax' || field === 'discount' || field === 'delivery')
        ? '0'
        : value;
    const formatVal =
      field === 'tax' || field === 'discount' || field === 'delivery'
        ? parseFloat(finalVal)
        : finalVal;
    invoiceDispatch({
      type: SET_INVOICE_DATA,
      payload: { ...data, [field]: formatVal },
    });
  };

  const renderProducts = () => {
    return invoiceState.products.map((item: Product) => {
      return (
        <TableRow
          key={item.id}
          item={item}
          handleChange={handleChange}
          handleRemove={handleRemove}
        />
      );
    });
  };

  const data = useMemo(() => {
    return invoiceState.invoice;
  }, [invoiceState.invoice]);

  const subTotal = useMemo(() => {
    const total = sum(invoiceState.products) ?? 0;
    return total;
  }, [invoiceState.products]);

  const taxValue = () => {
    const percent = invoiceState.invoice.tax / 100;
    const discount = invoiceState.invoice.discount ?? 0;
    const delivery = invoiceState.invoice.delivery ?? 0;
    const total = taxable
      ? sum(invoiceState.products) - discount + delivery
      : sum(invoiceState.products) - discount;
    const tax = total * percent + total;
    return taxable ? tax : tax + delivery;
  };

  const summmary = () => {
    const percent = invoiceState.invoice.tax / 100;
    const discount = invoiceState.invoice.discount ?? 0;
    const delivery = invoiceState.invoice.delivery ?? 0;
    const total = taxable
      ? sum(invoiceState.products) - discount + delivery
      : sum(invoiceState.products) - discount;
    const tax = total * percent;
    return tax;
  };

  const grandTotal = useMemo(() => {
    const subTotal = sum(invoiceState.products) ?? 0;
    const discount = invoiceState.invoice.discount ?? 0;
    const delivery = invoiceState.invoice.delivery ?? 0;
    const tax = !invoiceState.invoice.tax ? 0 : invoiceState.invoice.tax / 100;
    const total = tax === 0 ? subTotal - discount + delivery : taxValue();
    return total;
  }, [invoiceState.invoice, invoiceState.products, taxable]);

  const handleTaxable = (e: any) => {
    setTaxable((taxable) => !taxable);
  };

  const taxTotal = useMemo(() => {
    if (taxable) {
      return subTotal - data.discount + data.delivery ?? 0;
    }
    return subTotal - data.discount ?? 0;
  }, [taxable]);

  return (
    <div className="grid w-full overflow-auto">
      <div className="w-full overflow-x-auto">
        <p className="pt-8 pb-3">
          Product / Service details{' '}
          <em className="text-red-500 font-bold italic ml-1">*</em>
        </p>
        <hr className="mb-4 border-gray-500" />
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell className="bg-gray-500 text-white text-xs px-4">
                Product
              </Table.HeadCell>
              <Table.HeadCell className="bg-gray-500 text-white text-xs px-4">
                Quantity
              </Table.HeadCell>
              <Table.HeadCell className="bg-gray-500 text-white text-xs px-4">
                Price
              </Table.HeadCell>
              <Table.HeadCell className="bg-gray-500 text-white text-xs px-4">
                Discount
              </Table.HeadCell>
              <Table.HeadCell className="bg-gray-500 text-white text-xs px-4">
                Amount
              </Table.HeadCell>
              <Table.HeadCell className="bg-gray-500 text-white text-xs px-4"></Table.HeadCell>
            </Table.Head>
            <Table.Body>{renderProducts()}</Table.Body>
          </Table>
        </div>
      </div>
      <div className="btn my-5 mx-3">
        <button
          type="button"
          onClick={handleAddItem}
          className="py-3 px-3 border transition duration-200 ease-in-out rounded-lg w-52 focus:ring-blue-500 mt-8  lg:mt-0 focus:ring-offset-blue-200 text-white text-center text-base font-semibold shadow-md focus:border-blue-300 "
        >
          Add new Item
        </button>
      </div>
      <div className="grid md:w-1/2 gap-4 w-full justify-self-end">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm">Sub Total</p>
          <div className="flex items-center ">
            <svg
              className="fill-current w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M122.6 46.3c-7.8-11.7-22.4-17-35.9-12.9S64 49.9 64 64V256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320H228.2l97.2 145.8c7.8 11.7 22.4 17 35.9 12.9s22.7-16.5 22.7-30.6V320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V256H262.5L122.6 46.3zM305.1 320H320v22.3L305.1 320zM185.5 256H128V169.7L185.5 256z" />
            </svg>
            <p>{formatCurrency(subTotal)}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <span className="font-semibold text-sm">
              TAX <em>(%)</em>
            </span>
          </div>
          <div className="w-32">
            <Input
              placeholder="0.00"
              inputType="number"
              value={data.tax === 0 || !data.tax ? '' : data.tax}
              onChange={handleInvoiceChange}
              name="tax"
            />
          </div>
        </div>
        {data.tax && data.tax.toString() !== '' ? (
          <div className="flex items-center gap-3 text-xs">
            <span className="text-xs">Tax</span>
            <span className="text-xs">{`${data.tax} % of ${formatCurrency(
              taxTotal
            )}`}</span>
            <div className="flex items-center">
              <svg
                className="fill-current w-3 h-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M122.6 46.3c-7.8-11.7-22.4-17-35.9-12.9S64 49.9 64 64V256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320H228.2l97.2 145.8c7.8 11.7 22.4 17 35.9 12.9s22.7-16.5 22.7-30.6V320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V256H262.5L122.6 46.3zM305.1 320H320v22.3L305.1 320zM185.5 256H128V169.7L185.5 256z" />
              </svg>
              <p className="text-xs">{summmary()}</p>
            </div>
          </div>
        ) : null}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span className="font-semibold text-sm">Delivery</span>
            <div className="flex gap-1 items-center">
              <span className="text-xs">Taxable</span>
              <Checkbox size={12} onChange={handleTaxable} />
            </div>
          </div>
          <div className="flex relative w-[9.5rem] gap-2 bg-transparent focus-within:text-white border-gray-600">
            <span className="absolute inset-y-0 left-0 flex items-center pl-7">
              ₦
            </span>
            <div className="pl-6">
              <Input
                placeholder="0.00"
                inputType="number"
                value={
                  data.delivery === 0 || !data.delivery
                    ? ''
                    : formatCurrency(data.delivery)
                }
                name="delivery"
                onChange={handleInvoiceChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <span className="font-semibold text-sm">Discount</span>
          </div>
          <div className="flex relative w-[9.5rem] gap-2 bg-transparent focus-within:text-white border-gray-600">
            <span className="absolute inset-y-0 left-0 flex items-center pl-7">
              ₦
            </span>
            <div className="pl-6">
              <Input
                placeholder="0.00"
                inputType="number"
                value={
                  data.discount === 0 || !data.discount
                    ? ''
                    : formatCurrency(data.discount)
                }
                name="discount"
                onChange={handleInvoiceChange}
              />
            </div>
          </div>
        </div>
        <hr className="border-gray-500" />
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Balance Amount</h2>
          <div className="flex items-center ">
            <svg
              className="fill-current w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M122.6 46.3c-7.8-11.7-22.4-17-35.9-12.9S64 49.9 64 64V256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320H228.2l97.2 145.8c7.8 11.7 22.4 17 35.9 12.9s22.7-16.5 22.7-30.6V320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V256H262.5L122.6 46.3zM305.1 320H320v22.3L305.1 320zM185.5 256H128V169.7L185.5 256z" />
            </svg>
            <p>{formatCurrency(grandTotal)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
