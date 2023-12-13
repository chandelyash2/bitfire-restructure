export interface ButtonProp {
  label: string;
  type: "button" | "submit";
  onClick?: () => void;
}

export const PrimaryButton = ({ label, type, onClick }: ButtonProp) => {
  return (
    <button
      className={`flex rounded-xl bg-primary items-center justify-center font-semibold p-2 lg:text-base min-w-[100px] hover:bg-secondary cursor-pointer w-full`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
