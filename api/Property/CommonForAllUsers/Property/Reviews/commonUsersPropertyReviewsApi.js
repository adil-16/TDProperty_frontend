import apiService from "../../../../apiService";

export const getReviews = async (
  page = "",
  limit = "",
  id = "",
  deleted = "",
  property = "",
) => {
  try {
    const data = await apiService.get(
      `/property/review?page=${page}&limit=${limit}&id=${id}&deleted=${deleted}&property=${property}`,
    );
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const getStats = async (id) => {
  try {
    const data = await apiService.get(`/property/review/stats?property=${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const addReview = async (formData) => {
  try {
    const data = await apiService.post(`/property/review/add`, formData);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const updateReview = async (id, formData) => {
  try {
    const data = await apiService.put(
      `/property/review/update/${id}`,
      formData,
    );
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const deleteReview = async (id) => {
  try {
    const data = await apiService.delete(`/property/review/delete/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const recoverReview = async (id) => {
  try {
    const data = await apiService.put(`/property/review/recover/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
