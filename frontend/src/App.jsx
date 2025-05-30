import React from "react";
import Img from "./components/ImgProfile.jsx";
import Folk from "./assets/folk.jpg";

function App() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-background text-foreground px-6">
      {/* ข้อความฝั่งซ้าย */}
      <div className="max-w-md mr-10">
        <h1 className="text-3xl font-bold ">Hi, I'm FOLK</h1>
        <h2 className="text-3xl font-bold ">
          I'M A <a className="text text-blue-">REACT DEVELOPER</a>
        </h2>
        <h2 className="text-3xl font-bold mb-4">WEB DEVELOPER</h2>
      </div>
      {/* รูปฝั่งขวา */}
      <Img src={Folk} />
    </div>
  );
}

export default App;
