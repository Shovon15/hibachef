import MainTitle from "@/components/common/Titles/MainTitle";
import { MAP_AREAS, MapArea } from "./LocationData";
import NavLink from "@/components/common/link/NavLink";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import routes from "@/config/routes";

const AllLocation = () => {
  return (
    <div>
      <MainTitle text1="All " text2="Hibachef Locations" />

      <div className="flex flex-wrap gap-6 mt-7.5 lg:mt-12 pb-12 lg:pb-24">
        {[...MAP_AREAS]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item: MapArea) => (
            <div
              key={item.id}
              className="bg-[#F2F2F2] px-6.5 py-6 rounded-4xl w-full lg:w-[calc((100%-48px)/3)]"
            >
              <h2 className="font-normal font-cooperBlack text-2xl text-[#000000]">
                {item.name}
              </h2>

              <p className="font-normal font-graphikTrial text-sm lg:text-[15px] text-[#000000]">
                Contact with us or book a Hibachef in {item.name}
              </p>

              <NavLink href={routes.bookNow} className="block w-fit mt-4">
                <PrimaryButton innerClassName="py-1.5 text-[clamp(14px,1.2vw,16px)]">
                  Book Now
                </PrimaryButton>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllLocation;
