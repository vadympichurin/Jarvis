"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputIcon, Input, Label, Button } from "keep-react";
import { Envelope, Lock, Eye, EyeSlash } from "phosphor-react";

import { redirect } from "next/navigation";

type FormData = {
  mail: string;
  password: string;
};

const USER_EMAIL = "mm@vate.de";

export function SigninForm() {
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (data: FormData) => {;

    if (USER_EMAIL === data.mail) {
      redirect("/");
    } else {
      setError("Ungültiges E-Mail oder Passwort");
      setDisabled(true);
    }
  };

  useEffect(() => {
    if (email && password && !error) {
      setDisabled(false);
    }
  }, [email, password]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mt-8 mb-10 w-80"
    >
      <div>
        <fieldset className="mb-3">
          <div className="space-y-2 ">
            <Label
              htmlFor="mail"
              className="text-[#455468] font-inter font-medium text-sm leading-5 tracking-tight"
            >
              E-Mail
            </Label>
            <div className="relative">
              <Input
                id="mail"
                type="mail"
                {...register("mail")}
                className={
                  errors.mail
                    ? "border-red-500 text-red-500 ps-11  pe-11 focus:outline-none focus:ring-0 focus-visible:ring-offset-0 focus-visible:border-red-500 focus-visible:ring-0 focus-visible:border-1"
                    : "ps-11 focus:outline-none focus:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#455468] focus-visible:ring-0 focus-visible:border-1"
                }
                onChange={handleChangeMail}
              />
              <InputIcon>
                <Envelope
                  size={19}
                  className={
                    errors.mail
                      ? "text-[var(--color-red-500)]"
                      : "text-[#455468]"
                  }
                />
              </InputIcon>
            </div>
            {errors.mail && (
              <p className="text-sm text-red-500 ">Ungültiges E-Mail-Format</p>
            )}
          </div>
        </fieldset>
        <fieldset>
          <div className="space-y-2 relative">
            <Label
              htmlFor="password"
              className=" text-[#455468] font-inter font-medium text-sm leading-5 tracking-tight"
            >
              Passwort
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={isVisible ? "text" : "password"}
                {...register("password")}
                className={
                  errors.password
                    ? "border-[var(--color-red-500)] text-[var(--color-red-500)] ps-11  pe-11 focus:outline-none focus:ring-0 focus-visible:ring-offset-0 focus-visible:border-red-500 focus-visible:ring-0 focus-visible:border-1"
                    : "ps-11 focus:outline-none focus:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#455468] focus-visible:ring-0 focus-visible:border-1"
                }
                onChange={handleChangePassword}
              />
              <InputIcon>
                <Lock
                  size={19}
                  className={
                    errors.password
                      ? "text-[var(--color-red-500)]"
                      : "text-[#455468]"
                  }
                />
              </InputIcon>
              <InputIcon
                onClick={() => setIsVisible(!isVisible)}
                className="absolute pointer-events-auto inset-y-0 start-auto end-3 flex items-center cursor-pointer"
              >
                {isVisible ? (
                  <EyeSlash size={19} color="#455468" />
                ) : (
                  <Eye size={19} color="#455468" />
                )}
              </InputIcon>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">Ungültiges Passwort</p>
            )}
          </div>
        </fieldset>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button
        type="submit"
        className="w-full font-inter font-medium text-sm leading-5 tracking-tight"
        disabled={disabled}
      >
        Einloggen
      </Button>
    </form>
  );
}
