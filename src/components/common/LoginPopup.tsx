"use client";
import React, { useContext, useState } from "react";
import { CMSModal } from "@/context";
import { Modal } from "./Modal";
import Image from "next/image";
import { Input } from "./Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { PrimaryButton } from "./PrimaryButton";
import Container from "./Container";
import {
  MeDocument,
  useAuthUserLoginMutation,
} from "@/graphql/generated/schema";
import { Toaster, toast } from "react-hot-toast";
import { setCookies } from "@/utils/cookies";
import { Loader } from "./Loader";
interface FormValues {
  userName: string;
  password: string;
}

const FormSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
export const LoginPopup = () => {
  const { setUserInfo, setLoginActive } = useContext(CMSModal);
  const [viewPswd, setViewPswd] = useState(false);
  const [login, { loading: loginLoading }] = useAuthUserLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
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
    }
    if (output?.user && output.token) {
      setUserInfo(output.user)
      setCookies("token", output.token);
      setLoginActive(false);
      toast.success("User Logged In!!");
    }
  };
  return (
    <Modal close={() => setLoginActive(false)}>
      <Container>
        <div className="flex flex-col items-center mt-10">
          <Image src="/bitlogo.png" width={50} height={50} alt="logo" />
          <form
            className="flex flex-col gap-2 mt-8 lg:w-[70%] w-full"
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
                className="absolute top-[50%] right-5 cursor-pointer text-black"
                onClick={() => setViewPswd((prev) => !prev)}
              >
                {!viewPswd ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <PrimaryButton label="Login" type="submit" />
          </form>
        </div>
        {loginLoading && <Loader />}
      </Container>
    </Modal>
  );
};
