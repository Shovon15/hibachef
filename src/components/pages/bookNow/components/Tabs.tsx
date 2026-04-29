type Props = {
  steps: { id: number; label: string }[];
  currentStep: number;
  setCurrentStep: (stepId: number) => void;
};
const Tabs = ({ steps, currentStep, setCurrentStep }: Props) => {
  return (
    <>
      <div className="space-y-6 hidden lg:block">
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
                  <p className="font-medium text-sm font-graphikTrial text-[#ADADAD]">
                    Step {String(step.id).padStart(2, "0")}
                  </p>
                  <p
                    className={`text-xl font-semibold font-graphikTrial  ${
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
      <div className="w-full block lg:hidden"> 
        <div className="grid grid-cols-5 items-center gap-4 min-w-max ">
          {steps.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;

            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className=" items-center text-center relative"
              >
                {/* Circle */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center mx-auto justify-center text-xs font-bold border-2 ${
                    isCompleted
                      ? "bg-[#E4002B] text-white border-[#E4002B]"
                      : isActive
                        ? "border-[#E4002B] text-[#E4002B]"
                        : "border-[#A1AEBE] text-[#242E39]"
                  }`}
                >
                  {isCompleted ? "✓" : String(step.id).padStart(2, "0")}
                </div>

                {/* Line */}
                {index < steps.length - 1 && (
                  <div className="w-[50%] h-[2px] bg-[#A1AEBE]  absolute top-0 bottom-0 -right-[40%] m-auto transform "></div>
                )}
                {isCompleted ||
                  (isActive && (
                    <div className={`absolute w-max flex jusitfy-start  flex-col top-full  ${step.id >= 5 ? "right-[30%] items-end":"left-[40%] items-start"}`}>
                      {/* Text */}
                      <p className="text-xs font-medium font-graphikTrial text-[#ADADAD] mt-2">
                        Step {String(step.id).padStart(2, "0")}
                      </p>

                      <p
                        className={`text-base font-semibold font-graphikTrial ${
                          isCompleted || isActive
                            ? "text-[#E4002B] font-semibold"
                            : "text-black"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  ))}
              </button>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default Tabs;
