import React from "react";

const Footer = () => {
  return (
    <div className="relative px-6 lg:px-14 w-full flex items-start py-8 justify-center h-fit lg:h-96 bg-ek-blue-75">
      <div className="w-full flex lg:flex-row flex-col items-start justify-center">
        <div className="w-full lg:w-4/12 lg:my-0 my-4 flex flex-col items-start ">
          <span className="heading-text text-xl my-4">Contact Us</span>
          <ul className=" text-white">
            <li className="my-1 flex">
              Email:
              <ul className="list-disc ml-8">
                <li>contact@ekosora.ac</li>
                <li>support@ekosora.ac</li>
              </ul>
            </li>
            <li className="my-1">Phone: +250 782 307 144</li>
            <li className="my-1">Location: Kigali, Rwanda</li>
          </ul>
        </div>
        <div className="w-full lg:w-4/12 lg:my-0 my-4 flex flex-col items-start ">
          <span className="heading-text text-xl my-4">
            Frequently Asked Questions
          </span>
          <ul className="ml-3list-disc text-white">
            <li className="my-1 cursor-pointer hover:text-black">
              What is eKOSORA
            </li>
            <li className="my-1 cursor-pointer hover:text-black">
              How will eKOSORA increase my school&apos;s perfomance
            </li>
            <li className="my-1 cursor-pointer hover:text-black">
              Is it necessary to have many students?
            </li>
            <li className="my-1 cursor-pointer hover:text-black">
              Can I use eKOSORA for free
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-4/12 lg:my-0 my-4 flex lg:pl-16 flex-col items-start ">
          <span className="heading-text text-xl my-4">Our Socials</span>
          <ul className="ml-3list-disc text-white">
            <li className="my-1 cursor-pointer hover:text-black">Instagram</li>
            <li className="my-1 cursor-pointer hover:text-black">Facebook</li>
            <li className="my-1 cursor-pointer hover:text-black">LinkedIn</li>
            <li className="my-1 cursor-pointer hover:text-black">Twitter</li>
          </ul>
        </div>
      <div className="lg:absolute mt-4 bottom-8 flex text-base items-center flex-col justify-start">
        <span className=" text-white">
          &copy; 2021 eKOSORA. All rights reserved.
        </span>
        <span className=" text-white">
          Developed and maintained by{" "}
          <a className="hover:underline" href="https://github.com/IVainqueur">
            I.Vainqueur
          </a>{" "}
          and{" "}
          <a className="hover:underline" href="https://github.com/mugishap">
            M.Precieux
          </a>
        </span>
      </div>
      </div>
    </div>
  );
};

export default Footer;
