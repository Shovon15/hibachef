// "use client";

const Fallback = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div
        className="absolute top-[7vw] md:top-[15vw] lg:top-[-10vw] left-1/2 -translate-x-1/2
               w-[200vw] h-[200vw] md:w-[100vw] md:h-[100vw]
               rounded-full pointer-events-none opacity-40 z-0"
        style={{
          background:
            "radial-gradient(49.39% 49.39% at 50% 50%, #E1251B 0%, rgba(225, 37, 27, 0) 100%)",
        }}
      />
      <div className="relative z-10 fade-soft">
        
      </div>
    </div>
  );
};

export default Fallback;
