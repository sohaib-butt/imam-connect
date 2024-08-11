import React from "react";
import FAQItem from "./FAQItem";
const index = () => {
  const faqs = [
    {
      question: "How safe is it?",
      answer: `Safety is a primary concern for ImamConnect, and we have done
            extensive work to ensure your information stays protected:
            <ol class="font-poppins font-[400] text-[16px] tracking-[2%] text-[#666666] list-decimal pl-5">
              <li class="mb-4">
                <span class="font-[700]">Vetting Process - </span>
                Each service provider undergoes a comprehensive application
                process, including a DBS/Criminal Background check. Providers are
                encouraged to offer references and space is provided for honest
                reviews.
              </li>
              <li class="mb-4">
                <span class="font-[700]">Secure Messaging - </span>
                Our platform ensures you never need to reveal personal contact
                details until you are comfortable.
              </li>
              <li class="mb-4">
                <span class="font-[700]">Data Security - </span>
                Your personal information is securely held on encrypted servers
                and never shared with any other company or agency.
              </li>
              <li class="mb-4">
                <span class="font-[700]">Payment Safety - </span>
                All transactions are conducted via our encrypted ImamConnect
                payment platform. Members must not arrange payments outside this
                system for safety and oversight.
              </li>
            </ol>`,
    },
    {
      question: "Can I book a Service Provider before speaking to them?",
      answer: `Yes, you can. However, it is recommended to contact them first to discuss  availability and schedule a suitable time for your session.`,
    },
    {
      question: "What happens after my request is accepted?",
      answer: `Once you have messaged the Service Provider and agreed on a time and date,  you can book their services by clicking the <span class="font-[700] text-[#00BAC2]">Book Now</span> button.`,
    },
    {
      question:
        "Is there a proper dialogue / conversation or a call or is this a service that provides support purely through the ImamConnect chat platform?",
      answer: `You have full access to the Service Provider through any medium you both  decide on, including video calls, phone conversations, or in-person meetings`,
    },
    {
      question:
        "What is the time frame for receiving a response from a Service Provider?",
      answer: `Response times vary as each Service Provider is different. However, our  dedicated customer service team is available to follow up with the Service  Provider or suggest other suitable providers.`,
    },
    {
      question: "How Does ImamConnect Screen Service Providers?",
      answer: `ImamConnect screens all Service Providers for authenticity, reliability, and  safety. They are assigned one of three screening levels based on their  provided services:
            <ol class="font-poppins font-[400] text-[16px] tracking-[2%] text-[#666666] list-decimal pl-5">
              <li class="mb-4">
                <span class="font-[700]">Basic Screening -  </span>
                Includes identity confirmation and authenticating  testimonials or referrals.
              </li>
              <li class="mb-4">
                <span class="font-[700]">Intermediate Screening - </span>
                Includes basic screening elements plus proof of  professional qualifications.
              </li>
              <li class="mb-4">
                <span class="font-[700]">Enhanced Screening - </span>
                Includes all previous levels plus a valid DBS or  Criminal Records check, depending on the country of residency.
              </li>
            </ol>`,
    },
    {
      question: "How much does it cost?",
      answer: `Joining, searching, or offering services is free. ImamConnect provides all  necessary information, such as background checks, detailed profiles,  availability, and transparent rates. A standard agreed-upon fee is taken from  the money paid to the provider.`,
    },
    {
      question: "What happens if something goes wrong?",
      answer: `If anything goes wrong, our dedicated customer service team is available to  help. Contact us anytime if something feels off or if you encounter issues. Weʼll  work to find immediate solutions and restore your peace of mind.`,
    },
    {
      question:
        "Why should I use ImamConnect over other platforms like  Facebook groups or my local community?",
      answer: `Yes, ImamConnect is open to anyone searching for or offering Muslim services,  including religious instruction, wedding planning, counseling, funeral services,  writing wills, and inheritance matters.
            <div class="mb-4">
                <span class="font-[700]">For Customers - </span>
                ImamConnect offers reliable, trustworthy providers at any time  with no waiting. A simple interface, clear categories, and transparent reviews  make your search effective. Our secure payment process ensures a hassle free transaction.
              </div>
              <div class="mb-4">
                <span class="font-[700]">For Providers - </span>
                ImamConnect allows you to offer your skills to a wide audience.  Build a comprehensive profile, set your rates, and connect with customers looking for your services. Detail your availability and terms upfront, ensuring  you get paid on time.
              </div>`,
    },
    {
      question: "Can anybody join ImamConnect?",
      answer: `Yes, ImamConnect is open to anyone searching for or offering Muslim services,  including religious instruction, wedding planning, counseling, funeral services,  writing wills, and inheritance matters.
            <ol class="font-poppins font-[400] text-[16px] tracking-[2%] text-[#666666] list-decimal pl-5">
              <li class="mb-4">
                <span class="font-[700]">Customers - </span>
                Join and begin connecting with qualified providers within  minutes.
              </li>
              <li class="mb-4">
                <span class="font-[700]">Providers - </span>
                Complete our application process, which includes a background  check. Once approved, you can start connecting with customers nationwide.
              </li>
            </ol>`,
    },
    {
      question: "Can I be both a provider and a customer?",
      answer: `Absolutely. Once you join ImamConnect, your online dashboard will guide you  through the different sections of your profile, allowing you to act as both a  customer and an approved provider. Choose the one you need and start connecting.`,
    },
  ];
  return (
    <div className="p-[24px] md:py-[40px] md:px-[40px] lg:px-[100px] flex flex-col gap-4 w-full">
      <span className="font-poppins font-[700] text-[28px] md:text-[32px] lg:text-[40px] tracking-[2%] text-[#442D87]">
        Frequently Asked Questions
      </span>
      <div className="w-full border border-[#E7E7E7] rounded-[16px]">
        {faqs?.map((f, index) => (
          <div className="w-full" key={index}>
            <FAQItem
              question={f?.question}
              answer={f?.answer}
              lastIndex={faqs?.length - 1 === index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
