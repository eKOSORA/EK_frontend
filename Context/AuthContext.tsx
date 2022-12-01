import React, { createContext, useContext, useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie } from "../utils/cookies";
import axios from "axios";
import { useRouter } from "next/router";
import { UserObject } from "../utils/interfaces/user";

let AuthContext = React.createContext({});

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default function AuthProvider({ children }: any) {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

  const getUserById = async (id: string) => {
    try {
      return {};
    } catch (error) {
      //console.log(error);
      return null;
    }
  };

  const logout = async () => {
    const data = await axios.get(`${baseURL}/auth/logout`);
    return data;
  };

  const login = async ({ formData }: any) => {
    try {

      console.log(formData)
      const data = await axios.post(`${baseURL}/auth/login`, formData);
      if (data.data.code !== "#Success") return { status: false, data, message: data.data.message }
      return { status: true, data };
    } catch (error: any) {
      console.log(error)
      return { status: false, message: error.response.data.message };
    }
  };

  let value = {  logout,  getUserById, login };
  return (
    <>{<AuthContext.Provider value={value}>{children}</AuthContext.Provider>}</>
  );
}
