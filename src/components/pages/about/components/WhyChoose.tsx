import ImageComponent from "@/components/common/image";
import MainTitle from "@/components/common/Titles/MainTitle";

const WhyChoose = () => {
  const data = [
    {
      id: 1,
      img: "./why-choose-1.svg",
      text: "Unforgettable Experiences",
      discription:
        "We’re all about making your event stand out. Our hibachi experience adds a unique touch that will have everyone talking long after the event ends.",
    },
    {
      id: 2,
      img: "./why-choose-2.svg",
      text: "Fresh & Flavorful",
      discription:
        "From fried rice to lobster tail, shrimp, and steak, we use only the best ingredients to create dishes that are as delicious as they are visually stunning.",
    },
    {
      id: 3,
      img: "./why-choose-3.svg",
      text: "Tailored Fun",
      discription:
        "Whether you’re hosting an intimate backyard gathering or a large celebration, we bring the same level of excitement and quality to every occasion. ",
    },
    {
      id: 4,
      img: "./why-choose-4.svg",
      text: "24/7 Customer Service",
      discription:
        "Our 24/7 customer service ensures that we're always here to help, making your planning and event experience seamless and stress-free.",
    },
  ];
  return (
    <div className="py-12 mt-3 lg:mt-12">
      <MainTitle text1="Why Choose" text2="Hibachef" className="max-w-[80%] mx-auto"/>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-5 xl:gap-10 mt-10 lg:mt-16">
        {data.map((item) => (
          <div className="flex flex-col  items-center gap-6 xl:gap-10 " key={item?.id}>
            <div className="" >
              <ImageComponent
                src={item.img}
                alt=""
                className="relative z-20 w-full h-full mx-auto max-w-[100px]"
              />
            </div>
            <div className="" >
              <h2
                className={`text-base lg:text-lg xl:text-xl 2xl:text-2xl  font-normal text-center font-cooperBlack text-[#000000]`}
              >
                {item.text}
              </h2>
              <p className=" font-normal font-graphikTrial text-sm xl:text-base text-[#3D3D3D] mt-4 text-center">
                {item.discription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WhyChoose;
