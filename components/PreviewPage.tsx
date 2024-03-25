import React from "react";
import { FaEdit, FaDownload } from "react-icons/fa";
import Link from "next/link";
import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";

function PreviewPage() {
  return (
    <>
      <div className="bg-[#222] w-full p-6 my-4 shadow-sm">
        <div
          className="bg-[#444] px-8 pb-20 pt-8
      rounded-lg gap-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-16 justify-between md:flex-row md:items-center">
            <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-start gap-4 ">
              <Link
                href=""
                className="flex items-center gap-2 p-3 hover:border-0 border border-blue-400 justify-center  transform  hover:bg-[#4884DA] transition hover:scale-105 duration-200 ease-in-out rounded-lg w-full lg:w-[120px] text-white md:w-48">
                <FaEdit />
                <p>Edit</p>
              </Link>

              <Link
                href=""
                className="flex items-center gap-2 py-3 px-3 hover:border-0 border border-blue-400 hover:bg-[#4884DA]  transition duration-200 ease-in-out transform hover:scale-105 mt- rounded-lg w-full lg:w-52 justify-center md:w-48">
                <div>
                  <svg
                    className="w-6 h-6 text-gray-100 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                </div>
                <p>Create new invoice</p>
              </Link>
            </div>

            <button className="flex items-center gap-2 py-3 px-3 bg-blue-400 hover:bg-[#4884DA] transition duration-200 ease-in-out rounded-lg w-full lg:w-48 transform hover:scale-105 justify-center md:mt-0 md:w-32">
              <FaDownload />
              <p>Download</p>
            </button>
          </div>
          <div className="bg-[#333] rounded-lg px-12 pt-8 pb-4 gap-12">
            <div className="w-full rounded-t-lg  gap-12 bg-[#9e9b9b]">
              <div className="invoice-flex-container rounded-t-lg bg-gray-500 p-[60px] flex items-center justify-between">
                <div>
                  <NextLogo />
                  <h2 className="font-semibold text-[25px]">Invoice</h2>
                </div>
                <div className="content text-right ">
                  <p>1NV002</p>
                  <p>Date: 2024-02-8</p>
                  <p>Triads Entertainment</p>
                </div>
              </div>
              <div className="bill-container bg-[#9e9b9b] flex items-center justify-between p-[60px]">
                <div>
                  <h4>Bill To:</h4>
                  <p>Purity</p>
                  <p>Tejumola Estate Fajol</p>
                  <p>08130960235</p>
                </div>
                <div>
                  <h4>Payment To:</h4>
                  <p>Purity</p>
                  <p>Opay</p>
                  <p>08130960235</p>
                </div>
              </div>
              <div className="item pb-4">
                <table className="w-full bg-[#9e9b9b] ">
                  <tr className=" text-sm bg-gray-500">
                    <th> # ITEM</th>
                    <th> QTY</th>
                    <th> PRICE</th>
                    <th> AMOUNT</th>
                  </tr>

                  <tr className="text-center ">
                    <td>
                      {" "}
                      <span>1</span>bread
                    </td>
                    <td>1</td>
                    <td>NGN 30.00</td>
                    <td>NGN 30.00</td>
                  </tr>
                </table>
              </div>
              <div className="flex items-center justify-end m-auto px-20">
                <div>
                  <div>
                    <hr className="mt-2" />
                    <div className="flex items-center justify-between gap-4 py-4">
                      <p>Subtotal</p>
                      <p>NGN 30.00</p>
                    </div>
                    <hr />
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <p>Tax</p>
                    <p>NGN 0.00</p>
                  </div>

                  <div className="flex items-center justify-between  py-4">
                    <p>Discount</p>
                    <p>NGN 0.00</p>
                  </div>

                  <div className="flex items-center text-start justify-between bg-gray-500  px-2 py-2">
                    <p>Total</p>
                    <p>NGN 30.00</p>
                  </div>

                  <div className="flex items-center justify-between gap-[150px] py-4">
                    <p>Amount Received</p>
                    <p>NGN 0</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mx-20 text-sm">
                <div className="leading-7">
                  <h5>Contact Info:</h5>
                  <p>08101127745</p>
                  <p>leadspurts"gmail.com</p>
                </div>
                <div className="text-end leading-8">
                  <h5 className="font-bold">Balance Amount:</h5>
                  <hr />
                  <h1 className="font-bold text-base">NGN 30.00</h1>
                  <p className="font-medium text-base text-red-600">
                    Due Date:
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-[120px] gap-8 pb-8 px-20">
                <div>
                  <SupabaseLogo />
                </div>
                <p className="font-normal text-base text-gray-300">
                  Powered by: <span>Supabase</span>
                </p>
              </div>
              <hr className="h-[1rem] bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviewPage;
