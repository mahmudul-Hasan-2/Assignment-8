import ProfileCard from "@/Components/Profile/ProfileCard";
import React from "react";

export const metaData = {
  title: "Qurbani Hat - Profile",
  description:
    "Manage your Qurbani Hat profile to update your contact information, view your shortlisted animals, and track your purchase history. Stay organized and ready for a hassle-free Qurbani booking.",
};

const page = () => {
  return (
    <div>
      <ProfileCard></ProfileCard>
    </div>
  );
};

export default page;
