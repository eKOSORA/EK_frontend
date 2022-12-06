import Head from "next/head";
import React, { FormEvent, useEffect, useState } from "react";
import { Navbar } from "../../../components/Dashboard/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { TextField } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { ValidateEmail } from "../../../utils/comparer";
import { AddEducatorInterface } from "../../../types/educator";
import { useGetUserDetails } from "../../../hooks/auth";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("../../../components/Dashboard/Sidebar"));

const NewStudent = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false);
  const [formData, setFormData] = useState<AddEducatorInterface>({
    names: "",
    code: "",
    email: "",
    tel: "",
    title: [],
    subjects: [],
  });


  const handleAddSubject = (e: any) => {
    if (e.keyCode !== 13) return;
    const input = document.querySelector("#subject") as HTMLInputElement;
    const enteredSubject = input.value;
    if (!enteredSubject) return;

    input.value = "";
    setFormData({
      ...formData,
      subjects: [...formData.subjects, enteredSubject],
    });
  };

  const handleAddNewEducator = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!ValidateEmail(formData.email)) {
    }
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
        <title>Add Educator | eKOSORA</title>
      </Head>
      <Navbar
        page="Add Educator"
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className="w-full flex h-full items-start justify-start">
        {sideBarActive ? (
          <Sidebar page="educator" active="dashboard" />
        ) : null}
        <div
          className={`${
            sideBarActive ? "w-10/12" : "w-full"
          } flex flex-col items-center justify-start pt-[60px] h-fit sm:p-10`}
        >
          <div className="m-auto msm:border-2 w-full sm:w-[550px] border-ek-blue-75 rounded-xl p-10 mt-14 flex flex-col items-center justify-center">
            <span className="w-full text-center text-4xl heading-text text-ek-blue-50">
              Add Educator
            </span>
            <form
              onSubmit={handleAddNewEducator}
              className="mt-8 w-full flex-col flex items-center justify-center"
            >
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, names: e.target.value })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                label="Names"
                required={true}
                variant="outlined"
              />
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                label="Code/ID"
                required={true}
                variant="outlined"
              />
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                type={"number"}
                label="Email"
                required={true}
                variant="outlined"
              />
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, title: [e.target.value] })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                type={"text"}
                inputProps={{ maxLength: 1 }}
                label="Title"
                required={true}
                variant="outlined"
              />
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                label="Email"
                required={true}
                variant="outlined"
              />
              <div className="w-full flex items-center justify-center flex-col">
                <div className="Emails w-full flex flex-col">
                  {formData.subjects.map((subject: String) => (
                    <div
                      key={Math.floor(Math.random() * 100)}
                      className="w-fit py-[4px] my-1 flex items-center justify-between px-4 rounded-xl bg-ek-blue-75 text-white"
                    >
                      <span className="mr-3">{subject}</span>
                      <IoMdClose
                        onClick={() =>
                          setFormData({
                            ...formData,
                            subjects: formData.subjects.filter(
                              (subject: string) => subject !== subject
                            ),
                          })
                        }
                        size={25}
                        className="cursor-pointer rounded-full text-white hover:bg-white hover:text-ek-blue-50"
                      />
                    </div>
                  ))}
                </div>
                <TextField
                  type={"email"}
                  onKeyDown={handleAddSubject}
                  focused={true}
                  className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                  id={`subject`}
                  label="Subject(s)"
                  required={false}
                  placeholder="Add Subject"
                  variant="outlined"
                />
              </div>

              <button
                type="submit"
                className="w-full text-xl my-4 rounded py-2 bg-ek-blue-75 text-white font-questrial"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewStudent;
