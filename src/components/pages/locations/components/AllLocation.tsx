import MainTitle from "@/components/common/Titles/MainTitle";
import { MAP_AREAS, MapArea } from "./LocationData";
import NavLink from "@/components/common/link/NavLink";

const AllLocation = () => {
  return (
    <div>
      <MainTitle text1="All " text2="Hibachef Locations" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7.5 lg:mt-12 pb-12 lg:pb-24">
        {MAP_AREAS.map((item: MapArea) => (
          <div key={item.id} className="bg-[#F2F2F2] px-6.5 py-6 rounded-4xl">
            <h2 className=" font-normal font-cooperBlack text-2xl text-[#000000s]">{item.name}</h2>
            <p className=" font-normal font-graphikTrial text-sm lg:text-[15px] text-[#000000] ">Contact with us or book a Hibachef in Colorado</p>
            <NavLink href={""} className="px-8 py-2.5 bg-[#EE1F26] block w-fit rounded-full font-medium font-graphikTrial text-sm lg:text-base text-white mt-4 lg:mt-6 uppercase">
                book now
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLocation;
