"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { apiRoutes } from "../../../services/apiRoutes";
import { Helper } from "../../../services/helper";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/user";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const list = async () => {
    setLoading(true);
    const { response, message } = await Helper({
      url: apiRoutes.auth.signIn,
      method: "GET",
      hasToken : true ,
    });

    if (response) {
      if (response.error === 1) {
        setLoading(false);
        return { success: false, message, data : response.data};
      } else {
        setLoading(false);
        return { success: true, message, data : response.data};
      }
    } else {
      setLoading(false);
      return { success: false, message, data : []};
    }
  };

  return { list, loading };
};