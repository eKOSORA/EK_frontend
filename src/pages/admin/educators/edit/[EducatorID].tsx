import Head from "next/head";
import React, { FormEvent, useEffect, useState } from "react";
import { Navbar } from "../../../../components/Dashboard/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { EducatorObject } from "../../../../types/educator";
import { AllEducatorsDisplay } from "../../../../utils/faker";
import { useGetUserDetails } from "../../../../hooks/auth";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("../../../../components/Dashboard/Sidebar"));

const Index = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false);
  const router = useRouter();
  const { EducatorID } = router.query;

  const [formData, setFormData] = useState<EducatorObject>({
    code: "",
    email: "",
    firstName: "",
    IdNumber: "",
    lastName: "",
    lessons: [],
    telephone: "",
  });


  useEffect(() => {
    const educator = AllEducatorsDisplay.filter(
      (educator: EducatorObject) => educator.code === EducatorID
    )[0];
    setFormData(educator);
  }, [EducatorID]);

  const handleAddLesson = (e: any) => {
    if (e.keyCode !== 13) return;

    const input = document.querySelector("#lesson") as HTMLInputElement;
    const enteredLesson = input.value;
    if (!enteredLesson) return;

    input.value = "";
    setFormData({
      ...formData,
      lessons: [...formData.lessons, enteredLesson],
    });
  };

  const handleUpdateEducator = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(formData)
  };

  return (
    <div className="animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen">
      
      <Head>
        <title>Edit Educator | eKOSORA</title>
      </Head>
      <Navbar
        page="Edit Educator"
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className="w-full flex h-full items-start justify-start">
        {sideBarActive ? (
          <Sidebar page="educator" active="educators" />
        ) : null}
        <div
          className={`${
            sideBarActive ? "w-10/12" : "w-full"
          } flex flex-col items-center justify-start pt-[60px] h-fit sm:p-10`}
        >
          <div className="m-auto sm:border-2 w-full sm:w-[550px] border-ek-blue-75 rounded-xl p-2 sm:p-10 mt-14 flex flex-col items-center justify-center">
            <span className="w-full text-center text-4xl heading-text text-ek-blue-50">
              Edit Educator
            </span>
            <form
              onSubmit={handleUpdateEducator}
              className="mt-8 w-full flex-col flex items-center justify-center"
            >
              <TextField
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstName: e.target.value.split(" ")[0],
                    lastName: e.target.value.split(" ")[1] ? e.target.value.split(" ")[1] :"",
                  })
                }
                value={`${formData.firstName} ${formData.lastName}`}
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                label="Names"
                required={true}
                variant="outlined"
              />
              <TextField
                value={EducatorID}
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
                  setFormData({ ...formData, IdNumber: e.target.value })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                type={"number"}
                label="ID Number"
                required={true}
                value={formData.IdNumber}
                variant="outlined"
              />
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, telephone: e.target.value })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                type={"text"}
                inputProps={{ maxLength: 1 }}
                label="Telephone"
                required={true}
                variant="outlined"
                value={formData.telephone}
              />
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                focused={true}
                className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                id={`outlined-basic${Math.ceil(Math.random() * 10)}`}
                label="Email"
                value={formData.email}
                required={true}
                variant="outlined"
              />
              <div className="w-full flex items-center justify-center flex-col">
                <div className="Emails w-full flex flex-col">
                  {formData.lessons.map((email: String) => (
                    <div
                      key={Math.floor(Math.random() * 100)}
                      className="w-fit py-[4px] my-1 flex items-center justify-between px-4 rounded-xl bg-ek-blue-75 text-white"
                    >
                      <span className="mr-3">{email}</span>
                      <IoMdClose
                        onClick={() =>
                          setFormData({
                            ...formData,
                            lessons: formData.lessons.filter(
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
                  onKeyDown={handleAddLesson}
                  focused={true}
                  className="my-2 w-full bg-ek-blue-50/10 font-questrial"
                  id={`lesson`}
                  label="Lessons"
                  required={false}
                  placeholder="Add Lesson"
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
