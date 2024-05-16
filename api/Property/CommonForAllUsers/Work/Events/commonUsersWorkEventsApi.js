import apiService from "../../../../apiService";

export const getEvent = async (
  page = null,
  limit = null,
  id = null,
  deleted = null,
  client = null,
  type = null,
  status = null,
  reminder = null,
  date = null,
  text = null,
  sort = null,
  fields = null,
) => {
  const params = {};

  // Handle bracketed parameters
  if (sort) {
    const sortProp = Object.keys(sort)[0];
    params.sort = { [sortProp]: "sort" };
  }
  if (fields) {
    const fieldsProp = Object.keys(fields)[0];
    params.fields = { [fieldsProp]: "fields" };
  }

  // Add other parameters
  params.page = page;
  params.limit = limit;
  params.id = id;
  params.deleted = deleted;
  params.client = client;
  params.type = type;
  params.status = status;
  params.reminder = reminder;
  params.date = date;
  params.text = text;
  try {
    const data = await apiService.get(`/work/event, ${params}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const addEvent = async (formData) => {
  try {
    const data = await apiService.post(`/work/event/add`, formData);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const updateEvent = async (id, formData) => {
  try {
    const data = await apiService.put(`/work/event/update/${id}`, formData);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const deleteEvent = async (id) => {
  try {
    const data = await apiService.delete(`/work/event/delete/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const recoverEvent = async (id) => {
  try {
    const data = await apiService.put(`/work/event/recover/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
