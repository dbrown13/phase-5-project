import React from "react";
import HomeGallery from "./HomeGallery";

function HomePage() {
  return (
    <div className="bg-auto bg-[url('/public/slate.jpeg')]">
    <br></br>
      <div className="text-4xl font-sans text-center text-white">
        <h1 className="bg-gray-500 max-w-2xl p-2 m-auto rounded-lg">Ready for some off-roading adventures?</h1>
      </div>
      <br></br>
      <div className="flex justify-center items-center">
        <HomeGallery />
      </div>
      {/* put a search bar here */}
    </div>
  );
}

export default HomePage;
