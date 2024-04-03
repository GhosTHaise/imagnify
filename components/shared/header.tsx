import React from "react";

type Props = {
  title: string;
  subTitle?: string;
};
const Header = ({ title, subTitle }: Props) => {
  return (
    <>
      <h2 className="h2-bold text-dark-600">{title}</h2>
      {subTitle && <p className="p-16-regular mt-4">{subTitle}</p>}
    </>
  );
};

export default Header;
