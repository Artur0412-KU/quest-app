"use client";
import React, { useState } from "react";
import CloseSvg from "@/public/icons/close.svg";
import Google from "@/public/icons/google.svg";
import Facebook from "@/public/icons/image.svg";
import Image from "next/image";
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import { login, signinWithGoogle, signup } from "../../login/actions";

const Login = ({ id }: { id: string }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    login(formData);
  };

  const handleSignup = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    signup(formData);
  };

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white rounded-[8px] px-[32px] pt-[24px] pb-[40px]">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <Image src={CloseSvg} alt="close" />
          </button>
        </form>
        <div className="flex flex-col gap-[32px]">
          <h2 className="font-bold text-lg text-[28px] text-center">Log in</h2>
          <div className="grid grid-cols-2 gap-[12px]">
            <Button
              image={Google}
              onClick={signinWithGoogle}
              className="btn2 btn-active bg-white border-[#dddddd] border rounded-[4px] py-[12px] flex justify-center"
            />
            <Button
              image={Facebook}
              className="btn2 btn-active bg-white border-[#dddddd] border rounded-[4px] py-[12px] flex justify-center"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <hr className="bg-[#DDDDDD] w-full" />
            <p>or</p>
            <hr className="bg-[#DDDDDD] w-full" />
          </div>
          <div className="flex flex-col gap-[16px]">
            <Input
              name="Email"
              type="email"
              value={email}
              className="input input-bordered w-full bg-[#F8F8F8]"
              onChange={handleChangeEmail}
            />
            <Input
              name="Password"
              type="password"
              value={password}
              className="input input-bordered w-full bg-[#F8F8F8]"
              onChange={handleChangePassword}
              forgotText="Forgot"
            />
            <div className="flex flex-col gap-[8px]">
              <Button
                className="btn2 bg-[#E4572E] rounded-[4px] py-[12px] flex justify-center w-full text-white font-semibold"
                text="Log In"
                onClick={handleLogin}
              />
              <Button
                className="btn2 bg-[#228EDF] rounded-[4px] py-[12px] flex justify-center w-full text-white font-semibold"
                text="Sign Up"
                onClick={handleSignup}
              />
              <p className="text-center text-[#808080] text-[14px]">
                New here?{" "}
                <span
                  className="text-[#228EDF] cursor-pointer"
                  onClick={() => {
                    const currentModal = document.getElementById(
                      id
                    ) as HTMLDialogElement;
                    const newModal = document.getElementById(
                      "my_modal_6"
                    ) as HTMLDialogElement | null;

                    if (currentModal) currentModal.close();
                    if (newModal) newModal.showModal();
                  }}
                >
                  Create a 404Quest account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Login;
