type Props = {
  steps: { id: number; label: string }[];
  currentStep: number;
  setCurrentStep: (stepId: number) => void;
};
const Tabs = ({ steps, currentStep, setCurrentStep }: Props) => {
  return (
    <div className="w-[28%] h-fit border-r border-[#DCDCDC] pb-10 pt-2 ">
      <div className="space-y-6 ">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className="w-full text-left hover:opacity-80 transition-opacity"
            >
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
                      isCompleted
                        ? " border-[#E4002B]  text-white bg-[#E4002B]"
                        : isActive
                          ? " border-[#E4002B]  text-[#E4002B]"
                          : "border-[#A1AEBE] text-[#242E39]"
                    }`}
                  >
                    {isCompleted ? "✓" : String(step.id).padStart(2, "0")}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-[#A1AEBE] mt-2"></div>
                  )}
                </div>
                <div className="">
                  <p className="font-medium text-sm text-[#ADADAD]">
                    Step {String(step.id).padStart(2, "0")}
                  </p>
                  <p
                    className={`text-xl  ${
                      isCompleted || isActive
                        ? "text-[#E4002B] font-semibold"
                        : "text-[#000000] font-normal"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {currentStep >= 3 && currentStep <= 5 && (
        <div className="bg-[#F2F2F2] px-5 py-5.5 rounded-2xl max-w-[265px] mt-10.5 space-y-5">
          <p className=" font-graphikTrial font-semibold text-[#000000] text-xl">
            Total Billing
          </p>
          <p className=" font-graphikTrial font-normal text-base text-[#000000] flex justify-between items-center">
            <span>Sub Total</span>
            <span>$803.00</span>
          </p>
          <p className=" font-graphikTrial font-normal text-base text-[#000000] flex justify-between items-center">
            <span>Tax</span>
            <span>$72.27</span>
          </p>
          <hr className="border-t border-[#DCDCDC] border-dashed" />
          <p className=" font-graphikTrial font-medium text-base text-[#000000] flex justify-between items-center">
            <span>Total</span>
            <span className="text-[#E4002B]">$875.27</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Tabs;
