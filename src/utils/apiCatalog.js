import axios from "axios";

export const getCatalogData = async () => {
  try {
    const response = await axios.get("http://162.0.234.100:5095/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getSideCategoryFilters = async () => {
  try {
    const response = await axios.get(
      "http://162.0.234.100:5095/products/category"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getSideDesignedFilters = async () => {
  try {
    const response = await axios.get(
      "http://162.0.234.100:5095/products/designed"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getSideDesignedOccasion = async () => {
  try {
    const response = await axios.get(
      "http://162.0.234.100:5095/products/occasion"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
