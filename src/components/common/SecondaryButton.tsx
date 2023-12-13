import Link from "next/link";

export interface ButtonProp {
  label: string;
  type: "button" | "submit";
  onClick?: () => void;
}

export const SecondaryButton = ({ label, type, onClick }: ButtonProp) => {
  return (
    <button
      className={`flex rounded-xl bg-secondary items-center justify-center font-semibold p-2 lg:text-base min-w-[100px] hover:bg-primary w-full`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
