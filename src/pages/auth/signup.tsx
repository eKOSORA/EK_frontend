import * as cloudinary from "cloudinary";
import {
  Autocomplete,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Auth/Navbar";
import { VscClose } from "react-icons/vsc";
import { AiFillEdit } from "react-icons/ai";
import CropModal from "../../components/Dashboard/Images/CropModal";
import Dropzone from "react-dropzone";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import _ from "lodash";
import { toast, ToastContainer } from "react-toastify";
import { uploadImage } from "../../hooks";
import { useRouter } from "next/router";
import { useCreateSchool } from "../../hooks/school";
import { AxiosResponse } from "axios";
import { CreateSchoolFormDataState } from "../../types/school";

const Signup: NextPage = () => {
  const [submitLoader, setSubmitLoader] = useState(false);
  const [formData, setFormData] = useState<CreateSchoolFormDataState>({
    initials: "",
    type: "",
    programme: [],
    address: {
      province: "",
      district: "",
      sector: "",
      cell: "",
      village: "",
    },
    head: "",
    moto: "",
    admin: {
      names: "",
      code: "",
      email: "",
      tel: "",
      password: "",
      showPassword: false,
    },
    previewURL: "",
    imageUrl: "",
    name: "",
    activeButton: false,
    previewImage: false,
  });
  const [cropMode, setCropMode] = useState<boolean>(false);
  const [step, setStep] = useState(1);
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    setSubmitLoader(true);
    e.preventDefault();
    if (
      !formData.name ||
      !formData.initials ||
      !formData.type ||
      !formData.programme ||
      !formData.head ||
      !formData.moto
    ) {
      toast.error("All fields must be filled", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (formData.previewURL) {

      const imageUrl = await uploadImage(formData.previewURL);
      if (!imageUrl) {
        setSubmitLoader(false)
        return toast.error("Image not uploaded try again", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      setFormData({ ...formData, imageUrl })
    }
    const data = await useCreateSchool({ formData });
    if (data.status) return router.push('/auth/login')
    toast.error((data.data as AxiosResponse)?.data.message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setSubmitLoader(false);
    setFormData({ ...formData, activeButton: false });
  };

  const handleChange =
    (prop: keyof CreateSchoolFormDataState) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [prop]: event.target.value });
      };

  const schoolTypes = [
    {
      name: "Government Aided",
      value: "government-aided",
    },
    {
      name: "Private",
      value: "private",
    },
    {
      name: "Fully Government",
      value: "government",
    },
  ];

  useEffect(() => {
    window.addEventListener("keydown", checkKeyPress);
  });

  function checkKeyPress(key: any) {
    if (key.keyCode === 39) {
      step === 4 ? setStep(4) : setStep(step + 1);
    } else if (key.keyCode === 37) {
      step === 1 ? setStep(1) : setStep(step - 1);
    }
  }

  const previewFile = () => {
    const file = document.querySelector("#logoImage") as HTMLInputElement;
    if (file.files) {
      const url = URL.createObjectURL(file.files[0]);
      setFormData({ ...formData, previewURL: url, previewImage: true });
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = document.querySelector("#logoImage") as HTMLInputElement;
    if (acceptedFiles.length > 0) {
      const url = URL.createObjectURL(acceptedFiles[0]);
      setFormData({ ...formData, previewURL: url, previewImage: true });
      if (file.files) file.files[0] = acceptedFiles[0];
    }
  };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      admin: {
        ...formData.admin,
        showPassword: !formData.admin.showPassword,
      },
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleGetLocation = async () => {
    const longitude = navigator.geolocation.getCurrentPosition(
      (position) => position.coords.longitude
    );
    const latitude = navigator.geolocation.getCurrentPosition(
      (position) => position.coords.latitude
    );

    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
  };
  return (
    <div className="z-1 w-screen h-screen bg-[#f0f0f0]  flex flex-col items-center justify-start">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {cropMode ? (
        <CropModal
          cropMode={cropMode}
          formData={formData}
          setCropMode={setCropMode}
          setFormData={setFormData}
        />
      ) : null}
      <Navbar page={"signup"} />
      <Head>
        <title>Signup | eKOSORA</title>
      </Head>
      <div className="w-full h-full flex flex-col sm10:flex-row items-center justify-center">
        <div className="steps flex sm10:mr-8 sm10:flex-col items-center justify-center">
          <div
            className={`h-16 w-1 my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step === 1 ? "bg-ek-blue" : "bg-ek-blue/20"
              }`}
          ></div>
          <div
            className={`h-16 w-1 my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step === 2 ? "bg-ek-blue" : "bg-ek-blue/20"
              }`}
          ></div>
          <div
            className={`h-16 w-1 my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step === 3 ? "bg-ek-blue" : "bg-ek-blue/20"
              }`}
          ></div>
          <div
            className={`h-16 w-1 my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step === 4 ? "bg-ek-blue" : "bg-ek-blue/20"
              }`}
          ></div>
        </div>
        <div className="w-11/12 my-0 mmsm:w-4/5 smm20:w-[600px] h-fit p-2 mmsm:p-8 rounded mmsm:border-2 border-ek-blue flex flex-col items-start justify-start">
          {step === 1 ? (
            <span className="text-2xl my-4 text-ek-blue questrialtext">
              Basic info
            </span>
          ) : step === 2 ? (
            <div className="flex items-center w-full justify-between">
              <span className="text-2xl my-4 text-ek-blue questrialtext">
                Whereabouts
              </span>
              <span
                onClick={handleGetLocation}
                className="underline text-ek-blue-75 cursor-pointer font-questrial"
              >
                Locate me
              </span>
            </div>
          ) : step === 3 ? (
            <span className="text-2xl my-4 text-ek-blue questrialtext">
              More about the school
            </span>
          ) : (
            <span className="text-2xl my-4 text-ek-blue questrialtext">
              Admin Information
            </span>
          )}
          <form
            method="POST"
            encType="multipart/form-data"
            className="w-full"
            onSubmit={handleSubmit}
          >
            {step === 1 ? (
              <div className="w-full h-fit flex flex-col">
                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.name}
                  className=" my-4 w-full text-lg"
                  label="School Name"
                  onChange={handleChange("name")}
                  focused={true}
                  required={true}
                  autoComplete="off"
                />

                <TextField
                  autoComplete="off"

                  value={formData.initials}
                  className=" my-4 w-full text-lg"
                  label="Short Form"
                  onChange={handleChange("initials")}
                  focused={true}
                  required={true}
                />

                <Autocomplete
                  id="combo-box-demo"
                  options={schoolTypes.map((type) => type.name)}
                  autoHighlight={true}
                  sx={{}}
                  onChange={(event, value) => {
                    console.log(value);
                    setFormData({
                      ...formData,
                      type: schoolTypes.filter((type) => type.name === value)[0]
                        .value as string,
                    });
                  }}
                  className="rounded border-ek-blue outlie outline-0 w-full my-4 "
                  renderInput={(params) => (
                    <TextField
                      className=""
                      value={formData.type}
                      required={true}
                      autoFocus={true}
                      focused={true}
                      {...params}
                      label="Type"
                    />
                  )}
                />

                <div className="w-full flex items-start sm10:items-center justify-center my-8">
                  <span className="text-lg text-ek-blue-50 font-questrial">
                    Programme
                  </span>
                  <div className="w-10/12 flex flex-col sm10:ml-0 ml-4 sm10:flex-row items-start sm10:items-center justify-around">
                    {/* <div className='w-11/12 sm10:w-1/2 flex items-center justify-around'> */}
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name="programme"
                        onChange={(e) => {
                          formData.programme.includes(e.target.value)
                            ? _.remove(
                              formData.programme,
                              (n) => n === e.target.value
                            )
                            : setFormData({
                              ...formData,
                              programme: [
                                ...formData.programme,
                                e.target.value,
                              ],
                            });
                        }}
                        value={"REB"}
                        id=""
                      />
                      <span className="text-lg text-black font-questrial">
                        REB
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name="programme"
                        onChange={(e) => {
                          formData.programme.includes(e.target.value)
                            ? _.remove(
                              formData.programme,
                              (n) => n === e.target.value
                            )
                            : setFormData({
                              ...formData,
                              programme: [
                                ...formData.programme,
                                e.target.value,
                              ],
                            });
                        }}
                        value={"WDA"}
                        id=""
                      />
                      <span className="text-lg text-black font-questrial">
                        WDA
                      </span>
                    </div>
                    {/* </div> */}
                    {/* <div className='w-11/12 sm10:w-1/2 flex items-center justify-around'> */}
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name="programme"
                        onChange={(e) => {
                          formData.programme.includes(e.target.value)
                            ? _.remove(
                              formData.programme,
                              (n) => n === e.target.value
                            )
                            : setFormData({
                              ...formData,
                              programme: [
                                ...formData.programme,
                                e.target.value,
                              ],
                            });
                        }}
                        value={"Cambridge"}
                        id=""
                      />
                      <span className="text-lg text-black font-questrial">
                        Cambridge
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        name="programme"
                        onChange={(e) => {
                          formData.programme.includes(e.target.value)
                            ? _.remove(
                              formData.programme,
                              (n) => n === e.target.value
                            )
                            : setFormData({
                              ...formData,
                              programme: [
                                ...formData.programme,
                                e.target.value,
                              ],
                            });
                        }}
                        value={"Other"}
                        id=""
                      />
                      <span className="text-lg text-black font-questrial">
                        Other
                      </span>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            ) : step === 2 ? (
              <div className="w-full flex flex-col">
                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.address.province}
                  className=" my-4 w-full text-lg"
                  label="Province"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: {
                        ...formData.address,
                        province: e.target.value,
                      },
                    })
                  }
                  focused={true}
                  required={true}
                  autoComplete="off"
                />

                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.address.district}
                  className=" my-4 w-full text-lg"
                  label="District"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: {
                        ...formData.address,
                        district: e.target.value,
                      },
                    })
                  }
                  focused={true}
                  required={true}
                  autoComplete="off"
                />

                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.address.sector}
                  className=" my-4 w-full text-lg"
                  label="Sector"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, sector: e.target.value },
                    })
                  }
                  focused={true}
                  required={true}
                  autoComplete="off"
                />

                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.address.cell}
                  className=" my-4 w-full text-lg"
                  label="Cell"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, cell: e.target.value },
                    })
                  }
                  focused={true}
                  required={true}
                  autoComplete="off"
                />

                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.address.village}
                  className=" my-4 w-full text-lg"
                  label="Village"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, village: e.target.value },
                    })
                  }
                  focused={true}
                  required={true}
                  autoComplete="off"
                />
              </div>
            ) : step === 3 ? (
              <div className="w-full flex flex-col">
                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.head}
                  className=" my-4 w-full text-lg"
                  label="Head Master"
                  onChange={handleChange("head")}
                  focused={true}
                  required={true}
                  autoComplete="off"
                />

                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.moto}
                  className=" my-4 w-full text-lg"
                  label="Moto"
                  onChange={handleChange("moto")}
                  focused={true}
                  required={true}
                  autoComplete="off"
                />
                <div className="relative w-full my-4 text-lg rounded flex items-center justify-center border-2 border-[#1976d2] h-72">
                  <span className="z-[1] absolute -top-[15px] left-2  border-b-2 border-b-white text-[13px] text-[#1976d2] h-[15px] text-center w-12 roboto">
                    Logo *
                  </span>
                  {formData.previewImage ? (
                    <div className="relative w-full flex items-center justify-around h-full">
                      <div className="absolute top-2 right-2 flex items-center justify-center flex-row z-[1]">
                        {/* <button className={`p-2 bg-ek-blue-75 flex text-white mx-2 cursor-pointer items-center justify-center  rounded my-2 text-lg submitButton`} onClick={() => setCropMode(true)} type="button" title={"Crop Image"}><BiCrop /></button> */}
                        <label
                          htmlFor="logoImage"
                          className={`text-center flex items-center justify-center p-2 bg-ek-blue-75 text-white mx-2 cursor-pointer  rounded my-2 text-lg submitButton`}
                          title={"Change Image"}
                        >
                          <AiFillEdit />
                        </label>
                        <button
                          className={`p-2 bg-ek-blue-75 flex text-white mx-2 cursor-pointer items-center justify-center  rounded my-2 text-lg submitButton`}
                          type="button"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              previewURL: "",
                              previewImage: false,
                            });
                          }}
                          title={"Remove Image"}
                        >
                          <VscClose />
                        </button>
                      </div>
                      <div className="w-2/3 h-2/3 relative flex items-center justify-center rounded">
                        <Image
                          alt={"Logo image string"}
                          objectFit="contain"
                          layout="fill"
                          className="w-full h-full"
                          src={formData.previewURL as string}
                        ></Image>
                      </div>
                    </div>
                  ) : (
                    <Dropzone
                      accept={{ "image/*": [] }}
                      onDrop={onDrop}
                      multiple={false}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div
                          {...getRootProps({ className: "dropzone" })}
                          className="w-full h-full"
                        >
                          <label
                            htmlFor="logoImage"
                            className="w-full h-full flex flex-col items-center justify-center"
                          >
                            <Image
                              alt="Drag images image"
                              width={200}
                              height={100}
                              src={"/img/dragImages.svg"}
                            ></Image>
                            <span className="text-lg text-ek-blue-50 font-questrial">
                              Drop file here
                            </span>
                          </label>
                          <input
                            {...getInputProps()}
                            onChange={previewFile}
                            type="file"
                            className="logo hidden"
                            name="logo"
                            id="logoImage"
                          />
                        </div>
                      )}
                    </Dropzone>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col">
                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.admin.names}
                  placeholder={formData.head}
                  className=" my-4 w-full text-lg"
                  label="Names"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      admin: { ...formData.admin, names: e.target.value },
                    });
                  }}
                  focused={true}
                  required={true}
                  autoComplete="off"
                  id="admin"
                />

                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.admin.code}
                  className=" my-4 w-full text-lg"
                  label="Code"
                  placeholder={`${formData.initials}0001EDU`}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      admin: { ...formData.admin, code: e.target.value },
                    });
                  }}
                  focused={true}
                  required={true}
                  autoComplete="off"
                  id="adminCode"
                />

                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.admin.email}
                  className=" my-4 w-full text-lg"
                  label="Email"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      admin: { ...formData.admin, email: e.target.value },
                    });
                  }}
                  focused={true}
                  required={true}
                  autoComplete="off"
                />

                <TextField
                  InputProps={{
                    style: { color: "black" },
                  }}
                  value={formData.admin.tel}
                  className=" my-4 w-full text-lg"
                  label="Telephone"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      admin: { ...formData.admin, tel: e.target.value },
                    });
                  }}
                  focused={true}
                  type={"number"}
                  required={true}
                  autoComplete="off"
                />

                <FormControl
                  sx={{ width: "100%" }}
                  className="my-2"
                  focused={true}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={formData.admin.showPassword ? "text" : "password"}
                    value={formData.admin.password}
                    onChange={(e: any) => {
                      setFormData({
                        ...formData,
                        admin: { ...formData.admin, password: e.target.value },
                      });
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          className="text-[#4ca7ce]"
                        >
                          {formData.admin.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
            )}
            <div className="flex items-end justify-end mt-8">
              <button
                className={` mx-2 ${step === 1
                  ? "cursor-not-allowed text-ek-blue-75/50 "
                  : " text-ek-blue-75  cursor-pointer"
                  } w-32 h-12 rounded text-lg`}
                type="button"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                BACK
              </button>

              {step === 4 ? (
                submitLoader ? (
                  <button
                    className={`m-auto bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded text-lg submitButton`}
                    type="button"
                  >
                    <CircularProgress color="inherit" size={25} />
                  </button>
                ) : (
                  <button
                    className={`bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded text-lg submitButton`}
                    type="submit"
                  >
                    FINISH
                  </button>
                )
              ) : (
                <button
                  className={`bg-ek-blue-75 text-white mx-2 cursor-pointer w-32 h-12 rounded text-lg submitButton`}
                  type="button"
                  onClick={() => {
                    setStep(step + 1);
                  }}
                >
                  NEXT
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
