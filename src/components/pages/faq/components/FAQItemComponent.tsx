import CloseIcon from "@/assets/icons/CloseIcon";
import X from "@/assets/icons/X";

type FAQItem = {
  question: string;
  answer: string;
};
const FAQItemComponent = ({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className="bg-[#F3F3F3] rounded-xl py-4 lg:py-5 px-4 cursor-pointer transition"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-sm lg:text-base font-medium text-[#151515] font-graphikTrial">
          {item.question}
        </h3>
        {isOpen ? <CloseIcon className="w-5 h-5"/> : <CloseIcon className="w-5 h-5 rotate-45"/>}
      </div>

      {isOpen && (
        <p className="mt-4 text-sm lg:text-base text-[#747474] whitespace-pre-line leading-relaxed font-normal font-graphikTrial">
          {item.answer}
        </p>
      )}
    </div>
  );
};

export default FAQItemComponent;