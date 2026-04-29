const ButtonComponent = ({
  onClick,
  text,
  className = "",
  isbgRed = true,
}: {
  onClick: () => void;
  text: string;
  className?: string;
  isbgRed?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-8 py-3 text-center font-graphikTrial font-medium text-sm lg:text-base uppercase transition-all border ${isbgRed ? "bg-[#EE1F26] hover:bg-red-600 text-white" : "bg-transparent hover:bg-[#e4002a09] border-[#E4002B] text-[#E4002B]"} ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
