import apiService from "../../../apiService";

export const forgotPasswordApi = async (email) => {
  try {
    const { data } = await apiService.post(`/auth/forgot`, email);
    return { data };
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const resetPasswordApi = async (userData) => {
  try {
    const { data } = await apiService.put(`/auth/reset`, { userData });
    return { data };
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
