type Props = {
  steps: { id: number; label: string }[];
  currentStep: number;
  setCurrentStep: (stepId: number) => void;
};
const Tabs = ({ steps, currentStep, setCurrentStep }: Props) => {
  return (
    <div className="w-[28%] ">
      <div className="space-y-6 border-r border-[#DCDCDC] pb-16 pt-2">
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
                      isCompleted || isActive
                        ? " border-[#E4002B]  text-[#E4002B]"
                        : "border-[#A1AEBE] text-[#242E39]"
                    }`}
                  >
                    {String(step.id).padStart(2, '0')}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-[#A1AEBE] mt-2"></div>
                  )}
                </div>
                <div className="">
                  <p className="font-medium text-sm text-[#ADADAD]">Step {String(step.id).padStart(2, '0')}</p>
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
    </div>
  );
};

export default Tabs;
