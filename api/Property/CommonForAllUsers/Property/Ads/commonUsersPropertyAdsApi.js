import apiService from "../../../../apiService";

export const getAd = async (page = "", limit = "", id = "", deleted = "") => {
  try {
    const data = await apiService.get(
      `/property/ad?page=${page}&limit=${limit}&id=${id}&deleted=${deleted}`,
    );
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const addAd = async (formData) => {
  try {
    const data = await apiService.post(`/property/ad/add`, formData);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const updateAd = async (id, formData) => {
  try {
    const data = await apiService.put(`/property/ad/update/${id}`, formData);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const deleteAd = async (id) => {
  try {
    const data = await apiService.delete(`/property/ad/delete/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const recoverAd = async (id) => {
  try {
    const data = await apiService.put(`/property/ad/recover/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
