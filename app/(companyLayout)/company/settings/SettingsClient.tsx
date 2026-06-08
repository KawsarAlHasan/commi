"use client";

import { JSX, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Support from "./_settingComponents/Support";
import GiveFeedBack from "./_settingComponents/GiveFeedBack";
import AccountDetails from "./_settingComponents/AccountDetails";

type Tab = "feedback" | "support" | "account";

export default function SettingsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabFromUrl = searchParams.get("tab") as Tab | null;
  const [activeTab, setActiveTab] = useState<Tab>(
    tabFromUrl && ["feedback", "support", "account"].includes(tabFromUrl)
      ? tabFromUrl
      : "account"
  );

  useEffect(() => {
    if (
      tabFromUrl &&
      ["feedback", "support", "account"].includes(tabFromUrl) &&
      tabFromUrl !== activeTab
    ) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    router.replace(`/company/settings?tab=${tab}`, { scroll: false });
  };

  const navItems: { id: Tab; label: string; icon: JSX.Element }[] = [
    {
      id: "account",
      label: "Account details",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: "feedback",
      label: "Give feedback",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: "support",
      label: "Support",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="flex gap-4 w-full">
        <div className="hidden md:block bg-white rounded-2xl shadow-sm p-3 w-52 flex-shrink-0 h-fit">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`cursor-pointer w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                activeTab === item.id
                  ? "bg-gray-100 text-blue-900 font-semibold"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <span
                className={
                  activeTab === item.id ? "text-blue-900" : "text-gray-400"
                }
              >
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-4 flex items-center gap-2 md:hidden">
            <span className="text-sm font-semibold text-gray-700">
              {navItems.find((n) => n.id === activeTab)?.label}
            </span>
          </div>

          {/* Main Content */}
          {activeTab === "account" && <AccountDetails />}
          {activeTab === "feedback" && <GiveFeedBack />}
          {activeTab === "support" && <Support />}
        </div>
      </div>
    </div>
  );
}