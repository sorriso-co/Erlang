"use client";

import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  // Placeholder images - Replace with actual image paths
  const projectImages = [
    "/images/projects/project1.jpeg",
    "/images/projects/project2.jpeg",
    "/images/projects/project3.jpeg",
    "/images/projects/project4.jpeg",
    "/images/projects/project5.jpeg",
    "/images/projects/project6.jpeg",
    "/images/projects/project7.jpeg",
    "/images/projects/project8.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-l border-black">
        {projectImages.map((image, index) => (
          <div
            key={index}
            className="relative group border-b border-r border-black overflow-hidden"
          >
            <Image
              src={image}
              alt={`Project ${index + 1}`}
              width={500} // Set appropriate dimensions
              height={300} // Set appropriate dimensions
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
