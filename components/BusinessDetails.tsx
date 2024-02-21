// import '../app/globals.css'
const BusinessDetails = () => {
  return (
    <>
      <div className="container mt-10">
        <h1 className="text-center font-bold text-[25px] py-20">
          Your Business Details
        </h1>

        <div className=" ParentContainer bg-[#222] p-6 my-4">
          <div className="Parent bg-[#333] p-10 rounded-2xl gap-12">
            <div>
              <p>
                01 - Billing by{" "}
                <span className="text-gray-400 ">
                  (Your details)
                  <hr className="mt-5 mb-8 border-gray-500" />
                </span>
              </p>

              <form action="bussinessName">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
                  <div>
                    <label className="text-gray-300" htmlFor="">
                      Your bussiness name{" "}
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
                      Your email{" "}
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
                      className="remove-number-arrow w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300 appearance-none"
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
              </form>
            </div>

            <div>
              <p className="py-8">
                01 - Bank Details{" "}
                <span className="text-gray-400 ">
                  (Optional)
                  <hr className="mt-5 mb-8 border-gray-500" />
                </span>
              </p>

              <form action="">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
                  <div>
                    <label className="text-gray-300" htmlFor="Country">
                      Country
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300" htmlFor="Bank">
                      Bank
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="text"
                    />
                  </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
                  <div>
                    <label className="text-gray-300" htmlFor="Account">
                      Account Number
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300" htmlFor="AccountName">
                      Account holder name
                    </label>
                    <input
                      className="w-full block border bg-[#555] my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-red-800 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                      type="text"
                    />
                  </div>
                </div>

                <div className=" w-full lg:w-52 ml-auto">
                  <button
                    type="submit"
                    className="py-3 px-3 bg-blue-400 hover:bg-[#4884DA] transition duration-200 ease-in-out mt-8 rounded-lg w-full lg:w-52 focus:ring-blue-500 focus:ring-offset-blue-200 text-white text-center text-base font-semibold shadow-md  disabled:cursor-not-allowed disabled:bg-slate-500">
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

export default BusinessDetails;
