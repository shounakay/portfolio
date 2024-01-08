import React from "react";

export const SkillCard = ({
  heading,
  skills,
}: {
  heading: string;
  skills: string[];
}) => {
  return (
    <div className="flex max-w-56 flex-col gap-1 rounded-sm border border-neutral-500">
      <h3 className="px-1 text-sm font-semibold text-neutral-100">{heading}</h3>
      <div className="w-full border-[0.5px] border-neutral-400" />
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => {
          return <h2 className="px-1 text-sm text-neutral-400">{skill}</h2>;
        })}
      </div>
    </div>
  );
};
