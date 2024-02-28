import axios from "axios";
import { BASEURL } from "./config";

export const getCatalogData = async () => {
  try {
    const response = await axios
      .get(BASEURL + "/products", {
        withCredentials: true,
      })
      .catch();
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getSideCategoryFilters = async () => {
  try {
    const response = await axios.get(BASEURL + "/products/category", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("ВЕЧНАЯ ОШИБКА:", error.message);
    return [];
  }
};

export const getSideDesignedFilters = async () => {
  try {
    const response = await axios.get(BASEURL + "/products/designed", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getSideDesignedOccasion = async () => {
  try {
    const response = await axios.get(BASEURL + "/products/occasion", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getFitersParamsCard = async (params) => {
  try {
    const response = await axios.get(BASEURL + "/products/occasion", {
      withCredentials: true,
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getCardPageData = async (params) => {
  try {
    const response = await axios.get(BASEURL + "/products/specific", {
      withCredentials: true,
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const renderCardPageData = async () => {
  try {
    const response = await axios
      .get(BASEURL + "/products/specific", {
        withCredentials: true,
      })
      .catch();
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
