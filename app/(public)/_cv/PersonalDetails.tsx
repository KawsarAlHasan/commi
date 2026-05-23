"use client";
import { useRef } from "react";
import { User } from "lucide-react";
import { CVData } from "./cv";
import SectionCard from "./SectionCard";

interface Props {
  data: CVData;
  onChange: (updates: Partial<CVData>) => void;
}

export default function PersonalDetails({ data, onChange }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onChange({ photo: ev.target?.result as string });
    reader.readAsDataURL(file);
  }

  const field =
    "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all";

  return (
    <SectionCard icon={<User size={16} />} title="Personal Details" defaultOpen>
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Full Name
            </label>
            <input
              className={field}
              placeholder="Enter your Title, first - and last name"
              value={data.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Professional Title
            </label>
            <input
              className={field}
              placeholder="Target position or current role"
              value={data.professionalTitle}
              onChange={(e) => onChange({ professionalTitle: e.target.value })}
            />
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center mt-4 items-center">
          <div
            onClick={() => fileRef.current?.click()}
            className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:text-orange-400 text-gray-400 transition-colors overflow-hidden"
          >
            {data.photo ? (
              <img
                src={data.photo}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <span className="text-xl">📷</span>
                <span className="text-xs mt-1">Upload</span>
              </>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhoto}
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Date of Birth
        </label>
        <input
          className={field}
          type="month"
          placeholder="MM/YY"
          value={data.dob}
          onChange={(e) => onChange({ dob: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Location
          </label>
          <input
            className={field}
            placeholder="City, Country"
            value={data.location}
            onChange={(e) => onChange({ location: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Zipcode
          </label>
          <input
            className={field}
            placeholder="Zip Code"
            value={data.zipcode}
            onChange={(e) => onChange({ zipcode: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Email
        </label>
        <input
          className={field}
          type="email"
          placeholder="Enter email"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
      </div>

      <div className="mt-3">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Phone Number
        </label>
        <input
          className={field}
          placeholder="Enter phone number"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
        />
      </div>

      <div className="mt-3">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          LinkedIn URL (Optional)
        </label>
        <input
          className={field}
          placeholder="Enter LinkedIn"
          value={data.linkedin}
          onChange={(e) => onChange({ linkedin: e.target.value })}
        />
      </div>

      <div className="mt-3">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Instagram URL (Optional)
        </label>
        <input
          className={field}
          placeholder="Enter Instagram"
          value={data.instagram}
          onChange={(e) => onChange({ instagram: e.target.value })}
        />
      </div>
    </SectionCard>
  );
}
