import { Devices, Hammer, HouseSimple, Link, User } from "@phosphor-icons/react";

export default function Navigation() {
  return (
    <div className="flex flex-col border-2 border-porta rounded-lg opacity-70 gap-6 bg-parede p-1">
      <a href="#home">
      <HouseSimple size={38} weight="fill" color="#440a0b"/>
      </a>

      <a href="#projects ">
      <Devices size={38} weight="fill" color="#440a0b"/>
      </a>

      <a href="#about">
      <User size={38} weight="fill" color="#440a0b"/>
      </a>
      
      <a href="#tools">
      <Hammer size={38} weight="fill" color="#440a0b"/>
      </a>     

      <a href="#contact">
      <Link size={38} weight="fill" color="#440a0b"/>
      </a>     
    </div>
  );
}
