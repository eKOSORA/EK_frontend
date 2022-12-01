import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Dashboard/Navbar";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { userTeacher } from "../../../utils/faker";
import { timetablesView } from "../../../utils/timetables";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import TimetableView from "../../../components/Dashboard/admin/TimetableView";
import EditTimetableView from "../../../components/Dashboard/admin/EditTimetableView";
import swal from "sweetalert";
import Link from "next/link";
import { AiFillCalendar } from "react-icons/ai";
import { TimeTableViewObject } from "../../../types/timetables";
import { useGetUserDetails } from "../../../hooks/auth";

const Index = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false);
  const [timetables, setTimetables] =
    useState<Array<TimeTableViewObject>>(timetablesView);
  const [viewTimetable, setViewTimetable] = useState<boolean>(false);
  const [editTimetable, setEditTimetable] = useState<Boolean>(false);
  const [activeTimetable, setActiveTimetable] = useState<TimeTableViewObject>({
    imageUrl: "",
    lastEdited: "",
    name: "",
  });
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
  const handleViewTimetable = (index: number) => {
    setActiveTimetable(timetables[index]);
    setViewTimetable(true);
  };

  const mouseEnter = (id: String) => {
    const timetableDescription = document.querySelector(`#${id}`);
    timetableDescription?.classList.replace("sm:hidden", "sm:flex");
  };

  const mouseLeave = (id: String) => {
    const timetableDescription = document.querySelector(`#${id}`);
    timetableDescription?.classList.replace("sm:flex", "sm:hidden");
  };

  const confirmDeletion = (index: number) => {
    const alertUser: any = swal({
      title: "Are you sure?",
      text: "Once deleted you'll have to generate another timetable!!!",
      icon: "warning",
      dangerMode: true,
    });

    alertUser.then((willDelete: any) => {
      if (willDelete) {
        swal({
          title: "",
          text: "Timetable deleted successfully",
          icon: "success",
          dangerMode: false,
        });
      }
    });

    timetables.slice(index, 1);
    setViewTimetable(false);
    setEditTimetable(false);
  };

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
        page="Timetables"
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className="w-full flex h-full items-start justify-start">
        {sideBarActive ? (
          <Sidebar user={user} page="admin" active="dashboard" />
        ) : null}
        <div
          className={`${
            sideBarActive ? "w-10/12" : "w-full"
          } flex flex-col items-center justify-start pt-[60px] h-fit p-10`}
        >
          <div className="w-full flex items-center justify-between">
            <span className="text-ek-blue text-4xl w-fit text-start heading-text mt-8 mb-0">
              Saved Timetables
            </span>
            <Link href={"/admin/timetables/new"}>
              <button className="px-5 flex items-center justify-center py-2 bg-ek-blue-75 rounded hover:animate-ring text-white cursor-pointer">
                <AiFillCalendar className="mr-2" size={25} color="white" />
                <span>Create New</span>
              </button>
            </Link>
          </div>

          {viewTimetable ? (
            <TimetableView
              index={timetables.indexOf(activeTimetable)}
              confirmDeletion={confirmDeletion}
              setEditTimetable={setEditTimetable}
              setViewTimetable={setViewTimetable}
              activeTimetable={activeTimetable}
            />
          ) : null}

          {editTimetable ? (
            <EditTimetableView
              index={timetables.indexOf(activeTimetable)}
              confirmDeletion={confirmDeletion}
              setEditTimetable={setEditTimetable}
              setViewTimetable={setViewTimetable}
              activeTimetable={activeTimetable}
            />
          ) : null}

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {timetables.map((timetable, index) => (
              <div
                onMouseLeave={() =>
                  mouseLeave(`timetable-description-${index}`)
                }
                onMouseEnter={() =>
                  mouseEnter(`timetable-description-${index}`)
                }
                id=""
                onClick={() => handleViewTimetable(index)}
                className="cursor-pointer timetable z-[1] hover:animate-ring hover:shadow-lg w-11/12 m-1 sm:m-4 md:m-8 xl:m-10 timetable relative h-60 "
                key={index}
              >
                <div className="z-[2] w-full h-full absolute flex items-center justify-center">
                  <Image
                    src={timetable.imageUrl}
                    layout="fill"
                    alt={`${timetable.name}-image`}
                  />
                </div>
                <div
                  id={`timetable-description-${index}`}
                  className=" z-[3] w-full absolute flex sm:hidden top-0 left-0 items-end justify-center flex-col bg-gradient-to-t from-black  h-full "
                >
                  <div className="absolute  right-0 bottom-auto flex flex-col  items-center justify-center w-12 h-fit ">
                    <div
                      onClick={() => setEditTimetable(true)}
                      className="my-1 bg-ek-blue-75 flex items-center justify-center cursor-pointer text-white h-10 w-10 rounded-full hover:rotate-12"
                    >
                      <BiEdit size={23} />
                    </div>
                    <div
                      onClick={() => confirmDeletion(index)}
                      className="my-1 bg-delete-red flex items-center justify-center cursor-pointer text-white h-10 w-10 rounded-full hover:rotate-12"
                    >
                      <MdOutlineDelete size={23} />
                    </div>
                  </div>
                  <div className="w-full absolute bottom-1 flex mb-3 flex-col px-3">
                    <span className="text-white text-xl font-semibold">
                      {timetable.name}
                    </span>
                    <span className="text-white text-sm">
                      Last edited{timetable.lastEdited}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
