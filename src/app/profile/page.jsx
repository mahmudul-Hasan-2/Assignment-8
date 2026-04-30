"use client";

import EditModal from "@/Components/Profile/EditModal";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  const { data } = useSession();
  const user = data?.user;
  console.log(user);
  return (
    <div>
      <div className="min-h-screen bg-base-200 flex justify-center items-center p-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
          <div className="h-32 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 rounded-t-2xl"></div>

          <div className="card-body items-center text-center -mt-16">
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-2xl">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={400}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="card-title text-3xl font-bold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-500 font-medium">{user.email}</p>
            </div>

            <div className="divider w-full"></div>

            <div className="card-actions w-full">
              <EditModal></EditModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
