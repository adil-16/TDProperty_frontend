import apiService from "../../../../apiService";

export const getInteraction = async (page = "", limit = "", id = "") => {
  try {
    const data = await apiService.get(
      `/property/interaction?page=${page}&limit=${limit}&id=${id}`,
    );
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const addInteraction = async (formData) => {
  try {
    const data = await apiService.post(`/property/interaction/add`, formData);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const updateInteraction = async (id, formData) => {
  try {
    const data = await apiService.put(
      `/property/interaction/update/${id}`,
      formData,
    );
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const deleteInteraction = async (id) => {
  try {
    const data = await apiService.delete(`/property/interaction/delete/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const recoverInteraction = async (id) => {
  try {
    const data = await apiService.put(`/property/interaction/recover/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
