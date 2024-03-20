interface invoiceDetailsProps {
  nextComponent: () => void;
  previousComponent: () => void;
}

const InvoiceDetails = ({previousComponent}:invoiceDetailsProps) => {
  return (
    <>
      <div className="container mt-10">
        <h1 className="text-center font-bold text-[25px] py-20">
          Invoice Details
        </h1>

        <div className=" ParentContainer bg-[#222] p-6 my-4">
          <div className="Parent bg-[#333] p-10 rounded-2xl gap-12">
            <div>
              <p>01 - Invoice header</p>
              <hr className="mt-5 mb-8 border-gray-500" />

              <form action="bussinessName">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
                  <div>
                    <label className="text-gray-300" htmlFor="">
                      Invoice no{" "}
                      <span className="text-red-500 font-bold italic ml-2 text-base">
                        {" "}
                        *{" "}
                      </span>
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      placeholder="INV001"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300" htmlFor="Email">
                      Invoice date{" "}
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-200 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300 disabled:cursor-not-allowed"
                      placeholder="2024-02-8"
                      type="email"
                    />
                  </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
                  <div>
                    <label className="text-gray-300" htmlFor="Address">
                      Business Logo{" "}
                      <span className="text-red-500 font-bold italic ml-2 text-base">
                        {" "}
                        *{" "}
                      </span>
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-200 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="file"
                      placeholder="Drag and Drop your files or Browse"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300" htmlFor="Number">
                      Due Date{" "}
                      <span className="text-red-500 font-bold italic ml-2 text-base">
                        {" "}
                        *{" "}
                      </span>
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-200 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300 appearance-none"
                      type="number"
                      placeholder="Due Date"
                    />
                  </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]"></div>
              </form>
            </div>
            <div>
              <p className="pt-8 pb-6">
                04 - Product / Service details{" "}
                <span className="text-red-500 font-bold italic ml-2 text-base">
                  {" "}
                  *{" "}
                </span>
              </p>
              <hr className=" mb-8 border-gray-500" />

              <div className="table w-full">
                <thead>
                  <tr className="bg-gray-500">
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
              </div>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="item name" className="form_label w-full">
                      <span></span>
                      <div>
                        <input
                          type="text"
                          className="appearance-none text-sm focus:ring-0 w-full bg-transparent focus:outline-none border-b border-b-gray-600 py-2 pl-8 focus:border-b-blue-400 duration-200 transition ease-in-out"
                        />
                      </div>{" "}
                    </label>
                  </td>

                  <td className="px-6 py-4">
                    <label
                      htmlFor="item quantity "
                      className="form_label w-full"></label>

                    <div>
                      <input
                        type="text"
                        className="appearance-none text-sm focus:ring-0 w-full m-auto bg-transparent focus:outline-none border-b border-b-gray-600 py-2 pl-8 focus:border-b-blue-400 duration-200 transition ease-in-out"
                      />
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <label
                      htmlFor="item quantity "
                      className="form_label w-full">
                      <div className="relative">
                        <div className="absolute inset-0 text-sm  items-center hidden md:flex pl-4 pointer-events-none">
                          ₦
                        </div>
                        <input
                          type="text"
                          className="appearance-none text-sm focus:ring-0 w-full m-auto bg-transparent focus:outline-none border-b border-b-gray-600 py-2 pl-12 focus:border-b-blue-400 duration-200 transition ease-in-out"
                          placeholder="0.0"
                        />
                        <div className="absolute inset-0 right-0 top-[-4px] pl-[5.5rem] text-sm items-center hidden md:flex  pointer-events-none">
                          NGN
                        </div>
                      </div>
                    </label>
                  </td>

                  <td className="px-6 py-4">
                    <label
                      htmlFor="item quantity "
                      className="form_label w-full">
                      <div className="relative">
                        <div className="absolute inset-0 text-sm  items-center hidden md:flex pl-4 pointer-events-none">
                          ₦
                        </div>
                        <input
                          type="text"
                          className="appearance-none text-sm focus:ring-0 w-full m-auto bg-transparent focus:outline-none border-b border-b-gray-600 py-2 pl-12 focus:border-b-blue-400 duration-200 transition ease-in-out"
                          placeholder="0.0"
                        />
                        <div className="absolute inset-0 right-0 top-[-4px] pl-[5.5rem] text-sm items-center hidden md:flex  pointer-events-none">
                          NGN
                        </div>
                      </div>
                    </label>
                  </td>
                </tr>
              </tbody>
              <div className="moreItemsContainer flex items-center justify-center hidden">
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="item name" className="form_label w-full">
                        <span></span>
                        <div>
                          <input
                            type="text"
                            className="appearance-none text-sm focus:ring-0 w-full bg-transparent focus:outline-none border-b border-b-gray-600 py-2 pl-8 focus:border-b-blue-400 duration-200 transition ease-in-out"
                          />
                        </div>{" "}
                      </label>
                    </td>

                    <td className="px-6 py-4">
                      <label
                        htmlFor="item quantity "
                        className="form_label w-full"></label>

                      <div>
                        <input
                          type="text"
                          className="appearance-none text-sm focus:ring-0 w-full m-auto bg-transparent focus:outline-none border-b border-b-gray-600 py-2 pl-8 focus:border-b-blue-400 duration-200 transition ease-in-out"
                        />
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <label
                        htmlFor="item quantity "
                        className="form_label w-full">
                        <div className="relative">
                          <div className="absolute inset-0 text-sm  items-center hidden md:flex pl-4 pointer-events-none">
                            ₦
                          </div>
                          <input
                            type="text"
                            className="appearance-none text-sm focus:ring-0 w-full m-auto bg-transparent focus:outline-none border-b border-b-gray-600 py-2 pl-12 focus:border-b-blue-400 duration-200 transition ease-in-out"
                            placeholder="0.0"
                          />
                          <div className="absolute inset-0 right-0 top-[-4px] pl-[5.5rem] text-sm items-center hidden md:flex  pointer-events-none">
                            NGN
                          </div>
                        </div>
                      </label>
                    </td>

                    <td className="px-6 py-4">
                      <label
                        htmlFor="item quantity "
                        className="form_label w-full">
                        <div className="relative">
                          <div className="absolute inset-0 text-sm  items-center hidden md:flex pl-4 pointer-events-none">
                            ₦
                          </div>
                          <input
                            type="text"
                            className="appearance-none text-sm focus:ring-0 w-full m-auto bg-transparent focus:outline-none border-b border-b-gray-600 py-2 pl-12 focus:border-blue-300 duration-200 transition ease-in-out"
                            placeholder="0.0"
                          />
                          <div className="absolute inset-0 right-0 top-[-4px] pl-[5.5rem] text-sm items-center hidden md:flex  pointer-events-none">
                            NGN
                          </div>
                        </div>
                      </label>
                    </td>
                  </tr>
                </tbody>
                <div className=" deleteButton border rounded-full p-2 border-red-400">
                  <svg
                    className="w-3 h-3 fill-current text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="btn my-5 mx-3">
              <button
                type="button"
                id="AddNewItem"
                className="py-3 px-3 border transition duration-200 ease-in-out rounded-lg w-52 focus:ring-blue-500 mt-8  lg:mt-0 focus:ring-offset-blue-200 text-white text-center text-base font-semibold shadow-md focus:border-blue-300 ">
                Add new Item
              </button>
            </div>

            <div className="pl-auto lg:flex lg:items-center lg:justify-end lg:m-auto">
              <div>
                <div className="flex items-center">
                  <p className="w-[50%]">Sub Total</p>
                  <div className="flex items-center ">
                    <svg
                      className="fill-current w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path d="M122.6 46.3c-7.8-11.7-22.4-17-35.9-12.9S64 49.9 64 64V256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320H228.2l97.2 145.8c7.8 11.7 22.4 17 35.9 12.9s22.7-16.5 22.7-30.6V320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V256H262.5L122.6 46.3zM305.1 320H320v22.3L305.1 320zM185.5 256H128V169.7L185.5 256z" />
                    </svg>
                    <p>NGN&nbsp;0.00</p>
                  </div>
                </div>
                <div className="flex items-center py-6">
                  <div className="w-[50%]">
                    TAX <span>(percent)</span>
                  </div>
                  <div>
                    <input
                      className=" block border w-40 bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-300 focus:outline-none duration-300 py-3 p-3 px-4 focus:border focus:border-blue-300 appearance-none"
                      placeholder="0.00"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex items-center ">
                  <div className="w-[50%]">Discount</div>
                  <div>
                    <label
                      htmlFor="item quantity "
                      className="form_label w-full">
                      <div className="relative">
                        <div className="absolute inset-0 text-sm  items-center flex pl-4 pointer-events-none">
                          ₦
                        </div>
                        <input
                          type="text"
                          className=" block border w-40 bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-300 focus:outline-none duration-300 py-3 px-4 pl-10 focus:border focus:border-blue-300 appearance-none"
                          placeholder="0.0"
                        />
                        <div className="absolute inset-0 right-0 top-[-4px] pl-[5.5rem] text-sm items-center flex  pointer-events-none">
                          NGN
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <hr className=" mb-8 border-gray-500" />
                <div className="flex items-center gap-[50px]">
                  <h2 className="font-bold">Balance Amount</h2>
                  <div className="flex items-center gap-10">
                    <svg
                      className="fill-current w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path d="M122.6 46.3c-7.8-11.7-22.4-17-35.9-12.9S64 49.9 64 64V256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320H228.2l97.2 145.8c7.8 11.7 22.4 17 35.9 12.9s22.7-16.5 22.7-30.6V320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V256H262.5L122.6 46.3zM305.1 320H320v22.3L305.1 320zM185.5 256H128V169.7L185.5 256z" />
                    </svg>
                    <p>NGN&nbsp;0.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="pt-8 pb-6">04 - Product / Service details </p>
              <hr className=" mb-8 border-gray-500" />

              <form action="bussinessName">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
                  <div>
                    <label className="text-gray-300" htmlFor="">
                      Note{" "}
                    </label>
                    <textarea
                      className="w-full block border bg-[#555] my-4 rounded-md border-gray-200 outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none text-base duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      placeholder="Leave a note"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300" htmlFor="Email">
                      Terms & Condition{" "}
                    </label>
                    <textarea
                      className="w-full block border bg-[#555] my-4 rounded-md border-gray-200 outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none text-base duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      placeholder="Leave a note"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300" htmlFor="City">
                    Authorized signatory{" "}
                    <span className="text-red-500 font-bold italic ml-2 text-base">
                      {" "}
                      *{" "}
                    </span>
                  </label>
                  <input
                    className="w-full lg:w-52 block border bg-[#555] my-4 rounded-md border-gray-200 outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none text-base duration-300 py-3 px-4 focus:border focus:border-blue-300"
                    type="file"
                  />
                </div>

                <div className=" lg:flex lg:items-center lg:justify-between mt-8">
                  <div
                    className="p-3 w-full lg:w-[100px] cursor-pointer shadow-sm rounded-lg text-blue-700 border bg-blue-400 focus:border-blue-800 dark:text-white hover:bg-[#4884DA]"
                    role="alert">
                    <button
                    type="button"
                    onClick={previousComponent} 
                    className="flex items-center justify-center gap-2">
                      <svg
                        className="w-6 h-6 text-gray-100 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h14M5 12l4-4m-4 4 4 4"
                        />
                      </svg>
                      <h3>Back</h3>
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-3 bg-blue-400 hover:bg-[#4884DA] transition duration-200 ease-in-out rounded-lg w-full lg:w-52 focus:ring-blue-500  mt-8  lg:mt-0 focus:ring-offset-blue-200 text-white text-center text-base font-semibold shadow-md  disabled:cursor-not-allowed disabled:bg-slate-500">
                    Generate Invoice
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;
