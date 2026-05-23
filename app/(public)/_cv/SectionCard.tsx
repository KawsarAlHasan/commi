"use client";
import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface SectionCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function SectionCard({
  icon,
  title,
  children,
  defaultOpen = false,
}: SectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl mb-3 overflow-hidden shadow-sm border border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-gray-50 ${
          open ? "border-b border-gray-100" : ""
        }`}
      >
        <span
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 transition-colors ${
            open ? "bg-orange-50 text-orange-500" : "bg-gray-100 text-gray-500"
          }`}
        >
          {icon}
        </span>
        <span
          className={`text-sm font-medium flex-1 ${
            open ? "text-orange-500" : "text-gray-800"
          }`}
        >
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && <div className="px-5 pb-5 pt-4">{children}</div>}
    </div>
  );
}