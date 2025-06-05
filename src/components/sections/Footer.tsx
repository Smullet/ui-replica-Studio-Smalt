
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex w-full flex-col justify-center items-center gap-8 md:gap-16 bg-[#1C1E28] px-4 md:px-0 py-12 md:py-24">
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] items-center gap-6 px-4 md:px-6 py-0">
        <div className="flex flex-col items-start gap-6 flex-1">
          <h2 className="font-bold text-xl md:text-[25px] text-[#E7EBF4] w-full md:w-[554px] leading-6 md:leading-[30px] uppercase">
            Pourquoi choisir Studio Smalt ?
          </h2>
          <p className="font-normal text-base md:text-lg text-[#E7EBF4] self-stretch leading-6 md:leading-[26px]">
            ✅ Expertise produit et UX/UI : de l'idée au produit final, en passant par des ateliers de cadrage, des tests utilisateurs et des itérations rapides.
            <br />✅ Approche agile et humaine : nous travaillons main dans la main avec vos équipes pour co-construire des solutions qui répondent à vos enjeux business et utilisateurs.
            <br />✅ Transparence et réactivité : devis sous 24h, planning clair, livrables concrets, accompagnement sur-mesure.
          </p>
        </div>
        <div className="flex-[1_0_0] self-stretch">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75b01f33a72d653b4e812bb3dde9c033300fb6d0?placeholderIfAbsent=true"
            alt="Team"
            className="w-full h-[200px] md:h-[314px] rounded-[14px] object-cover"
          />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9245f72b752aef2d59d854e69100af0f322bb497?placeholderIfAbsent=true"
        alt="Footer decoration"
        className="flex w-full flex-col justify-center items-center gap-2 h-32 md:h-52"
      />
    </footer>
  );
};
