import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import "animate.css";
import { useGetUserDetails } from "../../hooks/auth";
import { useStudents } from "../../hooks/student";
const Index = () => {
  const [sideBarActive, setSideBarActive] = useState(false);

  const getStudents = async () => {
    try {
      const fetchedStudents = await useStudents()
      console.log(fetchedStudents)
     

    } catch (error) {
      console.log(error)
      return error
    }
  }

  useEffect(() => {
    getStudents()
  }, []);

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
        <title>Admin Dashboard | eKOSORA</title>
      </Head>
      <Navbar
        page="Admin Dashboard"
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className="w-full flex h-full items-start justify-start">
        {sideBarActive ? (
          <Sidebar page="admin" active="dashboard" />
        ) : null}
        <div
          className={`${
            sideBarActive ? "w-10/12" : "w-full"
          } flex flex-col items-center justify-start pt-[60px] h-fit p-10`}
        ></div>
      </div>
    </div>
  );
};

export default Index;
