"use client";

import { useSpring, animated } from "@react-spring/web";

const EditModal = () => {
  const style = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  const handleUpdateProfile = async (data) => {
    await authClient.updateUser({
      image: data.photoUrl,
      name: data.name,
      email: data.email,
    });
  };
  return (
    <div className="w-full">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn w-full btn-outline btn-error"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Edit Profile
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <animated.div className="my-10 space-y-5" style={style}>
            <h2 className="text-2xl text-center font-bold ">
              Login Your Account
            </h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
              <div className="card-body">
                <form onSubmit={handleSubmit(handleUpdateProfile)}>
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
                    <label className="label">Email</label>
                    <input
                      className="input w-full"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}

                    <button className="btn btn-neutral mt-4" type="submit">
                      Update Profile
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
