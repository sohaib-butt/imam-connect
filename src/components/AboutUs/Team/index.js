import React from "react";
import { TeamMateCard } from "@/components/shared";

const index = () => {
  const teamMembers = [
    {
      img: "assets/images/teamMate.svg",
      name: "Muddasar Ahmed",
      designation: "Founder & CEO",
    },
    {
      img: "assets/images/teamMate1.svg",
      name: "Nezar Mahmoud",
      designation: "Project Management",
    },
    {
      img: "assets/images/teamMate2.svg",
      name: "Zain al-Haddad",
      designation: "Job Title",
    },
    {
      img: "assets/images/teamMate3.svg",
      name: "Mariam Harutyunyan",
      designation: "Head of Marketing",
    },
    {
      img: "assets/images/teamMate4.svg",
      name: "Fareena Alam",
      designation: "Team Advisor",
    },
    {
      img: "assets/images/teamMate5.svg",
      name: "Annie Khan",
      designation: "Head of Partnerships and Client Relations",
    },
    {
      img: "assets/images/teamMate6.svg",
      name: "Khadijha Tariq",
      designation: "Team Member",
    },
    {
      img: "assets/images/teamMate7.svg",
      name: "Syed Azmin",
      designation: "Advisory Board",
    },
    {
      img: "assets/images/teamMate8.svg",
      name: "Rahma Javed",
      designation: "Advisory Board",
    },
    {
      img: "assets/images/teamMate9.svg",
      name: "Hussein Kanji",
      designation: "Advisory Board",
    },
    {
      img: "assets/images/teamMate10.svg",
      name: "Dalia Mogahed",
      designation: "Advisory Board",
    },
    {
      img: "assets/images/teamMate11.svg",
      name: "Usman Ahmed",
      designation: "Advisory Board",
    },
    {
      img: "assets/images/teamMate12.svg",
      name: "Alia Kemet",
      designation: "Advisory Board",
    },
    {
      img: "assets/images/teamMate13.svg",
      name: "Chris Abdul-Rahman Blauvelt",
      designation: "Advisory Board",
    },
    {
      img: "assets/images/teamMate14.svg",
      name: "Kameelah Mu’Min Rashad",
      designation: "Advisory Board",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 p-[24px] md:py-[40px] md:px-[40px] lg:py-[60px] lg:px-[100px] bg-white">
      <span className="font-poppins font-[700] text-[#442D87] text-[32px] md:text-[36px] lg:text-[40px] text-start">
        Our Outstanding Teams
      </span>
      <div
        className="w-full flex overflow-x-auto md:flex-wrap md:justify-center justify-start items-center gap-4"
        style={{ scrollbarWidth: "none" }}
      >
        {teamMembers?.map((q, index) => (
          <TeamMateCard
            key={index}
            img={q?.img}
            name={q?.name}
            designation={q?.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
