import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full relative bg-white">
      <div className="flex w-full h-[400px] sm:h-[600px] md:h-[789px] flex-col justify-center items-center gap-5 shrink-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb2c0d51f561d5da5d165488fb896cc5240c3df?placeholderIfAbsent=true"
          alt="Hero Section"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-center items-center bg-[#F6F7F9] px-4 sm:px-0 py-12 sm:py-24">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45b5d923c2f343297c781b04d05a5423bf72afbd?placeholderIfAbsent=true"
          alt="Services"
          className="flex max-w-[1438px] w-full flex-col justify-center items-start gap-16 px-6 py-0"
        />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4499512b4546ed4166eeba97fa37baa39b32caf6?placeholderIfAbsent=true"
        alt="Introduction"
        className="flex w-full h-auto max-h-[400px] sm:max-h-[600px] md:max-h-[789px] object-cover justify-center items-center gap-12"
      />
    </section>
  );
};
