"use client";

import { authClient, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isActive, setIsActive] = React.useState(false);

  const handleRegister = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.photoUrl,
      callbackURL: "/login", // optional
    });
    console.log(res, error);
    if (res) {
      redirect("/login");
    }
  };

  const handleShowHide = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <div className="my-10 space-y-5">
      <h2 className="text-2xl text-center font-bold ">Register Your Account</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
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
              <label className="label">Photo Url</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Photo Url"
                {...register("photoUrl", { required: "Photo Url is required" })}
              />
              {errors.photoUrl && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photoUrl.message}
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
                className="absolute top-68 right-9 text-xl cursor-pointer"
              >
                {isActive ? <BsEyeSlash /> : <BsEye />}
              </button>

              <button className="btn btn-neutral mt-4">Register</button>
              <div className="divider">OR</div>
              <div>
                <button className="w-full btn bg-white text-black border-[#e5e5e5]">
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
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
