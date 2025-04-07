'use client';

import { Table } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { format } from 'date-fns';
import { useParams, usePathname } from 'next/navigation';
import { useUnauthStore } from '@/app/providers/unauth-provider';
import { InvoiceStore } from '@/app/_libs/types/invoice';
import { ReceiptStore } from '@/app/_libs/types/receipt';
import { PUBLIC_RECEIPT_PREVIEW } from '@/site-settings/navigation';
import { capitalizeFirst, formatCurrency, sum } from '@/app/_libs/helpers';
import { Product } from '@/app/_libs/types';
import { SpreadTable } from './SpreadTable';

export const SpreadTemplate = () => {
  const { invoice, receipt } = useUnauthStore((state) => state);

  const { slug } = useParams<{ slug: string }>();

  const pathname = usePathname();

  const state: InvoiceStore | ReceiptStore = useMemo(() => {
    return pathname === PUBLIC_RECEIPT_PREVIEW.href ? receipt : invoice;
  }, [invoice, pathname, receipt]);

  const renderProducts = () => {
    return state.products.map((item: Product) => {
      return <SpreadTable item={item} state={state} key={item.id} />;
    });
  };

  const data = useMemo(() => {
    return pathname === PUBLIC_RECEIPT_PREVIEW.href
      ? receipt.receipt
      : invoice.invoice;
  }, [invoice, pathname, receipt]);

  const business = useMemo(() => {
    return state.business;
  }, [state.business]);

  const customer = useMemo(() => {
    return state.customer;
  }, [state]);

  const subTotal = useMemo(() => {
    const total = sum(state.products) ?? 0;
    return total;
  }, [state.products]);

  const taxValue = () => {
    const percent = data.tax / 100;
    const discount = data.discount ?? 0;
    const delivery = data.delivery ?? 0;
    const total = state.taxable
      ? sum(state.products) - discount + delivery
      : sum(state.products) - discount;
    const tax = total * percent + total;
    return state.taxable ? tax : tax + delivery;
  };

  const summmary = () => {
    const percent = data.tax / 100;
    const discount = data.discount ?? 0;
    const delivery = data.delivery ?? 0;
    const total = state.taxable
      ? sum(state.products) - discount + delivery
      : sum(state.products) - discount;
    const tax = total * percent;
    return tax;
  };

  const grandTotal = () => {
    const subTotal = sum(state.products) ?? 0;
    const discount = data.discount ?? 0;
    const delivery = data.delivery ?? 0;
    const tax = !data.tax ? 0 : data.tax / 100;
    const total = tax === 0 ? subTotal - discount + delivery : taxValue();
    return total;
  };

  return (
    <div className="grid">
      <div className="grid px-6 py-2">
        <div className="flex justify-between items-center">
          <div className="grid my-2">
            <span
              style={{ color: state.brandColor.textColor }}
              className={`text-xs`}
            >
              {business.businessName}
            </span>
            <span
              style={{ color: state.brandColor.textColor }}
              className={`text-xs`}
            >
              {business?.address}{' '}
              {business?.zipCode ? ', ' + business.zipCode : ''}
            </span>
            <span
              style={{ color: state.brandColor.textColor }}
              className={`text-xs`}
            >
              {business?.city}
              {business?.city ? ', ' + business.city + ', ' : ''}{' '}
              {business?.country ? business.country : ''}
            </span>
            <span
              style={{ color: state.brandColor.textColor }}
              className={`text-xs`}
            >
              {business?.email}
            </span>
            <span
              style={{ color: state.brandColor.textColor }}
              className={`text-xs`}
            >
              {business?.phone}
            </span>
          </div>
          {business.businessLogo ? (
            <div className="rounded-full border w-16 h-16 relative">
              <Image
                src={business.businessLogo ?? ''}
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
              style={{ color: state.brandColor.textColor }}
              className={`text-sm font-medium`}
            >
              Bill To:
            </h2>
            <div className="grid">
              <span
                style={{ color: state.brandColor.textColor }}
                className={`text-xs`}
              >
                {customer.name}
              </span>
              <span
                style={{ color: state.brandColor.textColor }}
                className={`text-xs`}
              >
                {customer?.address} {customer?.zipCode}
              </span>
              <span
                style={{ color: state.brandColor.textColor }}
                className={`text-xs`}
              >
                {customer?.city}, {customer?.state}
              </span>
              <span
                style={{ color: state.brandColor.textColor }}
                className={`text-xs`}
              >
                {customer?.email}
              </span>
              <span
                style={{ color: state.brandColor.textColor }}
                className={`text-xs`}
              >
                {customer?.phone}
              </span>
            </div>
          </div>
          <div className="grid">
            <h2
              style={{ color: state.brandColor.textColor }}
              className={`text-2xl font-semibold`}
            >
              {`${capitalizeFirst(slug)}`}
            </h2>
            <span
              style={{ color: state.brandColor.textColor }}
              className={`text-sm`}
            >
              {`${capitalizeFirst(slug)}#`}
              <em>{data.number}</em>
            </span>
            {data.date ? (
              <span
                style={{ color: state.brandColor.textColor }}
                className={`text-sm`}
              >
                {`${capitalizeFirst(slug)} Date#`}
                <em>{format(data.date, 'MMM dd, yyyy')}</em>
              </span>
            ) : null}
            {data.dueDate ? (
              <span
                style={{ color: state.brandColor.textColor }}
                className={`text-sm`}
              >
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
                  style={{ backgroundColor: state.brandColor.bgColor }}
                  className={`text-white text-xs px-4 py-1`}
                >
                  Product
                </Table.HeadCell>
                <Table.HeadCell
                  style={{ backgroundColor: state.brandColor.bgColor }}
                  className={`text-white text-xs px-4  py-1`}
                >
                  Quantity
                </Table.HeadCell>
                <Table.HeadCell
                  style={{ backgroundColor: state.brandColor.bgColor }}
                  className={`text-white text-xs px-4  py-1`}
                >
                  Price
                </Table.HeadCell>
                <Table.HeadCell
                  style={{ backgroundColor: state.brandColor.bgColor }}
                  className={`text-white text-xs px-4  py-1`}
                >
                  Discount
                </Table.HeadCell>
                <Table.HeadCell
                  style={{ backgroundColor: state.brandColor.bgColor }}
                  className={`text-white text-xs px-4  py-1`}
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
              style={{ backgroundColor: state.brandColor.bgColor }}
              className={`w-full  h-[1px]`}
            />
            <div className="flex items-center justify-between gap-4 pb-0 py-2">
              <p
                style={{ color: state.brandColor.textColor }}
                className={`items-center text-xs font-bold`}
              >
                Subtotal
              </p>
              <p
                style={{ color: state.brandColor.textColor }}
                className={`items-center text-xs`}
              >
                <em>{state.currency.symbol}</em> {subTotal}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-0 py-1">
            <p
              style={{ color: state.brandColor.textColor }}
              className={`items-center text-xs`}
            >
              Tax
            </p>
            <p
              style={{ color: state.brandColor.textColor }}
              className={`items-center text-xs`}
            >
              <em>{state.currency.symbol}</em> {data.tax ? summmary() : 0}
            </p>
          </div>
          <div className="flex items-center justify-between py-0">
            <p
              style={{ color: state.brandColor.textColor }}
              className={`items-center text-xs`}
            >
              Delivery
            </p>
            <p
              style={{ color: state.brandColor.textColor }}
              className={`items-center text-xs`}
            >
              <em>{state.currency.symbol}</em>{' '}
              {data.delivery ? formatCurrency(data.delivery) : 0}
            </p>
          </div>

          <div className="flex items-center justify-between py-0">
            <p
              style={{ color: state.brandColor.textColor }}
              className={`items-center text-xs`}
            >
              Discount
            </p>
            <p
              style={{ color: state.brandColor.textColor }}
              className={`items-center text-xs`}
            >
              <em>{state.currency.symbol}</em>{' '}
              {data.discount ? formatCurrency(data.discount) : 0}
            </p>
          </div>
          <hr
            style={{ backgroundColor: state.brandColor.bgColor }}
            className={`w-full  h-[1px]`}
          />
          <div className={`flex items-center text-start justify-between py-0`}>
            <p className={`text-black items-center text-xs font-bold`}>TOTAL</p>
            <p className={`text-black items-center text-xs`}>
              <em>{state.currency.symbol}</em> {grandTotal()}
            </p>
          </div>
          <hr
            style={{ backgroundColor: state.brandColor.bgColor }}
            className={`w-full  h-[1px]`}
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
                style={{ backgroundColor: state.brandColor.bgColor }}
                className={`h-[1px] my-2`}
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
                  style={{ color: state.brandColor.textColor }}
                  className={`text-xs font-semibold`}
                >
                  Note
                </h6>
                <span
                  style={{ color: state.brandColor.textColor }}
                  className={`italic text-xs`}
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
                style={{ color: state.brandColor.textColor }}
                className={`text-xs font-semibold`}
              >
                Terms & Conditions
              </h6>
              <span
                style={{ color: state.brandColor.textColor }}
                className={`italic text-xs`}
              >
                {data.terms}
              </span>
            </div>
          ) : null}
          <div className="grid mt-3">
            {business.bank ? (
              <p
                style={{ color: state.brandColor.textColor }}
                className={`italic text-xs`}
              >
                Bank: <span>{business.bank}</span>
              </p>
            ) : null}
            {business.accNumber ? (
              <p
                style={{ color: state.brandColor.textColor }}
                className={`italic text-xs`}
              >
                Account No.: <span>{business.accNumber}</span>
              </p>
            ) : null}
            {business.holderName ? (
              <p
                style={{ color: state.brandColor.textColor }}
                className={`italic text-xs`}
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
