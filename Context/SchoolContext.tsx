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
      return data;
    } catch (error: AxiosResponse | any) {
      console.log(error.response);
      return error;
    }
  };

  const getSchools = async () => {
    const data = await axios.get(`${baseURL}/auth/schoolcodes`);
    if (!data.data) return
    return data;
  };

  useEffect(() => {
    getSchools();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SchoolContext.Provider value={{ registerSchool,getSchools, schools }}>
      {children}
    </SchoolContext.Provider>
  );
};
