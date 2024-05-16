import apiService from "../../../apiService";

export const getProperty = async (
  page = null,
  limit = null,
  id = null,
  deleted = null,
  type = null,
  status = null,
  ownership = null,
  text = null,
  sort = null,
  fieldsName = null,
  fieldsInteraction= null,
) => {
  const params = {};

  // Handle bracketed parameters
  if (sort) {
    const sortProp = Object.keys(sort)[0];
    params.sort = { [sortProp]: "sort" };
  }
  if (fieldsName) {
    const fieldsProp = Object.keys(fieldsName)[0];
    params.fieldsName = { [fieldsProp]: "fields" };
  }
  
  if (fieldsInteraction) {
    const fieldsProp = Object.keys(fieldsInteraction)[0];
    params.fieldsInteraction = { [fieldsProp]: "fields" };
  }

  // Add other parameters
  params.page = page;
  params.limit = limit;
  params.id = id;
  params.deleted = deleted;
  params.type = type;
  params.status = status;
  params.ownership = ownership;
  params.text = text;
  try {
    const data = await apiService.get(`/property, ${params}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const addProperty = async (formData) => {
  try {
    const data = await apiService.post(`/property`, formData);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const updateProperty = async (id, formData) => {
  try {
    const data = await apiService.put(`/property/update/${id}`, formData);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const deleteProperty = async (id) => {
  try {
    const data = await apiService.delete(`/property/delete/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const recoverProperty = async (id) => {
  try {
    const data = await apiService.put(`/property/recover/${id}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
