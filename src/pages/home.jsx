import React from "react";


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100vh] relative justify-center  md:items-center">
      <div className="flex flex-col md:flex-row font-['Poppins']">
        <div className="absolute w-72 bottom-0 left-0 p-8">
          <p className="text-2xl  text-white">
            Website FILWI
          </p>
          <p className="text-gray-400">
            From <span className="text-[var(--clr-text-1)]">SMK NEGERI 69 JAKARTA</span>
          </p>
        </div>

        <div className=" bord  md:w-96 md:h-96 rounded-full border-[1rem] md:border-[2rem] border-[var(--clr-border-1)] overflow-hidden">
          <img
            src="web-putihj.jpeg"
            alt="sm"
            className="w-full h-full overflow-hidden"
          />
        </div>
     
      </div>
    </div>
  );
}
