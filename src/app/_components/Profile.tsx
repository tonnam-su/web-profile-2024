import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/profile.webp"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">John Farmer</h1>
        <p className="text-base">Software Engineer</p>
      </div>
    </div>
  );
};

export default Profile;
