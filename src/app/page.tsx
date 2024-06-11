import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto pt-4">
      <div className="flex gap-4 justify-end pb-4">
        <div>Profile</div>
        <div>Blog</div>
      </div>
      <div className="grid grid-flow-col grid-cols-8 gap-4">
        <div className="col-span-2">
          <div className="bg-pink-300 h-full">Profile</div>
        </div>
        <div className="grid col-span-3 gap-4">
          <div className="bg-pink-300 min-h-[400px]">Bio</div>
          <div className="bg-pink-300 min-h-[300px]">Personality</div>
          <div className="bg-pink-300 min-h-[200px]">Goals</div>
        </div>
        <div className="grid col-span-3 gap-4">
          <div className="bg-pink-300 min-h-[500px]">Skill</div>
          <div className="bg-pink-300 min-h-[100px]">Education</div>
          <div className="bg-pink-300 min-h-[200px]">Portfolio</div>
        </div>
      </div>
    </div>
  );
}
