/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState } from "react";
import Image from "next/image";

export default function ClipPathProfilePicture({
  profile_picture,
}: {
  profile_picture: string;
}) {
  const [randomClipPath, setRandomClipPath] = useState<string>(
    getRandomClipPath()
  );

  return (
    <div className="h-[300px] w-[300px] cursor-pointer">
      <Image
        src={profile_picture}
        style={{ clipPath: randomClipPath }}
        alt="Profile Picture"
        height={300}
        width={300}
        priority={true}
      ></Image>
    </div>
  );
}

const clipPaths = [
  "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
  "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  "polygon(25% 0%, 95% 14%, 75% 100%, 6% 84%)",
  "polygon(70% 8%, 100% 38%, 63% 89%, 16% 87%, 11% 29%)",
  "polygon(50% 0%, 73% 22%, 95% 7%, 100% 70%, 80% 90%, 52% 93%, 30% 91%, 6% 71%, 2% 9%, 27% 25%)",
];

function getRandomClipPath() {
  const randomIndex = Math.floor(Math.random() * clipPaths.length);
  const randomPath = clipPaths[randomIndex];
  return randomPath;
}
