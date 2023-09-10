import React from 'react';

function login() {
  function submit(event) {
    event.preventDefault();
    console.log(this);
  }
  return (
    <div className="bg-gray-400 h-screen w-screen ">
      <div className="container mx-auto max-w-7xl">
        <form
          className="flex justify-center h-screen items-center"
          onSubmit={submit}
        >
          <div className="bg-white w-1/3 shadow-md shadow-black rounded-md py-10 px-10">
            <div className="flex flex-col gap-0.5 justify-center ">
              <label className="font-serif" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email....."
                className="rounded-sm w-full  border px-1 border-gray-300 focus:border-red-500 focus:outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-0.5 justify-center">
              <label className="font-serif" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password....."
                className=" rounded-sm w-full  border px-1 border-gray-300 focus:border-red-500 focus:outline-none py-2"
              />
            </div>
            <button
              className="w-16  bg-red-500 hover:bg-blue-500 rounded-sm mt-5 font-serif"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
