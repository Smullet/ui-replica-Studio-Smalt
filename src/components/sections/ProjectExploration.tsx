
import React from 'react';

export const ProjectExploration: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-full md:max-w-[1356px] w-full mx-auto my-12 md:my-24 px-4 md:px-12 py-8 md:pt-[157.61px] md:pb-[69.39px] rounded-3xl bg-gradient-to-r from-[#123293] to-[#1e4ba8]">
      <div className="flex w-full max-w-[1017px] flex-col items-start gap-4">
        <div className="flex justify-center items-center pt-2">
          <h2 className="font-bold text-2xl md:text-[31px] text-white w-full md:w-[371px] md:h-20 shrink-0 leading-7 md:leading-[37.2px]">
            Explorons ensemble votre projet
          </h2>
        </div>
        <p className="font-normal text-lg md:text-xl text-white self-stretch leading-6 md:leading-8">
          Organisons un premier échange pour mieux comprendre vos objectifs et poser les bases d'une collaboration réussie.
        </p>
        <button className="flex items-start gap-2.5 border bg-[#102D84] px-4 md:px-6 py-3 md:py-4 rounded-[14px] border-solid border-[#121212] hover:bg-[#0f2970] transition-colors">
          <span className="font-bold text-sm md:text-base text-white text-center leading-4 md:leading-[19.2px]">
            Discuter de votre projet
          </span>
        </button>
      </div>
    </section>
  );
};
