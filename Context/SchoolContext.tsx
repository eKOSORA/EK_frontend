import React, { useContext, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { setCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

const SchoolContext = React.createContext({});

export const useSchools = () => {
  return useContext(SchoolContext);
};

export const SchoolProvider = ({ children }: any) => {
  const [school, setSchool] = useState({});
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
  const router = useRouter();
  const { setUser }: any = useAuth();

  const registerSchool = async ({ formData }: any) => {
    try {
      console.log(baseURL);
      delete formData.logoImagePreviewStr;
      console.log(formData);
      const data = await axios.post(`${baseURL}/auth/signup`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(data);
      if (data.data?.code === "#Success" && data.statusText === "Created") {
        const loginData = await axios.post(
          `${baseURL}/auth/login`,
          {
            accountType: "educator",
            emailOrCode: formData.admin.email,
            password: formData.admin.password,
            school: formData.name,
          },
          { headers: { "Content-Type": "application/json" } }
        );

        if (
          loginData.data?.code === "#Success" &&
          loginData.statusText === "Logged in successfully"
        ) {
          setCookie("eKOSORA-USER-TOKEN", loginData.data.token, 14);
          setUser(loginData.data.user);
          router.push("/admin");
        }
      }
      else if(data.data?.message.includes == "E11000 duplicate key error collection: ekosora_db.schools index:"){
return
      }
      return data;
    } catch (error: AxiosResponse | any) {
      console.log(error.response);
      return error;
    }
  };

  return (
    <SchoolContext.Provider value={{ registerSchool }}>
      {children}
    </SchoolContext.Provider>
  );
};
