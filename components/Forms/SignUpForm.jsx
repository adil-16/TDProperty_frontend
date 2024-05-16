"use client";
import React, { useState, useEffect } from "react";
import * as EmailValidator from "email-validator";
import { useDispatch } from "react-redux";
import { register } from "../../redux/features/authSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { loadUserApi } from "@/api/Property/CommonForAllUsers/Profile/commonUsersProfileApi";
import { registerUserApi } from "@/api/Property/Authentication/Registration/registrationApi";
import { getCountriesApi } from "@/api/Property/Public/Places/publicPlacesApi";

const SignUpForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      if (country?.length > 0) {
        const data = await getCountriesApi(country);
        setCountries(data?.data?.items);
      } else {
        setCountries([]);
      }
    };

    fetchCountries();
  }, [country]);

  const selectCountry = (country) => {
    setCountry(country?.name);
    setCountryId(country?._id);
    setCountries([]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    isLoading(true);
    const isValidEmail = EmailValidator.validate(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!password) {
      toast.error("Please enter a password");
      return;
    }
    if (!confirmPassword) {
      toast.error("Please enter a confirm password");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("passwords must match");
      return;
    }
    try {
      isLoading(true);

      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);
      formData.append("phone", phone);
      formData.append("name", fullName);
      formData.append("email", email);
      formData.append("country", countryId);

      const data = await registerUserApi(formData);
      if (data?.data?.token) {
        Cookies.set("token", data?.data?.token);
        const profile = await loadUserApi();
        if (profile) {
          console.log(profile);
          dispatch(register(profile?.data));
          router.push("/home");
          toast.success("Registration Successful");
        } else {
          toast.error("Something went wrong");
        }
      } else {
        toast.error("Something went wrong");
      }
      isLoading(false);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };
  return (
    <form className="mt-4 flex flex-col gap-y-4" onSubmit={submitHandler}>
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="fullname">
          Full Name
        </label>
        <input
          className="h-[41px] rounded-full border border-black border-opacity-10 bg-transparent px-4 text-sm font-medium outline-none focus:border focus:border-black focus:border-opacity-50"
          type="text"
          id="fullname"
          placeholder="ex: John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="h-[41px] rounded-full border border-black border-opacity-10 bg-transparent px-4 text-sm font-medium outline-none focus:border focus:border-black focus:border-opacity-50"
          type="email"
          id="email"
          placeholder="ex: john_doe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="accounttype">
          Account Type
        </label>
        <select
          name="accounttype"
          id="accounttype"
          className="form-select h-[41px] appearance-none rounded-full border border-black border-opacity-10 bg-transparent bg-no-repeat pl-4 pr-8 outline-none focus:border focus:border-black focus:border-opacity-50"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value="company">Company</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="password">
          Password
        </label>
        <input
          className="h-[41px] rounded-full border border-black border-opacity-10 bg-transparent px-4 text-sm font-medium outline-none focus:border focus:border-black focus:border-opacity-50"
          type="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="confirmpassword">
          Confirm Password
        </label>
        <input
          className="h-[41px] rounded-full border border-black border-opacity-10 bg-transparent px-4 text-sm font-medium outline-none focus:border focus:border-black focus:border-opacity-50"
          type="password"
          id="confirmpassword"
          placeholder="********"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="phone">
          Phone
        </label>
        <input
          className="h-[41px] rounded-full border border-black border-opacity-10 bg-transparent px-4 text-sm font-medium outline-none focus:border focus:border-black focus:border-opacity-50"
          type="number"
          id="phone"
          placeholder="0123123234"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="country">
          Country
        </label>
        <input
          className="h-[41px] rounded-full border border-black border-opacity-10 bg-transparent px-4 text-sm font-medium outline-none focus:border focus:border-black focus:border-opacity-50"
          type="text"
          id="country"
          placeholder="ex: Pakistan"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        {countries?.length > 0 && (
          <ul>
            {countries?.map((country, index) => (
              <li key={index} onClick={() => selectCountry(country)}>
                {country?.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        className="mt-4 h-14 cursor-pointer rounded-full bg-primary font-bold"
        type="submit"
        value={`${loading ? "Loading..." : "Register"}`}
      />
    </form>
  );
};

export default SignUpForm;
