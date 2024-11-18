"use client";
import React from "react";
import "@fontsource/montserrat/700.css";
const MainPage: React.FC = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/main/stadium.jpeg')", // Replace with your image path
          }}
        >
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold mb-10 leading-tight">
              Quality You Can Trust
            </h1>
          </div>
        </section>

        {/* Add more sections below as needed */}
      </main>
    </>
  );
};

export default MainPage;
