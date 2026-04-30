"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isActive, setIsActive] = useState(false);
  const style = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/", // optional
    });
    const { user } = res;
    if (res) {
      toast.success(`Login successful, Dear ${user.name}!`);
      redirect("/");
    } else {
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  const handleShowHide = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <animated.div className="my-10 space-y-5" style={style}>
      <h2 className="text-2xl text-center font-bold ">Login Your Account</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              <label className="label">Password</label>
              <input
                type={isActive ? "text" : "password"}
                className="input w-full"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <button
                onClick={handleShowHide}
                className="absolute top-33 right-9 text-xl cursor-pointer"
              >
                {isActive ? <BsEyeSlash /> : <BsEye />}
              </button>

              <div className="mt-3">
                <h2 className="flex items-center justify-between">
                  Haven&apos;t any account?{" "}
                  <Link className="link link-primary" href="/register">
                    Register
                  </Link>
                </h2>
              </div>

              <button className="btn btn-neutral mt-4">Login</button>
              <div className="divider">OR</div>
            </fieldset>
          </form>
          <div>
            <button
              className="w-full btn bg-white text-black border-[#e5e5e5]"
              onClick={handleGoogleSignIn}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default LoginPage;
