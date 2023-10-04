import React from "react";
import {
  BoltIcon,
  ChatBubbleLeftEllipsisIcon,
  PencilSquareIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Emotional Freedom Coach</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <ChatBubbleLeftEllipsisIcon className="h-8 w-8" />
            <h2>Personalized Coach</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              &quot;What is the difference between a dog and a cat.&quot;
            </p>
            <p className="infoText">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Harmonize your nervous system</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              &quot;What is the difference between a dog and a cat.&quot;
            </p>
            <p className="infoText">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <PencilSquareIcon className="h-8 w-8" />
            <h2>Start writing to your coach</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              &quot;What is the difference between a dog and a cat.&quot;
            </p>
            <p className="infoText">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
