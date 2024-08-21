import React from "react";

const index = () => {
  const touText = {
    agreementHeading: "1. Your Agreement",
    agreements: [
      "Imam Connect Limited (‘XXX’, ‘we’, ‘us’, ‘our’) is a company incorporated under the laws of England. This document represents a legal document that sets out the basis and terms upon which Imam Connect provides a booking and purchase platform (“the Services”) for Imam Services (as defined hereunder) that are performed in each and every case by Independent Professionals (as defined hereunder) and/or Other Services (as defined hereunder) to be provided by the Other Services Providers (as defined hereunder). In providing the Services, we act as the commercial agent of the Independent Professionals and Other Services Providers and not their employers.",
      "The Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 require us to give you certain key information for there to be a legally binding contract between you and us. This information is set out below and is also linked in the email which we will send to you to confirm any booking or purchase of Imam Services or Other Services.",
      "The Imam Services and Other Services are searchable and can be booked and purchased through  our website www.imamconnect.com (“Website”) In enabling you to purchase Imam Services and/or Other Services through the Website we are acting as the commercial agent of those Independent Professionals and/or our partners, affiliates and third party services providers. As part of the services we provide, we also provide some ancillary services such as assisting with customer service issues (again in our capacity as agent for the Independent Professionals and the Other Services Providers).",
      "However, as stated above, the contract for the purchase of the Imam Services and Other Services is between you and the Independent Professional or Other Services Providers (as the case may be). This means that it is the Independent Professional or Other Services Providers and not us who is legally responsible for providing the Imam Services and/or Other Services (as the case may be) to you. However, we remain responsible in respect of its obligations to you in accordance with these terms of use (“Terms of Use”) which shall be legally binding.",
      "Imam Connect shall, if requested, provide intermediary services between you and an Independent Professional and/or Other Services Providers in connection with customer service or dispute resolution matters.",
      "Please read these Terms of Use carefully before proceeding with the Website and/or use the Imam Services and/or Other Services.",
      "This Terms of Use, along with our Privacy Policy at https://www.imamconnect/privacy-policy and other guidelines highlighted to you (collectively “Legal Terms”), constitute the entire and only agreement between you and Imam Connect, and supersedes all other agreements, representations, warranties and understandings with respect to the Website, the Services, the Imam Services, the Other Services and the other matters contained herein.",
      "By using the Website, the Services or the Imam Services or Other Services, you agree to fully comply with and be bound by our Legal Terms. Please review them carefully. If you do not accept our Legal Terms, do not access and use the Website and the Services. If you have already accessed the Website or Services and do not accept our Legal Terms, you should immediately discontinue use of the Website or Services.",
      "When booked through us, the Imam Services and Other Services you receive will be subject to the Independent Professional’s and terms and conditions and/or that of the Other Services Providers (“Service Provider’s Terms”). You will be provided with and asked to confirm your acceptance of the Services Provider’s Terms when making a booking through us.Imam Connect is not a party to the Services Provider’s Terms: those terms will solely be between you and the Independent Professional who provides you with the Imam Services or the representative of the Other Services Providers who provided the Other Services (as the case may be).",
    ],
    definitionsHeading: "1. Definitions",
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
  };

  return (
    <div className="w-full px-[24px] md:py-0 md:px-[80px] lg:px-[150px] bg-white">
      <div className="w-full h-[1250px] overflow-y-hidden relative">
        <span className="font-poppins font-[700] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]">
          {touText?.agreementHeading}
        </span>
        <br />
        <ul>
          {touText?.agreements?.map((a, index) => (
            <li
              key={index}
              className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]"
            >
              {a}
            </li>
          ))}
        </ul>
        <span className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px] ml-2">
          {touText?.definitionsHeading}
        </span>
        <br />
        <span className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]">
          {touText?.definitionsText}
        </span>
        <ul>
          {touText?.definitions?.map((d, index) => (
            <li
              key={index}
              className="font-poppins font-[400] text-[16px] text-[#000000] text-left leading-[32px] tracking-[-0.94px]"
            >
              {d}
            </li>
          ))}
        </ul>
        <div className="sticky bottom-0 w-full bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF00] z-50 h-[313px] flex justify-center items-end pb-10 md:pb-20">
          <a
            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            download
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
