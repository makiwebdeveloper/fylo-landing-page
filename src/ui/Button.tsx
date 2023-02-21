import { FC } from "react";

interface Props {}

const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
