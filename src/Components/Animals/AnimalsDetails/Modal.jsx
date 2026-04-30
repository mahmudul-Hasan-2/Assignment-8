"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Modal = () => {
  const router = useRouter();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking confirmed!");
    router.push("/animals");
  };
  return (
    <div>
      <button
        className="btn w-full"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Book Now
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="relative card w-full max-w-lg  px-0">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <form className="card-body" onSubmit={handleOnSubmit}>
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
                  maxLength={11}
                  minLength={11}
                />
              </div>

              <div className="form-control w-full mt-2">
                <label className="label">
                  <span className="label-text font-semibold">Address</span>
                </label>
                <br />
                <textarea
                  name="userAddress"
                  placeholder="Enter your present address"
                  className="w-full textarea textarea-bordered h-20 resize-none focus:textarea-primary"
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
                  className="w-full textarea textarea-bordered h-32 resize-none focus:textarea-primary"
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
