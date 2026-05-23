"use client";
import { useState } from "react";
import { Trash2, ChevronDown, ChevronUp, GripVertical } from "lucide-react";
import { CVData, Experience, Education, Certificate, Language, Reference } from "./cv";
import { genId, ROLE_OPTIONS, LANG_LEVELS } from "./utils";
import SectionCard from "./SectionCard";

type EntryType = "experiences" | "educations" | "certificates" | "languages" | "references";

const field =
  "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all";

// ─── Experience Entry ────────────────────────────────────────────────────────
function ExperienceForm({
  entry,
  onChange,
}: {
  entry: Experience;
  onChange: (e: Experience) => void;
}) {
  return (
    <div className="space-y-3 pt-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Job Title</label>
          <select
            className={field}
            value={entry.jobTitle}
            onChange={(e) => onChange({ ...entry, jobTitle: e.target.value })}
          >
            <option value="">Select...</option>
            {ROLE_OPTIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Company</label>
          <input
            className={field}
            placeholder="Company Name"
            value={entry.company}
            onChange={(e) => onChange({ ...entry, company: e.target.value })}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Start Date</label>
          <input
            className={field}
            type="month"
            value={entry.start}
            onChange={(e) => onChange({ ...entry, start: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">End Date</label>
          <input
            className={field}
            type="month"
            value={entry.end}
            placeholder="Leave blank = current"
            onChange={(e) => onChange({ ...entry, end: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Location</label>
        <input
          className={field}
          placeholder="City, Country"
          value={entry.location}
          onChange={(e) => onChange({ ...entry, location: e.target.value })}
        />
      </div>
    </div>
  );
}

// ─── Education Entry ─────────────────────────────────────────────────────────
function EducationForm({
  entry,
  onChange,
}: {
  entry: Education;
  onChange: (e: Education) => void;
}) {
  return (
    <div className="space-y-3 pt-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Degree / Field</label>
          <input
            className={field}
            placeholder="Enter Degree / field of study"
            value={entry.degree}
            onChange={(e) => onChange({ ...entry, degree: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">School</label>
          <input
            className={field}
            placeholder="Enter school / university"
            value={entry.school}
            onChange={(e) => onChange({ ...entry, school: e.target.value })}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Start Date</label>
          <input
            className={field}
            type="month"
            value={entry.start}
            onChange={(e) => onChange({ ...entry, start: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">End Date</label>
          <input
            className={field}
            type="month"
            value={entry.end}
            onChange={(e) => onChange({ ...entry, end: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Location</label>
        <input
          className={field}
          placeholder="City, Country"
          value={entry.location}
          onChange={(e) => onChange({ ...entry, location: e.target.value })}
        />
      </div>
    </div>
  );
}

// ─── Certificate Entry ───────────────────────────────────────────────────────
function CertificateForm({
  entry,
  onChange,
}: {
  entry: Certificate;
  onChange: (e: Certificate) => void;
}) {
  return (
    <div className="space-y-3 pt-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Certificate / Course</label>
          <input
            className={field}
            placeholder="Enter Certificate"
            value={entry.cert}
            onChange={(e) => onChange({ ...entry, cert: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Institute</label>
          <input
            className={field}
            placeholder="Enter institute name"
            value={entry.institute}
            onChange={(e) => onChange({ ...entry, institute: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Date</label>
        <input
          className={field}
          type="month"
          value={entry.date}
          onChange={(e) => onChange({ ...entry, date: e.target.value })}
        />
      </div>
    </div>
  );
}

// ─── Language Entry ──────────────────────────────────────────────────────────
function LanguageForm({
  entry,
  onChange,
}: {
  entry: Language;
  onChange: (e: Language) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 pt-3">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Language</label>
        <input
          className={field}
          placeholder="Enter Language"
          value={entry.lang}
          onChange={(e) => onChange({ ...entry, lang: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Level</label>
        <select
          className={field}
          value={entry.level}
          onChange={(e) => onChange({ ...entry, level: e.target.value })}
        >
          <option value="">Select Language Level</option>
          {LANG_LEVELS.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

// ─── Reference Entry ─────────────────────────────────────────────────────────
function ReferenceForm({
  entry,
  onChange,
}: {
  entry: Reference;
  onChange: (e: Reference) => void;
}) {
  return (
    <div className="space-y-3 pt-3">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
        <input
          className={field}
          placeholder="Enter the full name"
          value={entry.name}
          onChange={(e) => onChange({ ...entry, name: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Job Title</label>
          <input
            className={field}
            placeholder="Enter job title"
            value={entry.jobTitle}
            onChange={(e) => onChange({ ...entry, jobTitle: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Organization</label>
          <input
            className={field}
            placeholder="Enter organization"
            value={entry.org}
            onChange={(e) => onChange({ ...entry, org: e.target.value })}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
          <input
            className={field}
            placeholder="Enter email"
            value={entry.email}
            onChange={(e) => onChange({ ...entry, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Phone Number</label>
          <input
            className={field}
            placeholder="Enter phone number"
            value={entry.phone}
            onChange={(e) => onChange({ ...entry, phone: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Generic Entry Item wrapper ───────────────────────────────────────────────
function EntryItem({
  title,
  subtitle,
  expanded,
  onToggle,
  onDelete,
  children,
}: {
  title: string;
  subtitle?: string;
  expanded: boolean;
  onToggle: () => void;
  onDelete: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-2">
      <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50">
        <GripVertical size={14} className="text-gray-300 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-800 truncate">{title || "New Entry"}</p>
          {subtitle && <p className="text-xs text-gray-400 truncate">{subtitle}</p>}
        </div>
        <button
          onClick={onDelete}
          className="p-1.5 rounded-md border border-gray-200 text-gray-400 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors"
        >
          <Trash2 size={13} />
        </button>
        <button
          onClick={onToggle}
          className="p-1.5 rounded-md border border-gray-200 text-gray-400 hover:bg-gray-100 transition-colors"
        >
          {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        </button>
      </div>
      {expanded && <div className="px-3 pb-3">{children}</div>}
    </div>
  );
}

// ─── Main List Section ────────────────────────────────────────────────────────
interface ListSectionProps {
  icon: React.ReactNode;
  title: string;
  type: EntryType;
  data: CVData;
  onChange: (updates: Partial<CVData>) => void;
  addLabel?: string;
}

export default function ListSection({
  icon,
  title,
  type,
  data,
  onChange,
  addLabel = "+ Add Entry",
}: ListSectionProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const items = data[type] as any[];

  function addItem() {
    const id = genId();
    let newItem: any = { id };
    if (type === "experiences") newItem = { id, jobTitle: "", company: "", start: "", end: "", location: "" };
    if (type === "educations") newItem = { id, degree: "", school: "", start: "", end: "", location: "" };
    if (type === "certificates") newItem = { id, cert: "", institute: "", date: "" };
    if (type === "languages") newItem = { id, lang: "", level: "" };
    if (type === "references") newItem = { id, name: "", jobTitle: "", org: "", email: "", phone: "" };
    onChange({ [type]: [...items, newItem] });
    setExpanded((prev) => ({ ...prev, [id]: true }));
  }

  function removeItem(id: string) {
    onChange({ [type]: items.filter((e) => e.id !== id) });
  }

  function updateItem(id: string, updated: any) {
    onChange({ [type]: items.map((e) => (e.id === id ? updated : e)) });
  }

  function toggleItem(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function getTitle(item: any): string {
    if (type === "experiences") return item.jobTitle || item.company || "New Experience";
    if (type === "educations") return item.degree || item.school || "New Education";
    if (type === "certificates") return item.cert || "New Certificate";
    if (type === "languages") return item.lang || "New Language";
    if (type === "references") return item.name || "New Reference";
    return "Entry";
  }

  function getSubtitle(item: any): string {
    if (type === "experiences") return item.company || "";
    if (type === "educations") return item.school || "";
    if (type === "certificates") return item.institute || "";
    if (type === "languages") return item.level || "";
    if (type === "references") return item.jobTitle || "";
    return "";
  }

  return (
    <SectionCard icon={icon} title={title}>
      {items.map((item) => (
        <EntryItem
          key={item.id}
          title={getTitle(item)}
          subtitle={getSubtitle(item)}
          expanded={!!expanded[item.id]}
          onToggle={() => toggleItem(item.id)}
          onDelete={() => removeItem(item.id)}
        >
          {type === "experiences" && (
            <ExperienceForm entry={item} onChange={(u) => updateItem(item.id, u)} />
          )}
          {type === "educations" && (
            <EducationForm entry={item} onChange={(u) => updateItem(item.id, u)} />
          )}
          {type === "certificates" && (
            <CertificateForm entry={item} onChange={(u) => updateItem(item.id, u)} />
          )}
          {type === "languages" && (
            <LanguageForm entry={item} onChange={(u) => updateItem(item.id, u)} />
          )}
          {type === "references" && (
            <ReferenceForm entry={item} onChange={(u) => updateItem(item.id, u)} />
          )}
        </EntryItem>
      ))}

      <button
        onClick={addItem}
        className="w-full mt-2 py-2.5 border-2 border-dashed border-gray-200 rounded-lg text-sm text-gray-400 hover:border-orange-300 hover:text-orange-400 transition-colors"
      >
        {addLabel}
      </button>
    </SectionCard>
  );
}