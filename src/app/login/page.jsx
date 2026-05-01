"use client";
import React from "react";
import LoginPage from "@/Components/authentication/LoginPage";
export const metaData = {
  title: "Qurbani Hat - Login",
  description:
    "Securely log in to your Qurbani Hat account to manage your livestock bookings, track your animal's delivery, and access your saved favorites. Join Bangladesh's most trusted online Qurbani marketplace.",
};
const Login = () => {
  return (
    <div>
      <LoginPage></LoginPage>
    </div>
  );
};

export default Login;
