import apiService from "../../../apiService";

export const getCountriesApi = async (country) => {
  try {
    const data = await apiService.get(`/places/countries?text=${country}`);
    console.log(data);
    return data?.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
