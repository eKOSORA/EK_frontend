import React, { useContext, useEffect, useState } from "react";
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
  const [schools, setSchools] = useState([]);
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
          setUser(loginData.data.user);
          router.push("/admin");
        }
      } else if (
        data.data?.message.includes ==
        "E11000 duplicate key error collection: ekosora_db.schools index:"
      ) {
        return;
      }
      return data;
    } catch (error: AxiosResponse | any) {
      console.log(error.response);
      return error;
    }
  };

  const getSchools = async () => {
    const data = await axios.get(`${baseURL}/auth/schoolcodes`);
   
    if(!data.data) return

    setSchools(data.data.results);
    return data;
  };

  useEffect(() => {
    if(router.pathname.includes('/auth/signup/')) getSchools();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SchoolContext.Provider value={{ registerSchool, schools }}>
      {children}
    </SchoolContext.Provider>
  );
};
