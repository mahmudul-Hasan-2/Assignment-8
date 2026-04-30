"use client";

import React from "react";
import { BsPlus } from "react-icons/bs";

const Modal = () => {
  return (
    <div>
      <button
        className="btn w-full"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="relative card w-full max-w-lg bg-base-100 shadow-2xl border border-base-300">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <form className="card-body">
              <div className="flex flex-col items-center mb-6">
                <h2 className="text-3xl font-bold text-primary">Book Now</h2>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input
                  name="userName"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>

              <div className="form-control w-full mt-2">
                <label className="label">
                  <span className="label-text font-semibold">
                    Email Address
                  </span>
                </label>
                <input
                  name="userEmail"
                  type="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>

              <div className="form-control w-full mt-2">
                <label className="label">
                  <span className="label-text font-semibold">Phone Number</span>
                </label>
                <input
                  name="userPhone"
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>

              <div className="form-control w-full mt-2">
                <label className="label">
                  <span className="label-text font-semibold">Address</span>
                </label>
                <textarea
                  name="userAddress"
                  placeholder="Enter your present address"
                  className="textarea textarea-bordered h-20 focus:textarea-primary"
                  required
                ></textarea>
              </div>

              <div className="form-control w-full mt-2">
                <label className="label">
                  <span className="label-text font-semibold">
                    Additional Information
                  </span>
                </label>
                <textarea
                  name="additionalInfo"
                  placeholder="Enter any other details here..."
                  className="textarea textarea-bordered h-32 focus:textarea-primary"
                ></textarea>
              </div>

              <div className="form-control mt-8">
                <button
                  type="submit"
                  className="btn btn-primary w-full text-lg uppercase"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
