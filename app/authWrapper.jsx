"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "@/redux/features/authSlice";

export default function AuthWrapper({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);
  return <>{children}</>;
}
