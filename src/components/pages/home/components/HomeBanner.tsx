"use client";
import ImageComponent from "@/components/common/image";
import bannerImage from "@/assets/images/banner.png";

type Props = {
  data?: any;
};

const HomeBanner = ({ data }: Props) => {
  return (
    <section className="relative w-full overflow-hidden aspect-[390/750] md:aspect-[1152/968] xl:aspect-[1152/648]">
      <div className="relative w-full h-full">
        <ImageComponent
          src={bannerImage}
          alt="banner"
          className="object-cover w-full h-full"
        />

        {/* Content */}
        <div className="absolute top-[20%] md:inset-0 flex items-center">
          <div className="w-full px-[5.13vw] md:px-[8.599vw]">
            <div className="md:max-w-xl text-white">
              {/* <TwoLineHeading
                  topText={data?.title}
                  bottomText={data?.subtitle}
                  className="text-left text-[clamp(40px,_calc(3.7396vw+23.9197px),_95.72px)]"
                />

                <Paragraph
                  className="text-[clamp(14px,1.2vw,16px)] md:max-w-[76%] pt-[30px]"
                  content={data?.content}
                /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;


