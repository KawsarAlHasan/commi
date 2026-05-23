"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import mainLogo from "@/public/images/auth-logo.png";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUpButton = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      email,
      password,
      agreed,
    };

    Cookies.set("payload", JSON.stringify(payload));
    Cookies.set("email", email);
    router.push("/");

    console.log("payload", payload);
  };

  return (
    <div className="w-full max-w-[520px]  p-2 lg:p-0">
      <div className="rounded-2xl bg-[#00081F] border border-[#1e2d50] p-4 lg:p-10 flex flex-col items-center gap-6 shadow-2xl">
        {/* Logo */}
        <Link href="/">
          <img src={mainLogo.src} alt="Commi Logo" />
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-wide text-white">
          Create your free account
        </h2>

        {/* Form Fields */}
        <form
          onSubmit={handleSignUpButton}
          className="w-full flex flex-col gap-4"
        >
          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-white font-semibold text-sm">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0a1628] border-[#1e2d50] text-white placeholder:text-[#4a5a7a] focus-visible:ring-[#FF6041] focus-visible:border-[#FF6041] rounded-lg h-12"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="password"
              className="text-white font-semibold text-sm"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#0a1628] border-[#1e2d50] text-white placeholder:text-[#4a5a7a] focus-visible:ring-[#FF6041] focus-visible:border-[#FF6041] rounded-lg h-12 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5a7a] hover:text-white transition-colors"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember-me"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked === true)}
                className="cursor-pointer border-[#4a5a7a] data-[state=checked]:bg-[#FF6041] data-[state=checked]:border-[#FF6041]"
              />
              <label htmlFor="remember-me" className="text-[#97a5c0] text-sm">
                Remember me
              </label>
            </div>

            <Link
              href="/auth/forget-password"
              className="hover:underline hover:text-[#FF6041] transition-colors"
            >
              Forget Password
            </Link>
          </div>

          {/* Sign Up Button */}
          <Button
            type="submit"
            className="cursor-pointer w-full py-3 h-12 rounded-full bg-[#FF6041] hover:bg-[#e85e2a] font-semibold text-sm tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white"
          >
            Sign Up
          </Button>
        </form>

        {/* Divider */}
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 h-px bg-[#1e2d50]" />
          <span className="text-xs text-[#97a5c0]">or</span>
          <div className="flex-1 h-px bg-[#1e2d50]" />
        </div>

        {/* sign up link */}
        <p className="text-[#97a5c0] text-sm">
          Don't have an account?{" "}
          <Link
            href="/auth?mode=signup"
            className="font-semibold underline underline-offset-2 hover:text-[#ff6b35] transition-colors"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
