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

export default function SignUp() {
  const router = useRouter();
  const role = Cookies.get("role");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUpButton = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      email,
      password,
      role,
      agreed,
    };

    Cookies.set("email", email);
    Cookies.set("payload", JSON.stringify(payload));
    router.push("/auth/verify-otp");


    console.log("payload", payload);
  };

  return (
    <div className="w-full max-w-[520px] p-2 lg:p-0">
      <div className="rounded-2xl bg-[#00081F] border border-[#1e2d50] p-4 lg:p-10 flex flex-col items-center gap-6 shadow-2xl">
        {/* Logo */}
        <Link href="/">
          <img src={mainLogo.src} alt="Commi Logo" />
        </Link>

        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold tracking-wide text-white">
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

          {/* Confirm Password */}
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="confirmPassword"
              className="text-white font-semibold text-sm"
            >
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-[#0a1628] border-[#1e2d50] text-white placeholder:text-[#4a5a7a] focus-visible:ring-[#FF6041] focus-visible:border-[#FF6041] rounded-lg h-12 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5a7a] hover:text-white transition-colors"
              >
                {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
              className="border-[#4a5a7a] data-[state=checked]:bg-[#FF6041] data-[state=checked]:border-[#FF6041]"
            />
            <label
              htmlFor="terms"
              className="text-[#97a5c0] text-xs cursor-pointer select-none"
            >
              By continuing, I agree to the{" "}
              <Link
                href="/terms"
                className="underline hover:text-[#FF6041] transition-colors"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline hover:text-[#FF6041] transition-colors"
              >
                Privacy Policy
              </Link>
            </label>
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

        {/* Login link */}
        <p className="text-[#97a5c0] text-sm">
          Already have an account?{" "}
          <Link
            href="/auth?mode=login"
            className="font-semibold underline underline-offset-2 hover:text-[#ff6b35] transition-colors text-white"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
