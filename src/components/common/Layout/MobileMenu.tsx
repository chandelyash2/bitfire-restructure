import React from "react";
import Container from "../Container";

const menuList = [
  {
    name: "Events",
  },
  {
    name: "My Bet",
  },
  {
    name: "Account",
  },
];
export const MobileMenu = () => {
  return (
    <div className="fixed bottom-0 bg-[#141c33] h-14 lg:hidden w-full">
      <Container>
        <div className="flex items-center justify-between font-semibold">
          {menuList.map((item) => (
            <h3 key={item.name}>{item.name}</h3>
          ))}
        </div>
      </Container>
    </div>
  );
};
