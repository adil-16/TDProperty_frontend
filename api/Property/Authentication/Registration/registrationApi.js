import apiService from "../../../apiService";

export const registerUserApi = async (userData) => {
  try {
    const data = await apiService.post("/auth/register", userData);
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const resendOtpApi = async (email) => {
  try {
    const data = await apiService.post(`/auth/resend`, { email });
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const verifyOtpApi = async (email, otp) => {
  try {
    const data = await apiService.post(`/auth/resend`, { email, otp });
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const updateProfileApi = async (userData) => {
  try {
    const { data } = await apiService.put(`/auth/update`, userData);
    return { data };
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const getAllUsersApi = async () => {
  try {
    const { data } = await apiService.get(`/admin/users?role=admin`);
    return { data };
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const getUserDetailsApi = async (id) => {
  try {
    const { data } = await apiService.get(`/admin/user/${id}?role=admin`);
    return { data };
  } catch (error) {
    console.log(error);
  }
};

export const updateUserApi = async (id, userData) => {
  try {
    const { data } = await apiService.put(
      `/admin/user/${id}?role=admin`,
      userData,
    );
    return { data };
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUserApi = async (id) => {
  try {
    const { data } = await apiService.delete(`/admin/user/${id}?role=admin`);
    return { data };
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
