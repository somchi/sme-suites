'use client';

import { InvoiceContext } from '@/app/(suites)/context/invoice/invoice.context';
import { Product } from '@/app/_utils/types/invoice';
import { formatCurrency } from '@/app/_utils/utils';
import { Table } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { format } from 'date-fns';

export const SpreadTemplate = () => {
  const { invoiceState } = useContext(InvoiceContext);

  const renderProducts = () => {
    return invoiceState.products.map((item) => {
      return (
        <Table.Row key={item.id}>
          <Table.Cell className="px-4 py-1">
            <span
              className={`${invoiceState.brandColor.textColor} items-center pl-2`}
            >
              {item.name}
            </span>
          </Table.Cell>
          <Table.Cell className="px-4py-1">
            <span
              className={`${invoiceState.brandColor.textColor} items-center pl-2`}
            >
              {item.qty}
            </span>
          </Table.Cell>
          <Table.Cell className="px-4 py-1">
            <div className="flex w-28 bg-transparent border-gray-600">
              <span
                className={`${invoiceState.brandColor.textColor} text-xs flex items-center pl-2`}
              >
                {invoiceState.currency.symbol}
              </span>
              <span
                className={`${invoiceState.brandColor.textColor} text-xs bg-transparent py-2 pl-2 pr-2`}
              >
                {formatCurrency(parseFloat(item.price.toString()))}
              </span>
            </div>
          </Table.Cell>
          <Table.Cell className="px-4 py-1">
            <div className="flex w-28 bg-transparent border-gray-600">
              <span
                className={`${invoiceState.brandColor.textColor} text-xs flex items-center pl-2`}
              >
                {invoiceState.currency.symbol}
              </span>
              <span
                className={`${invoiceState.brandColor.textColor} text-xs bg-transparent py-2 pl-2 pr-2`}
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
                className={`${invoiceState.brandColor.textColor} text-xs flex items-center pl-2`}
              >
                {invoiceState.currency.symbol}
              </span>
              <span
                className={`${invoiceState.brandColor.textColor} text-xs bg-transparent py-2 pl-2 pr-2`}
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
    });
  };

  const data = useMemo(() => {
    return invoiceState.invoice;
  }, [invoiceState.invoice]);

  const business = useMemo(() => {
    return invoiceState.business;
  }, [invoiceState.invoice]);

  const customer = useMemo(() => {
    return invoiceState.customer;
  }, [invoiceState.invoice]);

  const sum = (products: Product[]) => {
    return products.reduce(
      (acc, curr) => acc + curr.price * curr.qty - curr.discount,
      0
    );
  };

  const subTotal = useMemo(() => {
    const total = sum(invoiceState.products) ?? 0;
    return total;
  }, [invoiceState.products]);

  const taxValue = () => {
    const percent = invoiceState.invoice.tax / 100;
    const discount = invoiceState.invoice.discount ?? 0;
    const delivery = invoiceState.invoice.delivery ?? 0;
    const total = invoiceState.taxable
      ? sum(invoiceState.products) - discount + delivery
      : sum(invoiceState.products) - discount;
    const tax = total * percent + total;
    return invoiceState.taxable ? tax : tax + delivery;
  };

  const summmary = () => {
    const percent = invoiceState.invoice.tax / 100;
    const discount = invoiceState.invoice.discount ?? 0;
    const delivery = invoiceState.invoice.delivery ?? 0;
    const total = invoiceState.taxable
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
  }, [invoiceState.invoice, invoiceState.products, invoiceState.taxable]);

  return (
    <div className="grid">
      <div className="grid px-6 py-2">
        <div className="flex justify-between items-center">
          <div className="grid my-2">
            <span className={`${invoiceState.brandColor.textColor} text-xs`}>
              {business.businessName}
            </span>
            <span className={`${invoiceState.brandColor.textColor} text-xs`}>
              {business?.address}{' '}
              {business?.zipCode ? ', ' + business.zipCode : ''}
            </span>
            <span className={`${invoiceState.brandColor.textColor} text-xs`}>
              {business?.city}
              {business?.city ? ', ' + business.city : ''}{' '}
              {business?.country ? ', ' + business.country : ''}
            </span>
            <span className={`${invoiceState.brandColor.textColor} text-xs`}>
              {business?.email}
            </span>
            <span className={`${invoiceState.brandColor.textColor} text-xs`}>
              {business?.phone}
            </span>
          </div>
          {data.businessLogo ? (
            <div className="rounded-full border w-16 h-16 relative">
              <Image
                src={data.businessLogo}
                alt="Uploaded"
                className="rounded-full"
                fill
              />
            </div>
          ) : null}
        </div>

        <div className="flex justify-between my-4">
          <div className="grid ">
            <h2
              className={`${invoiceState.brandColor.textColor} text-sm font-medium`}
            >
              Bill To:
            </h2>
            <div className="grid">
              <span className={`${invoiceState.brandColor.textColor} text-xs`}>
                {customer.name}
              </span>
              <span className={`${invoiceState.brandColor.textColor} text-xs`}>
                {customer?.address} {customer?.zipCode}
              </span>
              <span className={`${invoiceState.brandColor.textColor} text-xs`}>
                {customer?.city}, {customer?.state}
              </span>
              <span className={`${invoiceState.brandColor.textColor} text-xs`}>
                {customer?.email}
              </span>
              <span className={`${invoiceState.brandColor.textColor} text-xs`}>
                {customer?.phone}
              </span>
            </div>
          </div>
          <div className="grid">
            <h2
              className={`${invoiceState.brandColor.textColor} text-2xl font-semibold`}
            >
              Invoice
            </h2>
            <span className={`${invoiceState.brandColor.textColor} text-sm`}>
              Invoice# <em>{data.invoiceNo}</em>
            </span>
            {data.date ? (
              <span className={`${invoiceState.brandColor.textColor} text-sm`}>
                Invoice Date# <em>{format(data.date, 'MMM dd, yyyy')}</em>
              </span>
            ) : null}
            {data.dueDate ? (
              <span className={`${invoiceState.brandColor.textColor} text-sm`}>
                Due Date# <em>{format(data.dueDate, 'MMM dd, yyyy')}</em>
              </span>
            ) : null}
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="overflow-x-auto">
            <Table className="relative">
              <Table.Head>
                <Table.HeadCell
                  className={`${invoiceState.brandColor.bgColor} text-white text-xs px-4 py-1`}
                >
                  Product
                </Table.HeadCell>
                <Table.HeadCell
                  className={`${invoiceState.brandColor.bgColor} text-white text-xs px-4  py-1`}
                >
                  Quantity
                </Table.HeadCell>
                <Table.HeadCell
                  className={`${invoiceState.brandColor.bgColor} text-white text-xs px-4  py-1`}
                >
                  Price
                </Table.HeadCell>
                <Table.HeadCell
                  className={`${invoiceState.brandColor.bgColor} text-white text-xs px-4  py-1`}
                >
                  Discount
                </Table.HeadCell>
                <Table.HeadCell
                  className={`${invoiceState.brandColor.bgColor} text-white text-xs px-4  py-1`}
                >
                  Amount
                </Table.HeadCell>
              </Table.Head>
              <Table.Body>{renderProducts()}</Table.Body>
            </Table>
          </div>
        </div>
        <div className="grid md:w-1/2 gap-3  w-72 justify-self-end">
          <div>
            <hr
              className={`${invoiceState.brandColor.bgColor} w-full  h-[1px]`}
            />
            <div className="flex items-center justify-between gap-4 pb-0 py-2">
              <p
                className={`${invoiceState.brandColor.textColor} items-center text-xs font-bold`}
              >
                Subtotal
              </p>
              <p
                className={`${invoiceState.brandColor.textColor} items-center text-xs`}
              >
                <em>{invoiceState.currency.symbol}</em> {subTotal}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-0 py-1">
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              Tax
            </p>
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              <em>{invoiceState.currency.symbol}</em>{' '}
              {data.tax ? summmary() : 0}
            </p>
          </div>
          <div className="flex items-center justify-between py-0">
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              Delivery
            </p>
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              <em>{invoiceState.currency.symbol}</em>{' '}
              {data.delivery ? formatCurrency(data.delivery) : 0}
            </p>
          </div>

          <div className="flex items-center justify-between py-0">
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              Discount
            </p>
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              <em>{invoiceState.currency.symbol}</em>{' '}
              {data.discount ? formatCurrency(data.discount) : 0}
            </p>
          </div>
          <hr
            className={`${invoiceState.brandColor.bgColor} w-full  h-[1px]`}
          />
          <div className={`flex items-center text-start justify-between py-0`}>
            <p className={`text-black items-center text-xs font-bold`}>TOTAL</p>
            <p className={`text-black items-center text-xs`}>
              <em>{invoiceState.currency.symbol}</em> {grandTotal}
            </p>
          </div>
          <hr
            className={`${invoiceState.brandColor.bgColor} w-full  h-[1px]`}
          />
        </div>
        {data.signature ? (
          <div className="grid md:w-1/2 gap-4 w-full justify-self-end mt-4">
            <div className="grid justify-end">
              <div className=" w-16 h-16 relative">
                <Image
                  src={data.signature}
                  alt="Uploaded"
                  className="border border-transparent"
                  fill
                />
              </div>

              <hr
                className={`h-[1px] ${invoiceState.brandColor.bgColor} my-2`}
              />
              <span className="text-black text-xs">
                {format(new Date(), 'dd/MM/yyyy')}
              </span>
            </div>
          </div>
        ) : null}
        <div className="grid ml-2 w-full md:w-1/2 mt-2 mb-4">
          {data.note ? (
            <>
              <div className="grid items-end mr-2 ">
                <h6
                  className={`${invoiceState.brandColor.textColor} text-xs font-semibold`}
                >
                  Note
                </h6>
                <span
                  className={`${invoiceState.brandColor.textColor} italic text-xs`}
                >
                  {data.note}
                </span>
              </div>
              <hr className="h-[1px] w-full bg-gray-500 my-2" />
            </>
          ) : null}
          {data.terms ? (
            <div className="grid">
              <h6
                className={`${invoiceState.brandColor.textColor} text-xs font-semibold`}
              >
                Terms & Conditions
              </h6>
              <span
                className={`${invoiceState.brandColor.textColor} italic text-xs`}
              >
                {data.terms}
              </span>
            </div>
          ) : null}
          <div className="grid mt-3">
            {business.bank ? (
              <p
                className={`${invoiceState.brandColor.textColor} italic text-xs`}
              >
                Bank: <span>{business.bank}</span>
              </p>
            ) : null}
            {business.accNumber ? (
              <p
                className={`${invoiceState.brandColor.textColor} italic text-xs`}
              >
                Account No.: <span>{business.accNumber}</span>
              </p>
            ) : null}
            {business.holderName ? (
              <p
                className={`${invoiceState.brandColor.textColor} italic text-xs`}
              >
                Account Name: <span>{business.holderName}</span>
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="grid justify-center items-center mt-4 mb-4">
        <span className="text-black text-sm text-center">
          Powered by <em className="font-bold">SMESuites</em>
        </span>
        <span className="text-black text-sm">
          Product of{' '}
          <Link
            href="https://www.adventlabs.ng"
            target="blank"
            className="text-blue-600 italics font-bold text-center"
          >
            Adventlabs Limited
          </Link>
        </span>
      </div>
    </div>
  );
};
