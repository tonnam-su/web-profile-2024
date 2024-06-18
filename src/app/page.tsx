import Image from "next/image";
import Profile from "./_components/Profile";
import Bio from "./_components/Bio";
import Personality from "./_components/Personality";
import Education from "./_components/Education";
import Skill from "./_components/Skill";

export default function Home() {
  return (
    <div className="container mx-auto pt-4">
      <div className="flex gap-4 justify-end pb-4">
        <div>Profile</div>
        <div><a href="/blog"> Blog </a></div>
      </div>
      <div className="grid grid-flow-col grid-cols-8 gap-4">
        <div className="col-span-2">
          <Profile />
        </div>
        <div className="grid col-span-3 gap-4">
          <Bio />
          <Personality />
          <div className="bg-pink-300 min-h-[200px]">Goals</div>
        </div>
        <div className="grid col-span-3 gap-4">
          <Skill />
          <Education />
          <div className="bg-pink-300 min-h-[200px]">Portfolio</div>
        </div>
      </div>
    </div>
  );
}
