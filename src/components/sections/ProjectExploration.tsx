import React from 'react';

export const ProjectExploration: React.FC = () => {
  return (
    <section className="flex items-center max-w-[1356px] w-[calc(100%_-_48px)] mx-auto my-24 pl-12 pr-[214.89px] pt-[157.61px] pb-[69.39px] rounded-3xl">
      <div className="flex w-full max-w-[1017px] flex-col items-start gap-4">
        <div className="flex justify-center items-center pt-2">
          <h2 className="font-bold text-[31px] text-white w-[371px] h-20 shrink-0 leading-[37.2px]">
            Explorons ensemble votre projet
          </h2>
        </div>
        <p className="font-normal text-xl text-white self-stretch leading-8">
          Organisons un premier échange pour mieux comprendre vos objectifs et poser les bases d'une collaboration réussie.
        </p>
        <button className="flex items-start gap-2.5 border bg-[#102D84] px-6 py-4 rounded-[14px] border-solid border-[#121212]">
          <span className="font-bold text-base text-white text-center leading-[19.2px]">
            Discuter de votre projet
          </span>
        </button>
      </div>
    </section>
  );
};
