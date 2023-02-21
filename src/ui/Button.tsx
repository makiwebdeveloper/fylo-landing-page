import { FC } from "react";

interface Props {
  styles?: string;
}

const Button: FC<Props> = ({ children, styles }) => {
  return (
    <button
      className={`bg-gradient-to-r from-cyan-400 to-cyan-600 min-w-[200px] font-semibold tracking-wider text-sm px-4 py-3 rounded-full text-white ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
