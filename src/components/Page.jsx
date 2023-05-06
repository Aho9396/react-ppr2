import React from "react";
import Typed from "react-typed";

const Page = () => {
  return (
    <>
      <div id="home" className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex flex-col ">
          <p className="uppercase text-[#00df9a] font-bold p-2 ">
            Growing with GD...
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with data.
          </h1>
          <div className="flex justify-center items-center">
            <p className=" md:text-5xl sm:text-4xl text-xl font-bold">
              Fast, Flexible finacing for
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md: text-2xl text-xl font-bold text-gray-400">
            Lorem ipsum dolor sit amet consectetur Est, minima!
          </p>
          <button className="bg-[#00ffaebc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#000300]">
            Get Started
          </button>
        </div>
      </div>

      <div id="about" className="about w-full py-16 px-4 bg-[#f7f7f7]">
        <div className="max-w-[1240px] flex justify-center mx-auto md:grid-cols-2"></div>
        <img
          className=" w-[500px] mx-auto my-4 animate-bounce w-70 h-70"
          src="https://www.pngitem.com/pimgs/m/247-2471445_illustration-of-people-around-computer-analytics-illustration-png.png"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <p className="text-[#00df9a] font-bold ">Data studies.</p>
          <h1 className="md:text-4xl sm:text-3xl text-2cl font-semibold py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
            nostrum.
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            consequuntur consectetur provident eligendi. Laborum veniam esse
            molestiae enim commodi? Laboriosam amet natus dignissimos, dolorem
            distinctio labore maiores itaque illum ipsa?
          </p>
          <button className=" w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#000300] text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full py-16 text-white">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              veritatis in 
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, explicabo.</p>
          </div>
          <div className="my-4">
            <div>
              <input className="p-3 flex w-full rounded-md" type="email" placeholder="Enter your e-mail..." />
              <button className=" w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#000300] bg-[#00df9a] hover:bg-[#67eec3]">
            Get Started
          </button>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="w-full h-[90vh] flex">
        <div className="leftSide h-full flex-[40%] bg-gradient-to-t from-[#000300] to-[#00df9a] hover:bg-gradient-to-b"></div>
        <div className="rightSide h-full flex-[70%] flex-col justify-center bg-white">
          <h1 className="font-w-[10] text-[2rem] ml-[30px] text-[#00df9a]">
            <u>Contact</u> <u>Us</u>~
          </h1>
          <form
            method="POST"
            id="contact-form"
            className="flex flex-col w-auto h-auto p-[30px] text-[#1cb585]"
          >
            <label className="mt-[15px] text-[1.3rem]" htmlFor="name">
              Name:{" "}
            </label>
            <input
              className="inputC h-[40px] w-[90%] border-b border-b-[#00df9a] text-[#000300] focus:outline-none outline-none hover:outline-offset-2"
              type="text"
              name="name"
              placeholder="Enter your name"
            />

            <label className="mt-[15px] text-[1.3rem]" htmlFor="email">
              E-mail:{" "}
            </label>
            <input
              className="inputC h-[40px] w-[90%] border-b  border-b-[#00df9a] text-[#000300] focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter your email"
            />

            <label className="mt-[15px] text-[1.3rem]" htmlFor="message">
              Message:{" "}
            </label>
            <textarea
              className="mt-[1px] h-[130px] w-[90%] border-b border-b-[#00df9a] text-[#000300] focus:outline-none"
              rows="7"
              name="message"
              placeholder="Enter your message..."
              required
            />
            <button className=" w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-500 text-[#000300]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
