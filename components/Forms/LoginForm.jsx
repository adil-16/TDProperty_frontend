"use client";
import { loginUserApi } from "@/api/Property/Authentication/loginApi";
import { useState } from "react";
import * as EmailValidator from "email-validator";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/authSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { loadUserApi } from "@/api/Property/CommonForAllUsers/Profile/commonUsersProfileApi";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, isLoading] = useState(false);

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
    try {
      const data = await loginUserApi(email, password);
      console.log(data);
      if (data?.data?.token) {
        Cookies.set("token", data?.data?.token);
        const profile = await loadUserApi();
        if (profile) {
          console.log(profile);
          dispatch(login(profile?.data));
          router.push("/home");
          toast.success("Successfully logged in");
        } else {
          toast.error("Something went wrong");
        }
      } else {
        toast.error("Incorrect email/password");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }
    isLoading(false);
  };

  return (
    <form className="mt-4 flex flex-col gap-y-4" onSubmit={submitHandler}>
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
      <input
        className="mt-4 h-14 cursor-pointer rounded-full bg-primary font-bold"
        type="submit"
        value={`${loading ? "Loading..." : "Login"}`}
      />
    </form>
  );
};

export default LoginForm;
