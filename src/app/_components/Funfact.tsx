import React from "react";

export const Funfact = ({ funFact }: { funFact: string }) => {
  return (
    <div className="min-w-fit border border-neutral-400 p-1 text-sm text-neutral-200">
      {funFact}
    </div>
  );
};
