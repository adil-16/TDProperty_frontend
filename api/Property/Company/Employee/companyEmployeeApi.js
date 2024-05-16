import apiService from "../../../apiService";

export const getUser = async (
  page = "",
  limit = "",
  id = "",
  deleted = "",
) => {
  try {
    const data = await apiService.get(
      `/company/user?page=${page}&limit=${limit}&id=${id}&deleted=${deleted}`
    );
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const addUser = async (formData) => {
  try {
    const data = await apiService.post(`/company/user/add`, formData);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const updateUser = async (id, formData) => {
  try {
    const data = await apiService.put(
      `/company/user/update/${id}`,
      formData,
    );
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const deleteUser = async (id) => {
  try {
    const data = await apiService.delete(`/company/user/delete/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const recoverUser = async (id) => {
  try {
    const data = await apiService.put(`/property/user/recover/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};