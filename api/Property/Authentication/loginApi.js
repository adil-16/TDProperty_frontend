import apiService from "../../apiService";

export const loginUserApi = async (email, password) => {
  try {
    const data = await apiService.post(`/auth/login`, { email, password });
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
