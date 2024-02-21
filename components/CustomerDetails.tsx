const CustomerDetails = () => {
  return (
    <>
      <div className="container mt-10">
        <h1 className="text-center font-bold text-[25px] py-20">
          Customer Details
        </h1>

        <div className=" ParentContainer bg-[#222] p-6 my-4">
          <div className="Parent bg-[#333] p-10 rounded-2xl gap-12">
            <div>
              <p>
                01 - Billing to{" "}
                <span className="text-gray-400 ">
                  (Customer details)
                  <hr className="mt-5 mb-8 border-gray-500" />
                </span>
              </p>

              <form action="bussinessName">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
                  <div>
                    <label className="text-gray-300" htmlFor="">
                      Client's name{" "}
                      <span className="text-red-500 font-bold italic ml-2 text-base">
                        {" "}
                        *{" "}
                      </span>
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300" htmlFor="Email">
                      Client's email{" "}
                      <span className="text-red-500 font-bold italic ml-2 text-base">
                        {" "}
                        *{" "}
                      </span>
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="email"
                    />
                  </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
                  <div>
                    <label className="text-gray-300" htmlFor="Address">
                      Address{" "}
                      <span className="text-red-500 font-bold italic ml-2 text-base">
                        {" "}
                        *{" "}
                      </span>
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300" htmlFor="Number">
                      Phone Number{" "}
                      <span className="text-red-500 font-bold italic ml-2 text-base">
                        {" "}
                        *{" "}
                      </span>
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300 appearance-none"
                      type="number"
                    />
                  </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
                  <div>
                    <label className="text-gray-300" htmlFor="State">
                      State{" "}
                      <span className="text-red-500 font-bold italic ml-2 text-base">
                        {" "}
                        *{" "}
                      </span>
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="select"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300" htmlFor="City">
                      City{" "}
                      <span className="text-red-500 font-bold italic ml-2 text-base">
                        {" "}
                        *{" "}
                      </span>
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="text"
                    />
                  </div>
                </div>

                <div className="py-[1rem]">
                  <label className="text-gray-300" htmlFor="code">
                    Zip code
                  </label>
                  <input
                    className="w-full lg:w-[47%] block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                    type="text"
                  />
                </div>
                <div className=" lg:flex lg:items-center lg:justify-between mt-8">
                  <div
                    className="p-3 w-full lg:w-[100px] cursor-pointer shadow-sm rounded-lg text-blue-700 border bg-blue-400 focus:border-blue-800 dark:text-white hover:bg-[#4884DA]"
                    role="alert">
                    <div className="flex items-center justify-center gap-2">
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
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-3 bg-blue-400 hover:bg-[#4884DA] transition duration-200 ease-in-out rounded-lg w-full lg:w-52 focus:ring-blue-500  mt-8  lg:mt-0 focus:ring-offset-blue-200 text-white text-center text-base font-semibold shadow-md disabled:cursor-not-allowed disabled:bg-slate-500">
                    Same and Continue
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

export default CustomerDetails;
