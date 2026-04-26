const MainTitle = ({ text1, text2, className="" }: any) => {
  return (
    <h2
      className={`text-[clamp(2.25rem,3.333vw,4rem)] font-normal text-center font-cooperBlack text-[#000000] ${className}`}
    >
      {text1} <span className="text-[#E4002B]">{text2}</span>
    </h2>
  );
};

export default MainTitle;
