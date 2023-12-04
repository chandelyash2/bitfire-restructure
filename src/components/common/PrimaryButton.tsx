export interface ButtonProp {
  label: string;
  type: "button" | "submit";
}

export const PrimaryButton = ({ label, type }: ButtonProp) => {
  return (
    <button
      className={`flex rounded-xl bg-primary items-center justify-center font-semibold p-2 lg:text-base min-w-[100px] hover:bg-secondary cursor-pointer w-full`}
      type={type}
    >
      {label}
    </button>
  );
};
