import Image from "next/image";
import React from "react";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/image.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Tonnam Sutthipan</h1>
        <p className="text-base">Computer Engineering and Artificial Intelligence</p>
      </div>

      <div className="py-10 text-center ">" Hope without perseverance It can only be hope. "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md">
        <p>
          <b>Age:</b> 21
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Nakhon Si Thammarat
        </p>
        <p>
        <a className="text-light" href="https://www.facebook.com/profile.php?id=100010246932824&mibextid=ZbWKwL">
        <b>Facebook:</b> ต้นน้ำ สุทธิพันธ์
        </a> 
        </p>
        <p>
          <b>Mobile number:</b> 094-408-3420
        </p>
      </div>
    </div>
  );
};

export default Profile;
