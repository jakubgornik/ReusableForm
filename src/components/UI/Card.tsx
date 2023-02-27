import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="container mx-auto mt-8 flex flex-col  items-center  justify-center bg-cardBackground sm-mobile:max-w-[85%] sm:max-w-[70%] lg:max-w-[60%]">
      {children}
    </div>
  );
};

export default Card;
