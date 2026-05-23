"use client";
import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Users,
  Eye,
  PenLine,
} from "lucide-react";
import { CVData, defaultCVData } from "./_cv/cv";
import PersonalDetails from "./_cv/PersonalDetails";
import ProfilePreferences from "./_cv/ProfilePreferences";
import ListSection from "./_cv/ListSection";
import CVPreview from "./_cv/CVPreview";

export default function Resume() {
  const [cvData, setCVData] = useState<CVData>(defaultCVData);
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");

  function handleChange(updates: Partial<CVData>) {
    setCVData((prev) => ({ ...prev, ...updates }));
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 block md:hidden">
        <div className="flex items-center gap-3 px-5 py-3.5">
          <h1 className="text-base font-semibold text-gray-900">Edit Resume</h1>

          {/* Mobile tabs */}
          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => setMobileTab("edit")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                mobileTab === "edit"
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-white border-gray-200 text-gray-500"
              }`}
            >
              <PenLine size={12} /> Edit
            </button>

            <button
              onClick={() => setMobileTab("preview")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                mobileTab === "preview"
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-white border-gray-200 text-gray-500"
              }`}
            >
              <Eye size={12} /> Preview
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Edit Column */}
        <div
          className={`w-full md:w-1/2 overflow-y-auto min-h-0 p-2 custom-scroll md:p-4 ${
            mobileTab === "preview" ? "hidden md:block" : "block"
          }`}
        >
          <h1 className="text-xl font-semibold text-gray-900 mb-2 hidden md:block">
            Edit Resume
          </h1>
          <PersonalDetails data={cvData} onChange={handleChange} />

          <ProfilePreferences data={cvData} onChange={handleChange} />

          <ListSection
            icon={<Briefcase size={16} />}
            title="Professional Experience"
            type="experiences"
            data={cvData}
            onChange={handleChange}
          />

          <ListSection
            icon={<GraduationCap size={16} />}
            title="Education"
            type="educations"
            data={cvData}
            onChange={handleChange}
          />

          <ListSection
            icon={<Award size={16} />}
            title="Certificates & Courses"
            type="certificates"
            data={cvData}
            onChange={handleChange}
          />

          <ListSection
            icon={<Globe size={16} />}
            title="Language"
            type="languages"
            data={cvData}
            onChange={handleChange}
            addLabel="+ Add Language"
          />

          <ListSection
            icon={<Users size={16} />}
            title="References"
            type="references"
            data={cvData}
            onChange={handleChange}
            addLabel="+ Add Reference"
          />
        </div>

        {/* Preview Column */}
        <div
          className={`w-full md:w-1/2 overflow-y-auto custom-scroll min-h-0 p-2 md:p-4 ${
            mobileTab === "edit" ? "hidden md:flex" : "flex"
          } flex-col items-center`}
        >
          <CVPreview data={cvData} />
        </div>
      </div>
    </div>
  );
}
