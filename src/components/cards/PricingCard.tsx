
import React from 'react';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: {
    amount: string;
    period: string;
    prefix?: string;
  };
  features: Feature[];
  label: string;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  label,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="flex min-h-[480px] md:min-h-[700px] lg:min-h-[980px] items-start gap-2.5 border flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[336px] px-6 py-8 rounded-xl border-solid border-[#123293]">
        <div className="flex w-full flex-col items-start gap-8 md:gap-16">
          <div className="flex h-auto md:h-[350px] md:min-h-[350px] flex-col justify-between items-start self-stretch gap-4 md:gap-0">
            <div className="flex flex-col items-start gap-4 px-0 py-2">
              <h3 className="text-[#123293] text-lg md:text-xl font-bold leading-6 md:leading-8"
                  dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="font-normal text-sm md:text-base text-[rgba(0,0,0,0.54)] w-full max-w-[273px] leading-4 md:leading-[19.2px]">
                {description}
              </p>
            </div>
            <div className="flex items-end gap-[5px]">
              {price.prefix && (
                <span className="font-normal text-lg md:text-[23px] text-[#191818] leading-5 md:leading-[25.3px]">
                  {price.prefix}
                </span>
              )}
              <div className="text-[#191818] text-xl font-bold leading-[52.8px]">
                <span className="font-bold text-3xl md:text-5xl">{price.amount}</span>
                <span className="font-bold text-lg md:text-xl">€</span>
              </div>
              <span className="font-normal text-lg md:text-[23px] text-[#191818] leading-5 md:leading-[25.3px]">
                {price.period}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 md:gap-3.5 self-stretch">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4 self-stretch">
                <div className="flex w-[24px] h-[24px] md:w-[29px] md:h-[29px] justify-center items-center shrink-0">
                  <div className="flex w-[24px] h-[24px] md:w-[29px] md:h-[29px] justify-center items-center shrink-0 bg-[#123293] rounded-[40px]">
                    {feature.icon}
                  </div>
                </div>
                <p className="font-normal text-sm md:text-[15px] text-[#191818] flex-1 leading-5 md:leading-[22.5px] tracking-[-0.45px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex -rotate-2 justify-center items-center gap-2.5 absolute top-[-25px] md:top-[-30px] shadow-[2px_2px_0px_0px_#000] bg-[#123293] p-2 md:p-2.5 rounded-md left-[7px]">
        <span className="font-bold text-xl md:text-[27px] text-white leading-6 md:leading-[32.4px] tracking-[-1.08px]">
          {label}
        </span>
      </div>
    </div>
  );
};
