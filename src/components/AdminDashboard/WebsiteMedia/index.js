"use client";
import React, { useState } from "react";
import MediaImage from "../../../../public/assets/images/Media.svg";
import GridViewIcon from "../../../../public/assets/images/grid-view-icon.svg";
import ListViewIcon from "../../../../public/assets/images/list-view-icon.svg";
import Image from "next/image";

const WebsiteMedia = () => {
  const [view, setView] = useState("grid"); 
  const [searchTerm, setSearchTerm] = useState(""); 

  // Define a single media item for demonstration
  const mediaItem = {
    id: 1,
    src: MediaImage.src,
    alt: "Sample Media",
  };


  const mediaItems = Array.from({ length: 30 }, () => mediaItem);


  const filteredMediaItems = mediaItems.filter(item =>
    item.alt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-4">
        {/* Left Side */}
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-[#161616]">Media</div>
          <div className="font-normal text-[#667085]" style={{ fontSize: "12px" }}>
            This is all listed media that you can add
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-col md:flex-row md:ml-auto space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <button className="w-full md:w-[224px] h-[56px] bg-[#00BAC2] text-white font-bold text-[14px] rounded-lg hover:bg-[#00a6a6]">
            + Add New Media
          </button>
        </div>
      </div>

      {/* Search Bar and View Toggle */}
      <div className="flex items-center mb-4">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-lg p-2" style={{ width: '211px' }}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 outline-none"
          />
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* View Toggle Icons */}
        <div className="flex space-x-4">
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded-lg border ${view === 'grid' ? 'bg-[#00BAC2] text-white' : 'bg-white text-[#00BAC2]'} border-[#00BAC2]`}
          >
            <Image src={GridViewIcon} alt="Grid View" width={20} height={20} />
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 rounded-lg border ${view === 'list' ? 'bg-[#00BAC2] text-white' : 'bg-white text-[#00BAC2]'} border-[#00BAC2]`}
          >
            <Image src={ListViewIcon} alt="List View" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Media Gallery */}
      <div className={`grid ${view === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4' : ''} ${view === 'list' ? 'space-y-4' : ''}`}>
        {filteredMediaItems.length > 0 ? (
          filteredMediaItems.map((item) => (
            <div key={item.id} className={`rounded-lg overflow-hidden ${view === 'list' ? 'flex items-center p-4' : ''}`}>
              <Image 
                src={item.src} 
                alt={item.alt} 
                width={view === 'list' ? 100 : 200} 
                height={view === 'list' ? 80 : 160} 
                className="object-cover" 
              />
              {view === 'list' && (
                <div className="ml-4">
                  <div className="font-bold">{item.alt}</div>
                  <div className="text-sm text-gray-500">Description or metadata here</div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No media found</div>
        )}
      </div>
    </div>
  );
};

export default WebsiteMedia;
