import apiService from "../../../apiService";

export const loadUserApi = async () => {
  try {
    const data = await apiService.get(`/profile`);
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};
