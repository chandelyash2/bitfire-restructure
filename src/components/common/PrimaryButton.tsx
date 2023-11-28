import Link from "next/link";

export interface ButtonProp {
  label: string;
  link: string;
}

export const PrimaryButton = ({ label, link }: ButtonProp) => {
  return (
    <Link
      className={`flex rounded-xl bg-primary items-center justify-center font-semibold p-2 lg:text-base min-w-[100px] hover:bg-secondary`}
      href={link}
    >
      {label}
    </Link>
  );
};
