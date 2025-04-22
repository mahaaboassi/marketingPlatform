"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { apiRoutes } from "../../../services/apiRoutes";
import { Helper } from "../../../services/helper";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/user";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const signIn = async ({ email, password }) => {
    setLoading(true);
    const { response, message } = await Helper({
      url: apiRoutes.auth.signIn,
      method: "POST",
      body: { email, password },
    });

    if (response) {
      if (response.error === 1) {
        setLoading(false);
        return { success: false, message };
      } else {
        localStorage.setItem("$user", JSON.stringify({
            name : response.data.name,
            email : response.data.email,
            file : response.data.file,
            company : response.data.company? response.data.company:"",
            id : response.data.id,
            country : response.data.country,
            role : response.data.role
        }));
        dispatch(login({
          name : response.data.name,
          email : response.data.email,
          file : response.data.file,
          company : response.data.company? response.data.company:"",
          id : response.data.id,
          country : response.data.country,
          role : response.data.role
        }))
        Cookies.set("token", response.data.token, {
            expires: 1, 
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
        });
        setLoading(false);
        return { success: true, message ,role: response.data.role};
      }
    } else {
      setLoading(false);
      return { success: false, message, role:""};
    }
  };

  return { signIn, loading };
};