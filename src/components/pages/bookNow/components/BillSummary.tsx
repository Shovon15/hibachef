const BillSummary = ({currentStep}:any) => {
  return (
    <>
      {currentStep >= 3 && currentStep <= 5 && (
        <div className="bg-[#F2F2F2] px-5 py-5.5 rounded-2xl lg:max-w-[265px] mt-10.5 space-y-5">
          <p className=" font-graphikTrial font-semibold text-[#000000] text-xl">
            Total Billing
          </p>
          <p className=" font-graphikTrial font-normal text-sm lg:text-base text-[#000000] flex justify-between items-center">
            <span>Sub Total</span>
            <span>$803.00</span>
          </p>
          <p className=" font-graphikTrial font-normal text-sm lg:text-base text-[#000000] flex justify-between items-center">
            <span>Tax</span>
            <span>$72.27</span>
          </p>
          <hr className="border-t border-[#DCDCDC] border-dashed" />
          <p className=" font-graphikTrial font-medium text-sm lg:text-base text-[#000000] flex justify-between items-center">
            <span>Total</span>
            <span className="text-[#E4002B]">$875.27</span>
          </p>
        </div>
      )}
    </>
  );
};

export default BillSummary;
