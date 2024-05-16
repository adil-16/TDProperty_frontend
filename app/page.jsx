"use client";

import { redirect, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    router.push("/home");
  } else {
    router.push("/login");
  }
}
