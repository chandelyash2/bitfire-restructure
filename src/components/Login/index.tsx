"use client";
import { useAuthUserLoginMutation } from "@/graphql/generated/schema";
import { setCookies } from "@/utils/cookies";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useContext, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "../common/Loader";
import { PrimaryButton } from "../common/PrimaryButton";
import { CMSModal } from "@/context";
import { Input } from "../common/Input";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface FormValues {
    userName: string;
    password: string;
}

const FormSchema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});
export const Login = () => {
    const { setLoginActive } = useContext(CMSModal);
    const [viewPswd, setViewPswd] = useState(false);
    const [login, { loading: loginLoading }] = useAuthUserLoginMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(FormSchema) });
    const router = useRouter();

    const submitHandler = async (data: FormValues) => {
        const response = await login({
            variables: {
                input: {
                    userName: data.userName,
                    password: data.password,
                },
            },
        });
        const output = response.data?.authUserLogin;
        if (output?.error) {
            toast.error(output.error.message);
        } else {
            output?.token && setCookies("token", output?.token);
            toast.success("User Logged In!!");
            router.push("/");
        }
    };
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-10 lg:flex-row">
            <div className="flex-[.8] flex flex-col items-center w-full ">
                <div className="flex flex-col gap-10 text-left items-center">
                    <Link href="/">
                        <Image
                            src="/bitlogo.png"
                            width="100"
                            height="100"
                            alt="logo"
                        />
                    </Link>
                    <h1 className="text-3xl font-bold lg:text-5xl">
                        Welcome Back!
                    </h1>
                    <h3 className="text-xl font-semibold">
                        Watch. Improve. Achieve.
                    </h3>
                </div>
            </div>
            <div className="flex-[1] flex flex-col items-center">
                <div className="flex flex-col gap-6 text-left">
                    <h2 className="text-xl font-bold lg:text-3xl">
                        Log in to your account
                    </h2>
                    <span>Welcome back! Please enter your details</span>
                    <form
                        className="flex flex-col gap-6"
                        onSubmit={handleSubmit(submitHandler)}
                    >
                        <Input
                            label="Username"
                            name="userName"
                            type="text"
                            register={register}
                            error={errors.userName?.message}
                        />
                        <div className="relative">
                            <Input
                                label="Password"
                                name="password"
                                type={viewPswd ? "text" : "password"}
                                error={errors.password?.message}
                                register={register}
                            />
                            <span
                                className="absolute top-[50%] right-5 cursor-pointer"
                                onClick={() => setViewPswd(prev => !prev)}
                            >
                                {!viewPswd ? <IoMdEyeOff /> : <IoMdEye />}
                            </span>
                        </div>
                        <PrimaryButton label="Login" type="submit" />
                    </form>
                    <Toaster />
                    {loginLoading && <Loader />}
                </div>
            </div>
        </div>
    );
};
