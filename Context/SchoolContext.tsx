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
  const [schools, setSchools] = useState([]);
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

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
    try {
      const data = await axios.get(`${baseURL}/auth/schoolcodes`);
      if (!data.data) return
      console.log(data.data);
      return { status: true, schools: data.data.results };
    } catch (error:any) {
      console.log(error)
      return { status: false, message: error.message }
    }
  };

  return (
    <SchoolContext.Provider value={{ registerSchool, getSchools }}>
      {children}
    </SchoolContext.Provider>
  );
};
