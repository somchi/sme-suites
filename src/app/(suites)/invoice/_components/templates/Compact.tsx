'use client';

import { InvoiceContext } from '@/app/(suites)/context/invoice/invoice.context';
import { Product } from '@/app/_utils/types/invoice';
import { formatCurrency } from '@/app/_utils/utils';
import { Table } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { format } from 'date-fns';

export const CompactTemplate = () => {
  const { invoiceState } = useContext(InvoiceContext);

  const renderProducts = () => {
    return invoiceState.products.map((item) => {
      return (
        <Table.Row
          key={item.id}
          className={`border border-${invoiceState.brandColor.bgColor}`}
        >
          <Table.Cell className="px-4">
            <span
              className={`${invoiceState.brandColor.textColor} items-center pl-2`}
            >
              {item.name}
            </span>
          </Table.Cell>
          <Table.Cell className="px-4">
            <span
              className={`${invoiceState.brandColor.textColor} items-center pl-2`}
            >
              {item.qty}
            </span>
          </Table.Cell>
          <Table.Cell className="px-4">
            <div className="flex w-28 bg-transparent border-gray-600">
              <span
                className={`${invoiceState.brandColor.textColor} flex items-center pl-2`}
              >
                ₦
              </span>
              <span
                className={`${invoiceState.brandColor.textColor} text-xs bg-transparent py-2 pl-2 pr-2`}
              >
                {formatCurrency(parseFloat(item.price.toString()))}
              </span>
            </div>
          </Table.Cell>
          <Table.Cell className="px-4">
            <div className="flex w-28 bg-transparent border-gray-600">
              <span
                className={`${invoiceState.brandColor.textColor} flex items-center pl-2`}
              >
                ₦
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
          <Table.Cell className="px-4">
            <div className="flex w-28 bg-transparent border-gray-600">
              <span
                className={`${invoiceState.brandColor.textColor} flex items-center pl-2`}
              >
                ₦
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
    <div>
      <div className="grid p-6">
        <div className="grid justify-center">
          {data.businessLogo ? (
            <div className="grid justify-self-center rounded-full border w-16 h-16 relative ">
              <Image
                src={URL.createObjectURL(data.businessLogo)}
                alt="Uploaded"
                className="rounded-full"
                fill
              />
            </div>
          ) : null}
          <div className="grid my-2">
            <span
              className={`${invoiceState.brandColor.textColor} text-xs text-center`}
            >
              {business.businessName}
            </span>
            <span
              className={`${invoiceState.brandColor.textColor} text-xs text-center`}
            >
              {business?.address}
              {business?.zipCode ? ', ' + business.zipCode : ''}
              {business.city ? ', ' + business.city : ''}
              {business?.city ? ', ' + business.city : ''}
              {business?.country ? ', ' + business.country : ''}
            </span>
            <span
              className={`${invoiceState.brandColor.textColor} text-xs text-center`}
            >
              {business?.email}
            </span>
            <span
              className={`${invoiceState.brandColor.textColor} text-xs text-center`}
            >
              {business?.phone}
            </span>
          </div>
        </div>

        <hr className={`h-1 bg-${invoiceState.brandColor.bgColor}`} />
        <div className="flex justify-between my-8">
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
                {customer?.city} {customer.state ? `,${customer.state}` : ''}
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
            <Table
              className={`relative bg-white border border-${invoiceState.brandColor.bgColor} `}
              striped
              hoverable
            >
              <Table.Head>
                <Table.HeadCell
                  className={`bg-${invoiceState.brandColor.bgColor} text-white text-xs px-4`}
                >
                  Product
                </Table.HeadCell>
                <Table.HeadCell
                  className={`bg-${invoiceState.brandColor.bgColor} text-white text-xs px-4`}
                >
                  Quantity
                </Table.HeadCell>
                <Table.HeadCell
                  className={`bg-${invoiceState.brandColor.bgColor} text-white text-xs px-4`}
                >
                  Price
                </Table.HeadCell>
                <Table.HeadCell
                  className={`bg-${invoiceState.brandColor.bgColor} text-white text-xs px-4`}
                >
                  Discount
                </Table.HeadCell>
                <Table.HeadCell
                  className={`bg-${invoiceState.brandColor.bgColor} text-white text-xs px-4`}
                >
                  Amount
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">{renderProducts()}</Table.Body>
            </Table>
          </div>
        </div>
        <div
          className={`grid md:w-1/2 gap-4 border border-t-0 border-${invoiceState.brandColor.bgColor}  w-full justify-self-end`}
        >
          <div className="flex items-center justify-between gap-4 py-2 px-2 ">
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              Subtotal
            </p>
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              NGN {subTotal}
            </p>
          </div>
          <hr
            className={`bg-${invoiceState.brandColor.bgColor} w-full h-[1px]`}
          />

          <div className="flex items-center justify-between px-2">
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              Tax
            </p>
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              NGN {data.tax ? summmary() : 0}
            </p>
          </div>
          <hr
            className={`bg-${invoiceState.brandColor.bgColor} w-full  h-[1px]`}
          />
          <div className="flex items-center justify-between py-0 px-2">
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              Delivery
            </p>
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              NGN {data.delivery ? formatCurrency(data.delivery) : 0}
            </p>
          </div>
          <hr
            className={`bg-${invoiceState.brandColor.bgColor} w-full  h-[1px]`}
          />
          <div className="flex items-center justify-between py-0 px-2">
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              Discount
            </p>
            <p
              className={`${invoiceState.brandColor.textColor} items-center text-xs`}
            >
              NGN {data.discount ? formatCurrency(data.discount) : 0}
            </p>
          </div>

          <div
            className={`flex items-center text-start justify-between bg-${invoiceState.brandColor.bgColor}  px-2 py-2`}
          >
            <p className={`text-white items-center text-xs`}>Total</p>
            <p className={`text-white items-center text-xs`}>
              NGN {grandTotal}
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-1/2 mt-8 mb-4">
          {data.note ? (
            <>
              <div className="flex flex-col justify-end mr-2">
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
              <hr className="h-full w-[1px] bg-gray-500" />
            </>
          ) : null}
          <div className="grid ml-2">
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
      </div>
      <div className="grid justify-center items-center mt-8 mb-4">
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
