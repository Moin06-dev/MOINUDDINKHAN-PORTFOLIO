import React from "react";

function Button({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  if (type === "secondary")
    return (
      <button className="bg-green-regular group text-xs lg:text-base py-2 px-4 text-navy-dark font-mono sm:py-3 sm:px-10 rounded-md sm:border border-green-regular curson-pointer hover:text-green-dark hover:bg-navy-regular transition-color duration-200 ease-in-expo hover:outline hover:outline-offset-2 hover:border-2 flex items-center space-x-1 sm:text-sm shadow-neu-sm">
        {children}
      </button>
    );

  return (
    <button className="group text-green-regular lg:text-base text-xs py-2 px-4 sm:py-3 sm:px-10 border border-green-regular rounded-md hover:bg-green-regular sm:text-sm hover:text-navy-dark hover:border-navy-dark transition-all duration-200 ease-in-expo cursor-pointer font-mono hover:outline hover:outline-green-regular hover:outline-offset-1 flex items-center space-x-1 shadow-neu-sm">
      {children}
    </button>
  );
}

export default Button;
