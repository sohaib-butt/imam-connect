"use client";
import React from "react";

const index = () => {
  const privacyText = {
    intro:
      "Imam Connect Ltd (‘ImamConnect’, ‘we’, ‘us’, ‘our’) are committed to protecting and respecting your personal data privacy and complying with data protection principles and provisions under applicable laws, including the Privacy Statutes under the Laws of England and the EU General Data Protect Regulation (“GDPR”).",
    documentIntro:
      "This document represents a legal document that serves as our privacy policy (“Privacy Policy”) which sets out the basis and terms upon which ImamConnect collects, processes, uses and/or discloses your personal information (‘Personal Information’) that is obtained from you when you access ImamConnect’s website www.imamconnect.com (“the Website”) and/or made a booking or purchase of the Imam Services (as defined hereunder) and/or Other Services (as defined hereunder). The Personal Information includes:-",
    personalDocList: [
      "your name;",
      "identification details;",
      "residential address;",
      "telephone number;",
      "email address; and",
      "credit/debit card details.",
    ],
    definitionsHeading: "2. Definitions",
    definitionsText:
      "Capitalized terms, unless otherwise defined, have the meaning specified below:-",
    definitions: [
      "“Affiliate” means any related or associate company of ImamConnect including their successors, assigns and employees.",
      "“Charges” means all service charges, fees, cost of products, subscriptions, administrative charges and other fees to be paid by you for or relating to the Imam Services or Other Services. The Charges will be in accordance with the rates as contained in the Website",
      "“Imam Services” means a range of professional services and products related to the learnings of Islamic scriptures and syllabuses that are performed in each and every case by Independent Professionals",
      "“Independent Professional” means independent self-employed professionals identified by ImamConnect to provide the Imam Services.",
      "“Network” means all networks owned, maintained or operated by, and/or leased or licensed to a telecommunication service provider through which we provide the Services, the Imam Services and the Other Services.",
      "“Other Services” means such other product and services offered and provided by the Other Services Providers on the Website.",
      "“Other Services Providers” means our partners and affiliates and our third party services providers which provides the Other Services.",
      "“Regulatory Authority” means such authority which governs the provision of the Imam Services or the Other Services, its successors and/or assigns in any jurisdiction.",
      "“Services” means the booking and purchase platform provided by ImamConnect for the Imam Services and the Other Services.",
      "“Taxes” means any and all taxes, goods and services tax, duties, levies and other similar charges imposed under any laws of England in respect of the provision of the Imam Services and Other Services or on any Charges or payment due from or payable by you to us.",
      "“Unauthorised Acts” means any tampering, modification, removal, destruction and/or damage of or to the Website, unauthorised connection to the Website, including without limitation, such connections that cause interruption, disruption, congestion in and to the Website, Network or any third party’s networks or systems, or use of the Website for a purpose other than that of the reception of the Imam Services and Other Services according to the Legal Terms.",
      "“Website” means the website www.imamconnect.com or any other website set up by us as the platform for you to register for, book, pay for and access the Imam Services and Other Services.",
      "“you” or “your” when used in this Privacy Policy includes (1) any person who accesses the Website and (2) persons for whom you made a registration and/or purchase of the Imam Services and/or Other Services (including his or his successors and permitted assigns) and anyone appearing to us to be acting with that person’s authority or permission.",
    ],
    readCarefully:
      "Please read this Privacy Policy carefully. Please read this Privacy Policy so that you know and understand the purposes for which we collect, use and disclose your Personal Information.",
    update:
      "We may from time to time update this Privacy Policy to ensure that this Privacy Policy is consistent with future developments, industry trends and/or any changes in legal or regulatory requirements. Subject to any rights that you may have at law, you agree to be bound by the prevailing terms of this Privacy Policy as updated from time to time on the Website. Please ensure that you visit the Website regularly to obtain updated information on the handling of your Personal Information.",
  };

  return (
    <div className="w-full px-[24px] md:py-0 md:px-[80px] lg:px-[150px] bg-white">
      <div className="w-full h-[1250px] overflow-y-hidden relative">
        <span className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]">
          {privacyText?.intro}
        </span>
        <br />
        <span className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]">
          {privacyText?.documentIntro}
        </span>

        <ul className="list-disc pl-5 mb-4">
          {privacyText?.personalDocList?.map((d, index) => (
            <li
              key={index}
              className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]"
            >
              {d}
            </li>
          ))}
        </ul>
        <span className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]">
          {privacyText?.definitionsHeading}
        </span>
        <br />
        <span className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]">
          {privacyText?.definitionsText}
        </span>
        <ul>
          {privacyText?.definitions?.map((d, index) => (
            <li
              key={index}
              className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]"
            >
              {d}
            </li>
          ))}
        </ul>
        <span className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]">
          {privacyText?.readCarefully}
        </span>
        <br />
        <span className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]">
          {privacyText?.update}
        </span>
        <div className="sticky bottom-0 w-full bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF00] z-50 h-[313px] flex justify-center items-end pb-10 md:pb-20">
          <a
            href=""
            download="privacy-policy.pdf"
            className="w-[60%] md:w-[40%] lg:w-[30%] border-[8px] border-[#00BAC2] rounded-[8px] font-poppins font-[700] text-white text-[16px] flex justify-center items-center h-[56px] bg-[#00BAC2]"
            target="_blank"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
