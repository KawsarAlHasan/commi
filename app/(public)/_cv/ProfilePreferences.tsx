"use client";
import { LayoutList } from "lucide-react";
import { CVData } from "./cv";
import {
  ROLE_OPTIONS,
  SALARY_OPTIONS,
  COMPANY_TYPES,
  NIVEAU_OPTIONS,
  STYLE_OPTIONS,
} from "./utils";
import SectionCard from "./SectionCard";

const GUEST_VOLUME_OPTIONS = ["0 – 30", "30 – 50", "50 – 100", "100 - 200", "200+"];
const TEAM_SIZE_OPTIONS = ["1 - 3", "4 – 8", "8 - 15", "15+"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface Props {
  data: CVData;
  onChange: (updates: Partial<CVData>) => void;
}

function TagSelector({
  options,
  value,
  onSelect,
}: {
  options: string[];
  value: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt === value ? "" : opt)}
          className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
            value === opt
              ? "bg-orange-500 border-orange-500 text-white"
              : "bg-white border-gray-200 text-gray-600 hover:border-orange-300"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function ProfilePreferences({ data, onChange }: Props) {
  const flexibilityMode: string = (data as any).flexibilityMode ?? "";
  const selectedDays: string[] = (data as any).selectedDays ?? [];

  const toggleDay = (day: string) => {
    const updated = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    onChange({ selectedDays: updated } as any);
  };

  return (
    <SectionCard icon={<LayoutList size={16} />} title="Profile & Preferences">
      <div className="space-y-4">

        {/* Role / Position */}
        <div>
          <label className="text-xs font-medium text-gray-500">Role/Position</label>
          <TagSelector
            options={ROLE_OPTIONS}
            value={data.role}
            onSelect={(v) => onChange({ role: v })}
          />
        </div>

        {/* Company Type */}
        <div>
          <label className="text-xs font-medium text-gray-500">Company Type</label>
          <TagSelector
            options={COMPANY_TYPES}
            value={data.companyType}
            onSelect={(v) => onChange({ companyType: v })}
          />
        </div>

        {/* Niveau */}
        <div>
          <label className="text-xs font-medium text-gray-500">Niveau</label>
          <TagSelector
            options={NIVEAU_OPTIONS}
            value={data.niveau}
            onSelect={(v) => onChange({ niveau: v })}
          />
        </div>

        {/* Style */}
        <div>
          <label className="text-xs font-medium text-gray-500">Style</label>
          <TagSelector
            options={STYLE_OPTIONS}
            value={data.style}
            onSelect={(v) => onChange({ style: v })}
          />
        </div>

        {/* Guest Volume */}
        <div>
          <label className="text-xs font-medium text-gray-500">
            What guest volume do you prefer?
          </label>
          <TagSelector
            options={GUEST_VOLUME_OPTIONS}
            value={(data as any).guestVolume ?? ""}
            onSelect={(v) => onChange({ guestVolume: v } as any)}
          />
        </div>

        {/* Preferred Team Size */}
        <div>
          <label className="text-xs font-medium text-gray-500">Preferred team size</label>
          <TagSelector
            options={TEAM_SIZE_OPTIONS}
            value={(data as any).teamSize ?? ""}
            onSelect={(v) => onChange({ teamSize: v } as any)}
          />
        </div>

        {/* Contract Type */}
        <div>
          <label className="text-xs font-medium text-gray-500">Contract Type</label>
          <TagSelector
            options={["Freelance", "Contract"]}
            value={data.contractType}
            onSelect={(v) => onChange({ contractType: v })}
          />
        </div>

        {/* Availability */}
        <div>
          <label className="text-xs font-medium text-gray-500">Availability</label>
          <TagSelector
            options={["Immediately", "Notice period"]}
            value={data.availability}
            onSelect={(v) => onChange({ availability: v })}
          />
        </div>

        {/* Hours per week */}
        <div>
          <label className="text-xs font-medium text-gray-500">
            How many hours do you want to work?
          </label>
          <TagSelector
            options={["32 - 38 hours", "16 - 32 hours", "0 - 16 hours"]}
            value={data.hoursPerWeek}
            onSelect={(v) => onChange({ hoursPerWeek: v })}
          />
        </div>

        {/* Salary */}
        <div>
          <label className="text-xs font-medium text-gray-500">
            Salary Indication (bruto fulltime per month)
          </label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {SALARY_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() =>
                  onChange({ salary: opt === data.salary ? "" : opt })
                }
                className={`px-3 py-2 rounded-lg border text-xs font-medium text-center transition-all ${
                  data.salary === opt
                    ? "bg-orange-50 border-orange-400 text-orange-600 font-semibold"
                    : "bg-white border-gray-200 text-gray-600 hover:border-orange-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Flexibility */}
        <div>
          <label className="text-xs font-medium text-gray-500">
            Flexiblitiy (multiple answers)
          </label>
          <div className="mt-2 space-y-3">
            {/* I am Flexible */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="flexibility"
                value="flexible"
                checked={flexibilityMode === "flexible"}
                onChange={() =>
                  onChange({ flexibilityMode: "flexible", selectedDays: [] } as any)
                }
                className="w-4 h-4 accent-orange-500"
              />
              <span className="text-sm text-gray-700">I am Flexible</span>
            </label>

            {/* Select Days */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="flexibility"
                value="select_days"
                checked={flexibilityMode === "select_days"}
                onChange={() =>
                  onChange({ flexibilityMode: "select_days" } as any)
                }
                className="w-4 h-4 accent-orange-500"
              />
              <span className="text-sm text-gray-700">Select Days</span>
            </label>

            {/* Day checkboxes */}
            <div className="ml-6 grid grid-cols-2 gap-x-8 gap-y-2">
              {DAYS.map((day) => (
                <label key={day} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedDays.includes(day)}
                    onChange={() => {
                      if (flexibilityMode !== "select_days") {
                        onChange({ flexibilityMode: "select_days" } as any);
                      }
                      toggleDay(day);
                    }}
                    className="w-4 h-4 rounded accent-orange-500"
                  />
                  <span className="text-sm text-gray-700">{day}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

      </div>
    </SectionCard>
  );
}