import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full p-3 lg:px-10 lg:py-4">{children}</div>;
};

export default Container;
