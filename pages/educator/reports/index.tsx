import Head from "next/head";
import React, { useState } from "react";
import { Navbar } from "../../../components/Dashboard/Navbar";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { useAuth } from "../../../Context/AuthContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Minimal from "../../../components/templates/reports/Minimal";

const Reports = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false);
  const { user }: any = useAuth();

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
        <title>Generate Report | eKOSORA</title>
      </Head>
      <Navbar
        page="View Report"
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
          <PDFDownloadLink document={<Minimal />} fileName="report">
            {({ loading }) =>
              loading ? (
                <button className="px-4 rounded cursor-pointer bg-ek-blue-75 text-white">
                  Loading Document
                </button>
              ) : (
                <button className="px-4 rounded cursor-pointer bg-ek-blue-75 text-white">
                  Download
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Reports;
