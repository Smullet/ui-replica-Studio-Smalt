import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="flex w-full flex-col justify-center items-center bg-white pt-24 pb-32 px-0">
      <div className="flex w-full max-w-[1356px] flex-col justify-center items-center gap-16 px-6 py-0">
        <div className="flex w-full flex-col items-center gap-[104px]">
          <div className="flex flex-col items-center gap-[22px] self-stretch">
            <h2 className="text-[#123293] text-center text-[61px] font-black leading-[64px] tracking-[-2.44px]">
              <span className="text-[#191818]">Parlons de </span>
              <span className="text-[#123293]">votre projet</span>
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <div className="flex w-[351px] min-h-[425px] flex-col items-center gap-4 bg-[#123293] p-3 rounded-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3594c97169ba15348a1b280e69c54291ffdb6259?placeholderIfAbsent=true"
              alt="Discussion"
              className="h-[204px] self-stretch rounded-md"
            />
            <h3 className="font-bold text-xl text-white w-[296px] leading-8">
              Parlez-moi de votre projet
            </h3>
            <p className="font-normal text-base text-white w-[297px] leading-[19.2px]">
              Un échange de 30 minutes pour comprendre vos besoins et voir comment Studio Smalt peut transformer votre idée en produit digital concret et performant.
            </p>
          </div>
          <div className="flex w-[351px] min-h-[425px] flex-col items-center gap-4 bg-[#F9D45C] p-3 rounded-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b42eab2bbc9bd1d19de2226a581dbecb2bbf56?placeholderIfAbsent=true"
              alt="Proposition"
              className="h-[204px] self-stretch rounded-md"
            />
            <h3 className="font-bold text-xl text-[#121212] w-[296px] leading-8">
              Recevez une proposition détaillée et sur-mesure
            </h3>
            <p className="font-normal text-base text-[#121212] w-[297px] leading-[19.2px]">
              En moins de 24h, recevez un devis clair et actionnable.
            </p>
          </div>
          <div className="flex w-[351px] min-h-[425px] flex-col items-center gap-4 bg-[#1C1E28] p-3 rounded-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c406a1b60ae11f1e3f2ad98d9cb627050331828e?placeholderIfAbsent=true"
              alt="Quick Start"
              className="h-[204px] self-stretch rounded-md"
            />
            <h3 className="font-bold text-xl text-white w-[296px] leading-8">
              Démarrez rapidement
            </h3>
            <p className="font-normal text-base text-white w-[297px] leading-[19.2px]">
              On définit ensemble le périmètre (atelier de cadrage, recherches, prototype, tests), et vous bénéficiez d'un suivi itératif dès les premiers jours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
