"use client";
import { Input } from "antd";
import Image from "next/image";
import { Intro, MediaPartners } from "@/components/Home";
import { Qualities, Team } from "@/components/AboutUs";
import {
  IntroSection,
  PlatformSection,
  AgreeSection,
} from "@/components/CodeOfConduct";


import ArrowLeft from "../../../../public/assets/images/Arrow_left.svg";
import TextAlignLeft from "../../../../public/assets/images/text-align-left.svg";
import Heading from "../../../../public/assets/images/heading.svg";
import Text from "../../../../public/assets/images/text.svg";
import ChevronRight from "../../../../public/assets/images/chevronRight.svg";
import { SearchOutlined } from "@ant-design/icons";

// Imported images
import LinkHorizontal from "../../../../public/assets/images/Link_Horizontal.svg";
import TeenyiconsButtonOutline from "../../../../public/assets/images/teenyicons_button-outline.svg";
import Heart from "../../../../public/assets/images/heart.svg";
import SortAscending from "../../../../public/assets/images/Sort_Ascending.svg";
import BasilYoutube from "../../../../public/assets/images/basil_youtube-outline.svg";
import MediaPlay from "../../../../public/assets/images/media-play.svg";
import Play from "../../../../public/assets/images/Play.svg";

const WebsiteEditing = () => {
return (
  <div className="flex flex-col p-2">
    {/* Main Content Section */}
    <div className="flex flex-row flex-1 gap-2">
      {/* Left Side: Customization Tools */}
      <div className="w-1/4 flex flex-col">
        {/* Title on the Left Side */}
        <div className="flex items-center gap-4 mb-6 text-[#161616]">
          <Image
            src={ArrowLeft.src}
            width={36}
            height={36}
            alt="Arrow Left"
          />
          <span className="text-[24px] font-bold">Homepage</span>
        </div>

        {/* Search Bar */}
        <div className="mb-6 px-4">
          <Input
            placeholder="Search Elements"
            prefix={
              <SearchOutlined
                style={{ color: "#888888", fontSize: "24px" }}
              />
            } // Adjust icon size
            className="w-full"
            style={{ height: "48px", borderColor: "#E7E7E7" }}
          />
        </div>

        {/* Structure Section */}
        <div className="mb-6 px-4">
<div className="flex items-center justify-between mb-4 text-[14px] font-bold">
  <span className="font-bold text-lg">Structure</span>
  <Image
              src={ChevronRight.src}
              width={16}
              height={16}
              alt="Chevron Right"
            />
</div>

<div className="grid grid-cols-3 gap-4">
  {/* 1st Section */}
  <div className="flex flex-col items-center">
    <div className="border border-[#E7E7E7] rounded-[5.68px] p-[5.68px] w-[58.26px] h-[57.44px] flex flex-col items-center justify-center">
      <div className="bg-[#E7E7E7] w-[46.89px] h-[27.71px] rounded-[2.84px] border-[0.71px] border-dotted border-[#666666]"></div>
      <div className="bg-[#E7E7E7] w-[46.89px] h-[9.95px] rounded-[2.84px] mt-1 "></div>
    </div>
    <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
      Section
    </div>
  </div>

  {/* 2nd Section */}
  <div className="flex flex-col items-center">
    <div className="border border-[#E7E7E7] rounded-[5.68px] p-[5.68px] w-[58.26px] h-[51.87px] flex items-center justify-center">
      <div className="bg-[#E7E7E7] w-[46.89px] h-[40.5px] rounded-[2.84px] border-[0.71px] border-dotted border-[#666666]"></div>
    </div>
    <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
      Container
    </div>
  </div>

  {/* 3rd Section */}
  <div className="flex flex-col items-center">
    <div className="w-[58.26px] h-[57.44px] border border-[#E7E7E7] rounded-[5.68px] p-[5.68px] flex items-center justify-center">
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        <div className="bg-[#E7E7E7] rounded-[2.84px] border-[0.71px] border-dotted border-[#666666]"></div>
        <div className="bg-[#E7E7E7] rounded-[2.84px] "></div>
        <div className="bg-[#E7E7E7] rounded-[2.84px] "></div>
        <div className="bg-[#E7E7E7] rounded-[2.84px] border-[0.71px] border-dotted border-[#666666]"></div>
      </div>
    </div>
    <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
      Grid
    </div>
  </div>

  {/* 4th Section */}
  <div className="flex flex-col items-center">
    <div className="w-[58.26px] h-[57.44px] border border-[#E7E7E7] rounded-[5.68px] p-[5.68px] flex items-center justify-center">
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        <div className="bg-[#E7E7E7] rounded-[2.84px] border-[0.71px] border-dotted border-[#666666] w-[20px] h-full"></div>
        <div className="bg-[#E7E7E7] rounded-[2.84px] border-[0.71px] border-dotted border-[#666666] w-[20px] h-full"></div>
      </div>
    </div>
    <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
      Columns
    </div>
  </div>

  {/* 5th Section */}
  <div className="flex flex-col items-center">
    <div className="w-[58.26px] h-[57.44px] border border-[#E7E7E7] rounded-[5.68px] p-[5.68px] flex items-center justify-center">
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="bg-[#E7E7E7] w-full h-[11.44px] rounded-[2.84px] border-[0.71px] border-dotted border-[#999999]"></div>
        <div className="bg-[#E7E7E7] w-full h-[11.44px] rounded-[2.84px]"></div>
        <div className="bg-[#E7E7E7] w-full h-[11.44px] rounded-[2.84px] border-[0.71px] border-dotted border-[#999999]"></div>
      </div>
    </div>
    <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
      Lists
    </div>
  </div>
</div>
</div>

        {/* Horizontal Rule / Spacer */}
        <div className="my-4 px-4">
          <hr className="border-t border-[#E7E7E7]" />
        </div>

        {/* Basic Section */}
        <div className="mb-6 px-4">
          <div className="flex items-center justify-between mb-4 text-[14px] font-bold">
            <span className="font-bold text-lg">Basic</span>
            <Image
              src={ChevronRight.src}
              width={16}
              height={16}
              alt="Chevron Right"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="border border-[#E7E7E7] rounded-[5.68px] p-[5.68px] w-[58.26px] h-[51.87px] flex items-center justify-center">
                <div className="bg-[#E7E7E7] w-[46.89px] h-[40.5px] rounded-[2.84px]"></div>
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Div block
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7]    rounded-[5.68px] p-[5.68px] flex items-center justify-center">
                <Image
                  src={LinkHorizontal.src}
                  width={24}
                  height={24}
                  alt="Link Horizontal"
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Link
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7]  rounded-[5.68px] p-[5.68px] flex items-center justify-center">
                <Image
                  src={Text.src}
                  width={24}
                  height={24}
                  alt="Text Editor"
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Text Editor
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7]  rounded-[5.68px] p-[5.68px] flex items-center justify-center">
                <Image
                  src={SortAscending.src}
                  width={24}
                  height={24}
                  alt="Divider"
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Divider
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7]   rounded-[5.68px] p-[5.68px] flex items-center justify-center">
                <Image
                  src={TeenyiconsButtonOutline.src}
                  width={24}
                  height={24}
                  alt="Button"
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Button
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7]   rounded-[5.68px] p-[5.68px] flex items-center justify-center">
                <Image src={Heart.src} width={24} height={24} alt="Icon" />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Icon
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Rule / Spacer */}
        <div className="my-4 px-4">
          <hr className="border-t border-[#E7E7E7]" />
        </div>

        {/* Typography Section */}
        <div className="mb-6 px-4">
          <div className="flex items-center justify-between mb-4 text-[14px] font-bold">
            <span className="font-bold text-lg">Typography</span>
            <Image
              src={ChevronRight.src}
              width={16}
              height={16}
              alt="Chevron Right"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7] rounded-[5.68px] flex items-center justify-center">
                <Image
                  src={TextAlignLeft.src}
                  width={24}
                  height={24}
                  alt="Text Align Left"
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Paragraph
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7] rounded-[5.68px] flex items-center justify-center">
                <Image
                  src={Heading.src}
                  width={24}
                  height={24}
                  alt="Heading"
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Heading
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7] rounded-[5.68px] flex items-center justify-center">
                <Image src={Text.src} width={24} height={24} alt="Text" />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Text
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Rule / Spacer */}
        <div className="my-4 px-4">
          <hr className="border-t border-[#E7E7E7]" />
        </div>

        {/* Media Section */}
        <div className="mb-6 px-4">
          <div className="flex items-center justify-between mb-4 text-[14px] font-bold">
            <span className="font-bold text-lg">Media</span>
            <Image
              src={ChevronRight.src}
              width={16}
              height={16}
              alt="Chevron Right"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7] rounded-[5.68px] flex items-center justify-center">
                <Image
                  src={Play.src}
                  width={24}
                  height={24}
                  alt="Text Align Left"
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Video
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7] rounded-[5.68px] flex items-center justify-center">
                <Image
                  src={MediaPlay.src}
                  width={24}
                  height={24}
                  alt="Heading"
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                Image
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[58.26px] h-[51.87px] border border-[#E7E7E7] rounded-[5.68px] flex items-center justify-center">
                <Image
                  src={BasilYoutube.src}
                  width={24}
                  height={24}
                  alt="Text"
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#999999] text-[10px]">
                YouTube
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Rule / Spacer */}
        <div className="my-4 px-4">
          <hr className="border-t border-[#E7E7E7]" />
        </div>

        {/* Forms Section */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4 text-[14px] font-bold">
            <span className="font-bold text-lg">Forms</span>
            <Image
              src={ChevronRight.src}
              width={16}
              height={16}
              alt="Chevron Right"
            />
          </div>
        </div>

        {/* Horizontal Rule / Spacer */}
        <div className="my-4 px-4">
          <hr className="border-t border-[#E7E7E7]" />
        </div>

        {/* Grid Column Section */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4 text-[14px] font-bold">
            <span className="font-bold text-lg">Grid, Column</span>
            <Image
              src={ChevronRight.src}
              width={16}
              height={16}
              alt="Chevron Right"
            />
          </div>
        </div>

        {/* Horizontal Rule / Spacer */}
        <div className="my-4 px-4">
          <hr className="border-t border-[#E7E7E7]" />
        </div>

        {/* Feature Section */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4 text-[14px] font-bold">
            <span className="font-bold text-lg">Feature</span>
            <Image
              src={ChevronRight.src}
              width={16}
              height={16}
              alt="Chevron Right"
            />
          </div>
        </div>

        {/* Horizontal Rule / Spacer */}
        <div className="my-4 px-4">
          <hr className="border-t border-[#E7E7E7]" />
        </div>

        {/* Additional Feature Section */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4 text-[14px] font-bold">
            <span className="font-bold text-lg">Feature</span>
            <Image
              src={ChevronRight.src}
              width={16}
              height={16}
              alt="Chevron Right"
            />
          </div>
        </div>
      </div>

      {/* Right Side: Components */}
      <div className="w-3/4 relative pt-4">
        <IntroSection />
        <PlatformSection />
        <AgreeSection/>
      </div>
    </div>
  </div>
);
};

export default WebsiteEditing;
