"use client";
import { Dropdown } from "@/components/common/inputFields/Dropdown";
import InputComponent from "@/components/common/inputFields/InputComponent";
import TextareaComponent from "@/components/common/inputFields/TextareaComponent";
import MainTitle from "@/components/common/Titles/MainTitle";
import ContentContainer from "@/components/layout/container/contentContainer";
import { count } from "console";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    jobTitle: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const OPTIONS = [
    "Grilled Salmon",
    "Filet Mignon",
    "Chicken Parmesan",
    "Vegetarian Pasta",
    "Lobster Tail",
    "Duck Breast",
  ];
  const description = `
                        <p>
                          At Hibachi Chef at Home, we believe your special event deserves an extraordinary culinary touch. For all the details on how we can make your occasion unforgettable, contact us today. Whether it’s a corporate event, family BBQ, graduation party, or other personal gathering, we’re ready to assist with tailored options that fit your needs.
                        </p>
                        <p>
                          Contact us or fill out our contact form, and one of our experts will reach out to discuss our affordable catering options, mouthwatering menu, and customizable packages.
                        </p>
                        <p>
                          We promise quick responses and top-notch service to ensure your event is a hit, with delicious food and a touch of hibachi flair in your own backyard.
                        </p>`
                      ;
  return (
    <div className="bg-[#000000] mt-10 lg:mt-32">
      <ContentContainer className="pt-16 lg:pt-32 pb-32 lg:pb-40 grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-24">
        <div>
          <MainTitle
            text1="Get In Touch "
            text2=""
            textColor="text-white"
            className="text-start"
          />
          <MainTitle
            text1=""
            text2="With Us"
            textColor="text-white"
            className="text-start"
          />
          <div dangerouslySetInnerHTML={{ __html: description }} className="text-white font-graphikTrial font-normal text-sm lg:text-base mt-9 lg:mt-10 space-y-5 lg:space-y-8"/>
        </div>
        <div>
          <p className="font-graphikTrial font-semibold text-base text-white hidden lg:block">Start a conversation with us by filling out the form</p>
          <div className="grid gap-x-14 gap-y-8 lg:gap-y-6 grid-cols-1 lg:grid-cols-2 lg:mt-6">
            <InputComponent
              label="First name *"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className=""
              inputTextColor="text-white"
            />

            <InputComponent
              label="Last name *"
              name="leastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              inputTextColor="text-white"
            />
            <InputComponent
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              inputTextColor="text-white"
            />
            <InputComponent
              label="Organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              inputTextColor="text-white"
            />
            <InputComponent
              label="Job Title"
              name="jobTitle"
              type="text"
              value={formData.jobTitle}
              onChange={handleChange}
              inputTextColor="text-white"
            />
            <InputComponent
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              inputTextColor="text-white"
            />
            <Dropdown
              label="Country *"
              options={OPTIONS}
              placeholder=""
              value={formData.country}
              onChange={handleChange}
              className="lg:col-span-2"
              inputTextColor="text-white"
            />
            <TextareaComponent
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              inputTextColor="text-white"
              className="lg:col-span-2"
            />
          </div>
          <button className="font-graphikTrial font-medium text-sm lg:text-base text-[#FFFFFF] bg-[#EE1F26] py-4 px-16 rounded-full mt-9 lg:mt-14 w-full lg:w-fit">
            Submit
          </button>
        </div>
      </ContentContainer>
    </div>
  );
};

export default ContactForm;
