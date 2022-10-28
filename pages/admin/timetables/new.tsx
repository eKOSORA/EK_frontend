import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Dashboard/Navbar";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import {
  EditModeObject,
  HourObject,
  LessonInTimeTableObject,
  LessonObject,
  TimeTableObject,
} from "../../../utils/interfaces/timetables";
import { TextField } from "@mui/material";
import { BiX } from "react-icons/bi";
import { useDrag, useDrop } from "react-dnd";
import { useAuth } from "../../../Context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import LessonBox from "../../../components/Dashboard/admin/LessonBox";
import _ from "lodash";
import { confirmCancellation } from "../../../utils/Functions/alerts";
import { generateTimetable } from "../../../templates/timetable";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";
import * as dateFns from "date-fns";

const NewTimeTable = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false);
  const { user }: any = useAuth();
  const [hours, setHours] = useState<Array<HourObject>>([]);
  const [hour, setHour] = useState<HourObject>({
    id: uuidv4(),
    from: "",
    to: "",
    toPicker: "",
    fromPicker: "",
  });
  const [lessons, setLessons] = useState<Array<LessonObject>>([
    {
      id: uuidv4(),
      educator: "Jean Damascene Habanabashaka",
      name: "Data Structures and Algorithms",
      initial: "DSA",
      numberofHours: 5,
    },
    {
      id: uuidv4(),
      educator: "Rwagaju Aphrodice",
      name: "OOP with JAVA",
      initial: "OOP",
      numberofHours: 5,
    },
    {
      id: uuidv4(),
      educator: "NSABYIMANA Egide",
      name: "English and General Studies",
      initial: "ENG",
      numberofHours: 5,
    },
    {
      id: uuidv4(),
      educator: "Jean De Dieu",
      name: "Physics",
      initial: "PHY",
      numberofHours: 5,
    },
    {
      id: uuidv4(),
      educator: "HATANGIMBABAZI HIlaire",
      name: "System Analysis and Design",
      initial: "SAD",
      numberofHours: 5,
    },
    {
      id: uuidv4(),
      educator: "BAZIRAMWABO Gabriel",
      name: "Embedded Systems and Robotics",
      initial: "ESR",
      numberofHours: 5,
    },
    {
      id: uuidv4(),
      educator: "HABANABASHAKA Jean Damascene",
      name: "Web Services",
      initial: "WS",
      numberofHours: 5,
    },
    {
      id: uuidv4(),
      educator: "Jean Damascene Habanabashaka",
      name: "Advanced Database",
      initial: "AD",
      numberofHours: 5,
    },
    {
      id: uuidv4(),
      educator: "NGABO",
      name: "Advanced Networking",
      initial: "AN",
      numberofHours: 5,
    },
    {
      id: uuidv4(),
      educator: "Uwitonze Jean Bosco",
      name: "Mathematics",
      initial: "MTC",
      numberofHours: 5,
    },
  ]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "lesson",
    drop: (item: LessonObject) => addLessonToTimetable(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [editHourMode, setEditHourMode] = useState<EditModeObject>({
    state: false,
    index: undefined,
  });
  const [viewTableMode, setViewTableMode] = useState(false);
  const [timetable, setTimeTable] = useState<TimeTableObject>({
    name: "",
    days: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
  });

  const addLessonToTimetable = (id: string) => {
    setTimeTable({
      ...timetable,
    });
    console.log("Dragged over");
  };

  const generateTable = () => {
    setViewTableMode(!viewTableMode);
  };

  const handleCancelCreateTimeTableSession = () => {
    confirmCancellation(
      "Your timetable creation session has been cancelled",
      "/admin/educators"
    );
  };

  const exportPDF = () => {
    if (!timetable.name) {
      toast.error("Timetable name cannot be empty!!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    const input = document.getElementById("timetable") as HTMLElement;
    html2canvas(input, { logging: true, useCORS: true }).then((canvas) => {
      const imgWidth = 290;
      const imgHeight = 210;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("l", "mm", "a4");
      pdf.addImage(imgData, "PNG", 5, 5, imgWidth, imgHeight);
      pdf.save(`${timetable.name}`);
    });
  };

  useEffect(() => {
    setTimeTable({
      ...timetable,
      days: {
        monday: timetable.days.monday.concat([
          { educator: "", from: hour.from, to: hour.to, initial: "", name: "" },
        ]),
        tuesday: timetable.days.tuesday.concat([
          { educator: "", from: hour.from, to: hour.to, initial: "", name: "" },
        ]),
        wednesday: timetable.days.wednesday.concat([
          { educator: "", from: hour.from, to: hour.to, initial: "", name: "" },
        ]),
        thursday: timetable.days.thursday.concat([
          { educator: "", from: hour.from, to: hour.to, initial: "", name: "" },
        ]),
        friday: timetable.days.friday.concat([
          { educator: "", from: hour.from, to: hour.to, initial: "", name: "" },
        ]),
        saturday: timetable.days.saturday.concat([
          { educator: "", from: hour.from, to: hour.to, initial: "", name: "" },
        ]),
        sunday: timetable.days.sunday.concat([
          { educator: "", from: hour.from, to: hour.to, initial: "", name: "" },
        ]),
      },
    });
    console.log(hours);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours]);

  const addHour = () => {
    setHours([...hours, hour]);
    const fromElement = document.querySelector("#from") as HTMLInputElement;
    const toElement = document.querySelector("#to") as HTMLInputElement;

    fromElement.value = "";
    toElement.value = "";
    setHour({
      id: uuidv4(),
      from: hour.to,
      to: "",
      fromPicker: hour.toPicker,
      toPicker: "",
    });
  };

  const populateEditables = (passedHour: HourObject, index: number) => {
    hour.from = passedHour.from;
    hour.to = passedHour.to;
    setEditHourMode({
      state: true,
      index: index,
    });
  };

  useEffect(() => {
    const tdAll = document.querySelectorAll("td");
    tdAll.forEach((td) => {
      td?.addEventListener("dragenter", () => {
        console.log("Dragged over");
      });
    });
  }, []);

  return (
    <div
      id="target"
      className="text-black animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen"
    >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
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
          } flex flex-col items-center justify-start pt-[60px] h-fit px-1 sm:p-10`}
        >
          <span className="w-full text-center heading-text my-6 mt-14 text-3xl text-ek-blue ">
            Create timetable
          </span>
          <div className="w-full flex md:flex-row flex-col items-start justify-center">
            <div className="w-full lg:w-6/12 flex flex-col items-start sm:px-4 py-3 ">
              <div className="w-full mb-4 sm:w-2/3 md:w-full flex md:flex-row flex-col items-center justify-center md:justify-between">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={hour.fromPicker}
                    label="From"
                    ampm={false}
                    onChange={(newValue) => {
                      setHour({
                        ...hour,
                        fromPicker: newValue as string,
                        from: dayjs(newValue).format("h:mm"),
                      });
                    }}
                    className="ml-0 w-full my-6 md:w-5/12  mx-4"
                    renderInput={(params) => (
                      <TextField id="from" focused={true} {...params} />
                    )}
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={hour.toPicker}
                    label="TO"
                    ampm={false}
                    onChange={(newValue) => {
                      setHour({
                        ...hour,
                        toPicker: newValue as string,
                        to: dayjs(newValue).format("h:mm"),
                      });
                    }} //
                    className="ml-0 w-full my-6 md:w-5/12  mx-4"
                    renderInput={(params) => (
                      <TextField id="to" focused={true} {...params} />
                    )}
                  />
                </LocalizationProvider>

                <button
                  disabled={hour.from && hour.to ? false : true}
                  className={
                    "px-4 w-full md:w-fit my-4 bg-ek-blue-75 text-white py-2 rounded"
                  }
                  onClick={addHour}
                >
                  ADD
                </button>
              </div>
              <div className="w-full flex flex-col">
                <TextField
                  onChange={(e) =>
                    setTimeTable({ ...timetable, name: e.target.value })
                  }
                  className="w-full"
                  placeholder="eg: Year 1's Timetable Term 1"
                  focused={true}
                  label="Timetable name"
                />
                <span className="my-3 font-questrial text-xs text-ek-blue">
                  NB: It is advisable to use descriptive names for the
                  timetables.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start h-full  py-4 w-full px-2 md:px-12 md:w-6/12">
              <span className="w-full text-start heading-text my-3 text-2xl text-ek-blue mb-4">
                Lessons
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                {lessons.map((lesson, index) => (
                  <LessonBox key={index} lesson={lesson} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3  my-12 sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 w-2/3">
            {hours.map((hour, index) => {
              return (
                <div
                  onClick={() => populateEditables(hour, index)}
                  key={index}
                  className="my-2 relative px-4 mx-2 cursor-pointer hover:animate-ring rounded font-xl heading-text py-3 login-options text-center bg-ek-blue-50/10 text-ek-blue-50 "
                >
                  <span>
                    {hour.from}-{hour.to}
                  </span>
                  <BiX
                    onClick={() => _.pullAt(hours, index)}
                    className="absolute right-1 hover:text-white hover:bg-ek-blue-75 rounded-full top-1"
                  />
                </div>
              );
            })}
          </div>

          {hours.length ? (
            <div className="flex flex-col sm:flex-row mmsm:grid grid-cols-2 sm:flex w-4/5 md:w-3/5 my-8 items-center justify-around">
              <button
                className="w-11/12 my-2  sm:w-fit bg-ek-blue-75 text-white text-xl cursor-pointer px-4 py-3 rounded"
                onClick={generateTable}
              >
                {viewTableMode ? "Hide Preview" : "Show Preview"}
              </button>
              <button
                onClick={handleCancelCreateTimeTableSession}
                className="w-11/12 my-2  sm:w-fit rounded bg-ek-blue-75 text-white font-questrial px-4 py-3 text-xl"
              >
                Cancel
              </button>

              <button
                onClick={() => exportPDF()}
                className="w-11/12 my-2  sm:w-fit rounded bg-ek-blue-75 text-white font-questrial px-4 py-3 text-xl"
              >
                Download
              </button>
            </div>
          ) : null}
          {viewTableMode && hours.length ? (
            <div
              id="timetable"
              className="overflow-x-auto bg-white p-8 rounded my-6 h-fit flex flex-col items-start justify-center w-full"
            >
              <div className="w-full flex items-start justify-between">
                <div className="w-1/2">
                  <div className="flex items-start justify-start">
                    <div className="relative">
                      <Image
                        src={"/img/index.jpeg"}
                        alt={""}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div className="flex flex-col  mt-4 ml-3">
                      <span className="heading-text text-black font-bold text-2xl">
                        Rwanda Coding Academy
                      </span>
                      <span className="italic my-2 font-questrial">
                        &quot; Born to Code &quot;
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col items-end h-full justify-end">
                  <span>P.O Box 42324</span>
                  <span>Nyabihu, Rwanda</span>
                  <span>0782307144</span>
                  <span>contact@rca.rw</span>
                  <span>www.rca.ac.rw</span>
                </div>
              </div>
              <div className="w-full text-center text-2xl heading-text py-4">
                <span className="my-4 mb-8">{timetable.name}</span>
              </div>
              <table border={1} className="w-full">
                <thead>
                  <tr className="text-white bg-ek-blue-75 px-4 py-4 text-start">
                    <td className="w-40 px-4 text-start">Days</td>
                    {hours.map((hour, index) => {
                      return (
                        <td className="" key={index}>
                          {hour.from}-{hour.to}
                        </td>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="">
                  {[
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "friday",
                    "saturday",
                    "sunday",
                  ].map((day: string, index: number) => {
                    return (
                      <tr className="" key={index}>
                        <td className="w-40 text-white bg-ek-blue-75 border-t-2 border-white/20 px-4">
                          {day.toUpperCase()}
                        </td>
                        {Object.values(timetable.days).map(
                          (subject: LessonInTimeTableObject, index: number) => (
                            // timetable[day].map((subject: LessonInTimeTableObject, index: number) => (
                            <td
                              ref={drop}
                              className={`${
                                isOver ? "bg-ek-blue/20" : ""
                              } text-[#161616] border-b-2 border-r-2`}
                              key={index}
                            >
                              {subject.initial}
                            </td>
                          )
                        )}
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot></tfoot>
              </table>
              <div className="w-full flex items-center justify-center">
                <div className="w-1/2 flex items-center justify-start">
                  <span>
                    <span className="font-bold">NB: </span>
                    No student is allowed to be out of class during lesson times
                    without an <strong>unspecified</strong> reason.
                  </span>
                </div>
                <div className="my-12 w-1/2 px-6 flex flex-col items-end justify-end">
                  <div className="flex flex-col items-end justify-end">
                    Done by NSABYIMANA Egide
                  </div>
                  <div className="relative my-8 flex flex-col">
                    <span className="absolute right-auto left-auto rotate-12">
                      Signature
                    </span>
                    <span className="-rotate-12">Signature</span>
                  </div>
                  <div>{dateFns.format(Date.now(), "MMMM do yyyy")}</div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NewTimeTable;
