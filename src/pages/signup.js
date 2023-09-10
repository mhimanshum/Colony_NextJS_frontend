import React from 'react';

function signup() {
  const submit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.number.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log('Signup Successfull');
  };
  return (
    <div className="bg-gray-200 h-full w-full ">
      <div className="container mx-auto max-w-7xl">
        <form
          className="flex justify-center h-screen items-center"
          onSubmit={submit}
        >
          <div className="bg-white w-1/3 shadow-md shadow-black rounded-md py-10 px-10 -mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-white duration-300">
            <h1 className="text-5xl font-serif font-semibold mb-5">SignUp</h1>
            <div className="flex flex-col gap-0.5 justify-center ">
              <label className="font-serif" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name....."
                className="rounded-sm w-full  border px-1 border-gray-300 focus:border-red-500 focus:outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-0.5 justify-center">
              <label className="font-serif" htmlFor="number">
                Ph. Number
              </label>
              <input
                type="number"
                name="number"
                placeholder="Enter your ph number....."
                className=" rounded-sm w-full  border px-1 border-gray-300 focus:border-red-500 focus:outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-0.5 justify-center">
              <label className="font-serif" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email....."
                className=" rounded-sm w-full  border px-1 border-gray-300 focus:border-red-500 focus:outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-0.5 justify-center">
              <label className="font-serif" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
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

export default signup;
