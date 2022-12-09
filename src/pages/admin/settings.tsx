import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useGetUserDetails } from "../../hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import UserProfileSkeleton from "../../components/skeleton/UserProfileSkeleton";

const Settings = () => {
    const [sideBarActive, setSideBarActive] = useState(false);
    const [user, setUser] = useState({
        
    })
    const [formData, setFormData] = useState({
        editMode: false,
        password: "password@gmail.com",
        email: "damascene10@gmail.com",
        code: "001",
        names: "Jean Damascene HABANABASHAKA",
        telephone: "+250782307144",
        title: "unknown",
        subjects: ["PHP", "WUI", "FOD"],
        showPassword: false,
        profileImageStr:''
    });
    const [loading, setLoading] = useState(true)
    const userSlice = useSelector((state: any) => state.userSlice);
    const getUser = () => {
        try {
            setUser(userSlice.user)
            console.log(userSlice.user);
            setTimeout(()=>{
                setLoading(false)
            },3000)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    interface State {
        name: string;
        email: string;
        telephone: string;
        password: boolean;
    }

    const handleChange = (prop: keyof State) => (event: any) => {
        setFormData({ ...formData, [prop]: event.target.value });
    };

    const previewFile = () => {
        const reader = new FileReader();
        const file = document.querySelector(
            "#profileImageUpload"
        ) as HTMLInputElement;
        reader.addEventListener("loadend", () => setFormData({ ...formData, profileImageStr: reader.result as string }));
        if (file.files) {
            reader.readAsDataURL(file.files[0]);
        }
    };

    const handleChangeSettings = (e: any) => {
        e.preventDefault();
        setFormData({ ...formData, editMode: !formData.editMode });
    };

    return (
        <div className="bg-[#f0f0f0] min-h-screen text-black">
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
                <title>Settings | Teacher Dashboard | eKOSORA</title>
            </Head>
            <Navbar
                page="Settings"
                sideBarActive={sideBarActive}
                setSideBarActive={setSideBarActive}
            />
            <div className="w-full flex h-full items-start justify-start">
                {sideBarActive ? (
                    <Sidebar page="educator" active="settings" />
                ) : null}
                <div
                    className={`${sideBarActive ? "w-10/12" : "w-full"
                        } flex flex-col items-center justify-center pt-[60px] h-fit p-10`}
                >
                    {
                        loading ?
                            <UserProfileSkeleton />
                            :
                            <div className="neumorphism p-5 rounded max-w-[900px]  mt-8  min-h-[300px] flex items-center w-11/12">
                                <div className="relative profileImage mr-10 w-[250px] h-[250px] flex items-center justify-center">
                                    <Image
                                        alt=""
                                        onMouseEnter={() => {
                                            document
                                                .querySelector("#profileImageUploadLabel")
                                                ?.classList.replace("hidden", "flex");
                                        }}
                                        onMouseLeave={() => {
                                            document
                                                .querySelector("#profileImageUploadLabel")
                                                ?.classList.replace("flex", "hidden");
                                        }}
                                        width={250}
                                        height={250}
                                        src={(user as any).profile ? (user as any).profile :"http://res.cloudinary.com/dyrneab5i/image/upload/v1647457738/tpkcgy3l9penta3gwb3a.png"}
                                        className="object-cover rounded-full"
                                    ></Image>
                                    <label
                                        htmlFor="profileImageUpload"
                                        id="profileImageUploadLabel"
                                        title="Change you profile image"
                                        className="cursor-pointer absolute top-0 left-0 w-full h-full rounded-full hidden items-center justify-center text-white bg-black/50"
                                    >
                                        {" "}
                                        <span>Change Profile</span>{" "}
                                    </label>
                                </div>
                                <div className="w-8/12 flex flex-col flex-grow">
                                    <form
                                        onSubmit={handleChangeSettings}
                                        className="w-full flex flex-col items-start justify-center"
                                    >
                                        <input
                                            onChange={previewFile}
                                            type="file"
                                            name="profileImageUpload"
                                            id="profileImageUpload"
                                            className="hidden"
                                        />
                                        <div className="w-full flex items-center justify-center mb-1 flex-wrap">
                                            <h3 className="font-questrial font-semibold text-lg w-[100px]">
                                                Names:{" "}
                                            </h3>
                                            {formData.editMode ? (
                                                <TextField
                                                    onChange={handleChange("name")}
                                                    label="Name"
                                                    variant="outlined"
                                                    focused={true}
                                                    id="outlined-basic1"
                                                    size="small"
                                                    value={(user as any).names}
                                                    className="bg-ek-blue/10 ml-2.5 py-[7px] px-[15px] text-base flex-grow"
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    value={(user as any).names}
                                                    className="bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                                                    readOnly={true}
                                                />
                                            )}
                                        </div>
                                        <div className="w-full flex items-center justify-center mb-1 flex-wrap">
                                            <h3 className="font-questrial font-semibold text-lg w-[100px]">
                                                Code:{" "}
                                            </h3>
                                            <input
                                                type="number"
                                                value={formData.code}
                                                className="bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                                                readOnly={true}
                                            />
                                        </div>
                                        <div className="w-full flex items-center justify-center mb-1 flex-wrap">
                                            <h3 className="font-questrial font-semibold text-lg w-[100px]">
                                                Tel:{" "}
                                            </h3>
                                            {formData.editMode ? (
                                                <TextField
                                                    onChange={handleChange("telephone")}
                                                    label="Telephone"
                                                    variant="outlined"
                                                    focused={true}
                                                    id="outlined-basic2"
                                                    size="small"
                                                    value={(user as any).tel}
                                                    className="bg-ek-blue/10 ml-2.5 py-[7px] px-[15px] text-base flex-grow"
                                                />
                                            ) : (
                                                <input
                                                    type={"tel"}
                                                    value={(user as any).tel}
                                                    className="bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                                                    readOnly={true}
                                                />
                                            )}
                                        </div>
                                        <div className="w-full flex items-center justify-center mb-1 flex-wrap">
                                            <h3 className="font-questrial font-semibold text-lg w-[100px]">
                                                Title:{" "}
                                            </h3>
                                            <input
                                                type="text"
                                                value={(user as any).title.map((str:string)=>`${str}`)}
                                                className="bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                                                readOnly={true}
                                            />
                                        </div>
                                        <div className="w-full flex items-center justify-center mb-1 flex-wrap">
                                            <h3 className="font-questrial font-semibold text-lg w-[100px]">
                                                Email:{" "}
                                            </h3>
                                            {formData.editMode ? (
                                                <TextField
                                                    onChange={handleChange("email")}
                                                    label="Email"
                                                    variant="outlined"
                                                    focused={true}
                                                    id="outlined-basic3"
                                                    size="small"
                                                    value={formData.email}
                                                    className="bg-ek-blue/10 ml-2.5 py-[7px] px-[15px] text-base flex-grow"
                                                />
                                            ) : (
                                                <input
                                                    type="email"
                                                    value={(user as any).email}
                                                    className="bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                                                    readOnly={true}
                                                />
                                            )}
                                        </div>
                                        <div className="w-full flex items-center justify-center mb-1 flex-wrap">
                                            <h3 className="font-questrial font-semibold text-lg w-[100px]">
                                                Lessons:{" "}
                                            </h3>
                                            <input
                                                type="text"
                                                value={formData.subjects.map((lesson: string) => `${lesson}`)}
                                                className="bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                                                readOnly={true}
                                            />
                                        </div>
                                        <div className="w-full flex items-center justify-center mb-1 flex-wrap">
                                            <h3 className="font-questrial font-semibold text-lg w-[100px]">
                                                Password:{" "}
                                            </h3>
                                            {formData.editMode ? (
                                                <TextField
                                                    type={formData.showPassword ? "text" : "password"}
                                                    label="Password"
                                                    variant="outlined"
                                                    focused={true}
                                                    id="outlined-basic4"
                                                    onChange={handleChange("password")}
                                                    size="small"
                                                    value={formData.password}
                                                    className="bg-ek-blue/10 ml-2.5 py-[7px] px-[15px] text-base flex-grow"
                                                />
                                            ) : (
                                                <input
                                                    type={formData.showPassword ? "text" : "password"}
                                                    value={formData.password}
                                                    className="bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                                                    readOnly={true}
                                                />
                                            )}
                                            <div
                                                onClick={() => {
                                                    setFormData({
                                                        ...formData,
                                                        showPassword: !formData.showPassword,
                                                    });
                                                }}
                                                className="mx-4 hover:rotate-12 hover:grayscale-[50%] w-12 flex items-center justify-center h-12 cursor-pointer rounded-full neumorphism"
                                            >
                                                <Image
                                                    width={20}
                                                    height={20}
                                                    alt=""
                                                    src={formData.showPassword ? '/img/visibility.svg' : '/img/visibility_off.svg'}
                                                ></Image>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button
                                                className={`hover:grayscale-[50%] w-[150px] ${formData.editMode ? "bg-[#ac3f3f]" : "bg-ek-blue-75"
                                                    } mr-2.5 text-white font-questrial mt-2.5 px-10 py-[15px]`}
                                                onClick={() => {
                                                    setFormData({
                                                        ...formData,
                                                        editMode: !formData.editMode,
                                                    });
                                                }}
                                                type="button"
                                            >
                                                {formData.editMode ? "CANCEL" : "EDIT"}
                                            </button>
                                            <button
                                                className={`hover:grayscale-[50%] ${formData.editMode
                                                    ? "flex items-center justify-center"
                                                    : "hidden"
                                                    } w-[150px] bg-ek-blue-75 text-white font-questrial mt-2.5 px-10 py-[15px]`}
                                                type="submit"
                                            >
                                                SAVE
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Settings;
