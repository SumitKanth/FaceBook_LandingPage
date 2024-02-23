import FacebookImg from "../assets/logo.svg";

const Home = () => {
  return (
    <>
      <div className="flex px-48 py-32 h-screen bg-slate-50">
        {/* Left Content */}

        <div className="h-80 text-center">
          <div className="m-auto pr-20">
          <img
            src={FacebookImg}
            alt="facebook_img"
            className="h-24"
          />
          <p className="ml-6 text-xl font-medium">
            Facebook helps you connect and share with
          </p>
          <p className="ml-6 text-xl text-left font-medium">
            the people in your life.
          </p>
          </div>
          </div>

        {/* Right Content */}
      <div>
        <div className="h-80 shadow-xl bg-white leading-5">
          <form action="/" className="flex flex-col w-80 h-52 px-2 py-2">
            <input
              type="email"
              name="email"
              id="email"
              className="mx-2 my-2 x-3 py-2 px-2 border-solid border-2 border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              name="password"
              id="password"
              className="mx-2 my-2 x-3 py-2 px-2 border-solid border-2 border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
              placeholder="Password"
            />
            <button className="bg-blue-700 px-10 py-2 text-white font-semibold text-xl rounded-md font-sans mx-2 my-2 hover:bg-blue-500">
              Log in
            </button>
            <p className="my-2 mb-3 text-blue-400 text-center cursor-pointer w-2/4 m-auto hover:underline">
              Forgotten password?
            </p>
            <hr className="mx-2" />
            <button className="w-fit font-bold text-base px-2 mx-auto my-4 rounded-md py-3 text-white bg-green-500 hover:bg-green-700">
              Create New Account
            </button>
          </form>
        </div>
        <p className="mx-2 my-5 text-sm px-8 py-4"><span className="font-bold hover:underline hover:cursor-pointer">Create a page</span> for a celeberity, brand and business.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
