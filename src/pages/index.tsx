import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Index/Navbar";
import Footer from "../components/Index/Footer";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";

const Home: NextPage = () => {
  return (
    <div className="bg-[#f0f0f0]  h-fit">
      <Head>
        <title>Home | eKOSORA</title>
      </Head>
      <Navbar />
      <div
        className="h-[500px] w-full flex items-center justify-between"
        style={{
          background: " linear-gradient(180deg, #3F7CAC 0%, #ACDBFF 100%)",
        }}
      >
        <div className="grid sm:w-1/2 place-content-center p-[30px] ">
          <h1 className="text-black text-[32px] heading-text">
            Work Smarter. Not Harder
          </h1>

          <p className="mt-[10px] text-[22px] text-white">
            Work from anywhere you are, at any time of the day
          </p>
          <div className="flex md:flex-row flex-col w-fit items-center justify-center">
            <Link  className="login-button" href={"/downloads"}>
              <button title="eKOSORA is better on the app"
                className="hover:animate-ring mx-2 login-button flex items-center hover:grayscale-[50%] mt-[15px] button-text bg-[#4ca7ce] text-white py-[12px] px-[38px] ml-[10px] w-fit rounded-[2px] text-sm hover:bg-ek-blue-200"
              >
                <HiOutlineDownload className="text-lg mr-2 text-white" />
                <span>
                  DOWNLOAD APP
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative h-full hidden sm:block w-1/2">
          <div
            className="hidden sm:flex md:ml-24 -translate-x-[100px] -translate-y-[69px]"
            style={{ transform: " translate(-100px, 69px)" }}
          >
            <Image
              alt=""
              className=""
              width={"575px"}
              height={"500px"}
              src={'/img/remoteWork.png'}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-start flex-col ">
        <div className="Feature py-[20px] px-[40px] mb-[20px] flex items-center justify-center relative w-11/12">
          <div className="smm20:flex hidden">
            <Image alt="" height={"300px"} width={485} src={'/img/migrate.png'} />
          </div>
          <div className="flex flex-col items-start justify-center w-full smm20:max-w-[600px]">
            <h1 className="text-ek-blue text-[32px] heading-text">
              Migrate From Paper
            </h1>
            <p className="mt-[10px] text-[18px] font-light text-black">
              Why would you stay in the analog age, recording all your important
              data on paper. Join eKOSORA and have all your data saved digitally
            </p>
          </div>
        </div>

        <div className="Feature py-[20px] px-[40px] mb-[20px] flex items-center justify-center relative w-11/12">
          <div className="flex flex-col items-start justify-center w-full smm20:max-w-[600px]">
            <h1 className="text-end  w-full text-ek-blue text-[32px] heading-text">
              Maximum Efficiency
            </h1>
            <p className="mt-[10px] text-[18px] font-light w-full text-end text-black">
              Be able to do your work easier and faster. Save time and effort by
              JOINING eKOSORA.
            </p>
          </div>
          <div className="smm20:flex hidden">
            <Image alt="" height={"300px"} width={367} src={'/img/timeManagement.png'} />
          </div>
        </div>

        <div className="Feature py-[20px] px-[40px] mb-[20px] flex items-center justify-center relative w-11/12">
          <div className="smm20:flex hidden">
            <Image alt="" height={"300px"} width={320} src={'/img/speed.png'} />
          </div>
          <div className="flex flex-col items-start justify-center w-full smm20:max-w-[600px]">
            <h1 className="text-ek-blue text-[32px] heading-text">
              So fast it&apos;s problematic
            </h1>
            <p className="mt-[10px] text-[18px] font-light text-black">
              No ruffling through papers just find one student. With the click
              of button, you can find all the information about a student.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
