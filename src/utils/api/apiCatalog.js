import axios from "axios";

const BASEURL = "http://162.0.234.100:5095";
console.log("kncdmmkldsc sd", BASEURL);

// const BASEURL = "https://api.monopoly-card.online";

console.log("dfvbkkvjnv jnvf kvnf k", BASEURL);

export const getCatalogData = async () => {
  try {
    const response = await axios.get(BASEURL + "/products", {
      withCredentials: true,
    });
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
    console.error("Error fetching data:", error);
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
