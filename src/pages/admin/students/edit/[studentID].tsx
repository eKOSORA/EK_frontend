import Head from "next/head";
import React, { FormEvent, useEffect, useState } from "react";
import { Navbar } from "../../../../components/Dashboard/Navbar";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { ValidateEmail } from "../../../../utils/comparer";
import { useGetUserDetails } from "../../../../hooks/auth";

const Index = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false);
  const router = useRouter();
  const { studentID } = router.query;

  const [formData, setFormData] = useState({
    names: "",
    code: "",
    class: "",
    email: "",
    parentEmails: ["precieuxmugisha@gmail.com"],
    year: 1,
  });

  const handleAddParent = (e: any) => {
    if (e.keyCode !== 13) return;
    if (formData.parentEmails.length === 3)
      return toast.error(
        "A child can't have more than three registered parent emails",
        {
          position: "bottom-center",
          autoClose: 5000,
          draggable: true,
          hideProgressBar: true,
          theme: "colored",
        }
      );

    const input = document.querySelector("#parent-email") as HTMLInputElement;
    const enteredMail = input.value;
    if (!enteredMail) return;
    //console.log("Key Pressed")
    if (!ValidateEmail(enteredMail)) {
      toast.error("Invalid email entered", {
        position: "bottom-center",
        autoClose: 5000,
        draggable: true,
        hideProgressBar: true,
        theme: "colored",
      });
      return;
    }
    input.value = "";
    setFormData({
      ...formData,
      parentEmails: [...formData.parentEmails, enteredMail],
    });
  };

  const handleUpdateStudent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(formData)
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
        <title>Edit Student | eKOSORA</title>
      </Head>
      <Navbar
        page="Edit Student"
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className="w-full flex h-full items-start justify-start">
        {sideBarActive ? (
          <Sidebar page="educator" active="students" />
        ) : null}
        <div
          className={`${sideBarActive ? "w-10/12" : "w-full"
            } flex flex-col items-center justify-start pt-[60px] h-fit p-10`}
        >
          <div className="m-auto border-2 w-[550px] border-ek-blue-75 rounded-xl p-10 mt-14 flex flex-col items-center justify-center">
            <span className="w-full text-center text-4xl heading-text text-ek-blue-50">
              Edit Student
            </span>
            <form
              onSubmit={handleUpdateStudent}
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
                value={studentID}
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
                  setFormData({ ...formData, year: parseInt(e.target.value) })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                type={"number"}
                label="Year"
                required={true}
                variant="outlined"
              />
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, class: e.target.value })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                type={"text"}
                inputProps={{ maxLength: 1 }}
                label="Class"
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
                  {formData.parentEmails.map((email: String) => (
                    <div
                      key={Math.floor(Math.random() * 100)}
                      className="w-7/12 py-[4px] my-1 flex items-center justify-between px-4 rounded-xl bg-ek-blue-75 text-white"
                    >
                      <span>{email}</span>
                      <IoMdClose
                        onClick={() =>
                          setFormData({
                            ...formData,
                            parentEmails: formData.parentEmails.filter(
                              (mail) => mail !== email
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
                  onKeyDown={handleAddParent}
                  focused={true}
                  className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                  id={`parent-email`}
                  label="Parent Email(s)"
                  required={false}
                  placeholder="Add Parent Email"
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

export default Index;
