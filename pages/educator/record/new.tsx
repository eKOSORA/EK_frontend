import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Dashboard/Navbar";
import Sidebar from "../../../components/Dashboard/Sidebar";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { courses } from "../../../utils/marks";
import { useGetUserDetails } from "../../../hooks/auth";


const NewRecord = () => {
  const [sideBarActive, setSideBarActive] = useState(false);
  const [formData, setFormData] = useState({
    class: "",
    recordName: "",
    course: "",
    maximumMarks: "",
    isReversed: false,
    date: "",
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
  const handeSubmit = (e: any) => {
    e.preventDefault();
    //console.log(formData)
  };
  interface State {
    class: string;
    recordName: string;
    course: string;
    maximumMarks: string;
    isReversed: boolean;
    date: string;
  }
  const handleChange = (prop: keyof State) => (event: any) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  return (
    <div className="bg-[#f0f0f0] min-h-screen">
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
        <title>New Record | Teacher Dashboard | eKOSORA</title>
      </Head>
      <Navbar
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className="w-full flex h-full items-start justify-start">
        {sideBarActive ? (
          <Sidebar page="educator" user={user} active="dashboard" />
        ) : null}
        <div
          className={`${
            sideBarActive ? "w-10/12" : "w-full"
          } flex flex-col items-center justify-center pt-[60px] h-fit p-10`}
        >
          <div className="p-10 w-[550px] rounded border-2 border-ek-blue-50 mt-16">
            <span className="my-8 text-center w-full flex items-center justify-center text-4xl text-ek-blue heading-text">
              New Record
            </span>
            <form
              className="w-full h-full flex flex-col items-center justify-center"
              onSubmit={handeSubmit}
            >
              <FormControl className="my-4" fullWidth>
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select
                  className="bg-ek-blue/10"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.class}
                  label="Course"
                  onChange={handleChange("class")}
                  autoFocus={true}
                  MenuProps={{ disablePortal: true }}
                >
                  <MenuItem value={""} className="italic">
                    None
                  </MenuItem>
                  <MenuItem value={"year1"} className="">
                    Year 1
                  </MenuItem>
                  <MenuItem value={"year2"} className="">
                    Year 2
                  </MenuItem>
                  <MenuItem value={"year3"} className="">
                    Year 3
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                onChange={(e) => {
                  setFormData({ ...formData, recordName: e.target.value });
                }}
                type="text"
                focused={true}
                className="w-full bg-ek-blue/10"
                id="outlined-basic"
                label="Record Name"
                variant="outlined"
              />
              <FormControl className="my-4" fullWidth>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                  className="bg-ek-blue/10"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.course}
                  label="Course"
                  onChange={handleChange("course")}
                  autoFocus={true}
                  MenuProps={{ disablePortal: true }}
                >
                  <MenuItem value={""} className="italic">
                    None
                  </MenuItem>
                  {courses.map((course) => (
                    <MenuItem
                      key={Math.random()}
                      value={course.value}
                      className=""
                    >
                      {course.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                onChange={(e) => {
                  setFormData({ ...formData, maximumMarks: e.target.value });
                }}
                focused={true}
                type="number"
                className="w-full bg-ek-blue/10"
                id="outlined-basic"
                label="Maximum marks"
                variant="outlined"
              />
              <div className="text-black w-full flex items-center justify-center">
                <input
                  type="checkbox"
                  className="mr-4"
                  checked={formData.isReversed}
                  onChange={() => {
                    setFormData({
                      ...formData,
                      isReversed: !formData.isReversed,
                    });
                  }}
                  id=""
                />
                <span className="text-lg my-4 font-questrial text-gray-500">
                  Reversed (starts from the max going downwards)
                </span>
              </div>
              <input
                type="date"
                onChange={(e) => {
                  setFormData({ ...formData, date: e.target.value });
                }}
                className="my-4 w-full bg-ek-blue/10 outline-0 py-4 px-8 border-2 border-ek-blue rounded"
                id=""
              />
              <button
                className="w-full bg-ek-blue-75 text-white text-center font-questrial py-4 px-8"
                type="submit"
              >
                ADD RECORD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRecord;
