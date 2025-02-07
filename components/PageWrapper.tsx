import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return (
    <div className="px-4 tablet-v:px-8 tablet-h:px-12 laptop:px-16 laptop:max-w-[1280px] mx-auto">
      {children}
    </div>
  );
}

export default PageWrapper;