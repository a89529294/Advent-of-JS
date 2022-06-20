import React from "react";
function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="h-full pt-12 pb-6 overflow-auto bg-white w-96 rounded-3xl">
      <h2 className="font-bold text-3xl ml-9 leading-[48px] mb-9">{title}</h2>
      {children}
    </div>
  );
}
export default Card;
