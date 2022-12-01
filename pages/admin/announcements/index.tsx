import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Dashboard/Navbar";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import * as dateFns from "date-fns";
import { announcementsFaker } from "../../../utils/faker";
import { useGetUserDetails } from "../../../hooks/auth";
import { AnnouncementObject } from "../../../types/interfaces";

const Index = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false);
  const [announcements, setAnnouncemnents] = useState(announcementsFaker);
  const [user, setUser] = useState()

  const getUser = async () => {
    try {
      const user = await useGetUserDetails()
      if (!user.status) return
      setUser(user.data?.data.user)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div className="animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen">
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Head>
        <title> Announcements | Teacher Dashboard | eKOSORA</title>
      </Head>
      <Navbar
        page="Announcements"
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className="w-full flex h-full items-start justify-start">
        {sideBarActive ? (
          <Sidebar user={user} page="educator" active="dashboard" />
        ) : null}
        <div
          className={`${
            sideBarActive ? "w-10/12" : "w-full"
          } flex flex-col items-center justify-start pt-[60px] h-fit p-10`}
        >
          <div className="w-full flex flex-col items-start my-8 justify-start  animate__animated animate__fadeInLeft">
            <span className="text-4xl heading-text mb-4 flex items-center justify-center">
              <span>Announcements</span>
              <span className="text-[14px] flex items-center justify-center h-6 py-[2.5px] px-[5px] bg-ek-blue-50 text-white ml-1 -translate-y-1 w-[35px] rounded-xl">
                4
              </span>
            </span>
            {announcements.map((announcement: AnnouncementObject, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-fit py-1 flex flex-col items-center justify-center"
                >
                  <div className="rounded-[5px] neumorphism w-full bg-[#f0f0f0] flex flex-col items-start justify-start mb-[30px] h-[160px] p-[20px] relative">
                    <span className="text-base flex items-center justify-center bg-ek-blue-50 text-white -translate-y-1 w-fit h-6 p-[15px] rounded-3xl absolute -top-2 -right-2">
                      {dateFns.formatDistance(1666534238354, new Date(), {
                        addSuffix: true,
                      })}
                    </span>
                    <span className="mb-[20px] text-lg font-semibold questrialtext">
                      {announcement.heading}
                    </span>
                    <span className="">{announcement.content}</span>
                    <span className="w-full text-end mt-[20px] text-[#0006]">
                      Posted by <strong>{announcement.postedBy}</strong> on{" "}
                      <strong>
                        {dateFns.format(announcement.posted, "MMM do yyyy")}
                      </strong>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
