import axios from "axios";
import { BASEURL } from "./config";
export const paramsLoginData = async (params) => {
  try {
    const response = await axios.post(BASEURL + "/auth/login", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const paramsAuthData = async (params) => {
  try {
    const response = await axios.post(
      BASEURL + "/auth/register",
      JSON.stringify(params),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
