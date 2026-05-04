"use client";

import { authClient } from "@/lib/auth-client";
import { useSpring, animated } from "@react-spring/web";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditModal = () => {
  const style = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleUpdateProfile = async (data) => {
    const { data: res, error } = await authClient.updateUser({
      image: data.photoUrl,
      name: data.name,
    });
    if (res) {
      await authClient.getSession({ force: true });
      toast.success("Updated Successfully");

      document.getElementById("my_modal_3").close();

      window.location.reload();
    }
  };
  return (
    <div className="w-full">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn w-full btn-outline btn-error"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Update
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <animated.div className="my-10 space-y-5 text-start" style={style}>
            <h2 className="text-2xl text-center font-bold ">Update Account</h2>
            <div className="card bg-base-10 w-full max-w-full sm:max-w-sm shrink-0 shadow-2xl mx-auto">
              <div className="card-body px-4">
                <form id="form" onSubmit={handleSubmit(handleUpdateProfile)}>
                  <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                      className="input w-full"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                    <label className="label">Photo Url</label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Photo Url"
                      {...register("photoUrl", {
                        required: "Photo Url is required",
                      })}
                    />
                    {errors.photoUrl && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.photoUrl.message}
                      </p>
                    )}

                    <button className="btn btn-neutral mt-4" type="submit">
                      Update Account
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </animated.div>
        </div>
      </dialog>
    </div>
  );
};

export default EditModal;
