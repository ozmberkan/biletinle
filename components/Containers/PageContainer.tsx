import React from "react";

const PageContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`my-4 ${className}`}>{children}</div>;
};

export default PageContainer;
