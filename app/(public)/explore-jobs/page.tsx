"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Head Chef",
    type: "Full Time",
    location: "On-Site",
    salary: "$110K–180K",
    recruiter: "John Doe",
    recruiterRole: "Senior Chef",
    initials: "JD",
  },
  {
    id: 2,
    title: "Sous Chef",
    type: "Part Time",
    location: "Remote",
    salary: "$70K–90K",
    recruiter: "Sara Mills",
    recruiterRole: "HR Manager",
    initials: "SM",
  },
  {
    id: 3,
    title: "Head Chef",
    type: "Full Time",
    location: "On-Site",
    salary: "$110K–180K",
    recruiter: "Rita Khan",
    recruiterRole: "Senior Chef",
    initials: "RK",
  },
  {
    id: 4,
    title: "Pastry Chef",
    type: "Full Time",
    location: "Hybrid",
    salary: "$80K–120K",
    recruiter: "Alex Lee",
    recruiterRole: "Lead Recruiter",
    initials: "AL",
  },
  {
    id: 5,
    title: "Line Cook",
    type: "Contract",
    location: "On-Site",
    salary: "$50K–65K",
    recruiter: "Mark Noon",
    recruiterRole: "Kitchen Lead",
    initials: "MN",
  },
  {
    id: 6,
    title: "Exec Chef",
    type: "Full Time",
    location: "On-Site",
    salary: "$150K–200K",
    recruiter: "John Doe",
    recruiterRole: "Senior Chef",
    initials: "JD",
  },
];

const inactiveJobs = [
  {
    id: 7,
    title: "Grill Master",
    type: "Full Time",
    location: "On-Site",
    salary: "$60K–80K",
    recruiter: "Tom Ray",
    recruiterRole: "Kitchen Lead",
    initials: "TR",
  },
  {
    id: 8,
    title: "Prep Cook",
    type: "Part Time",
    location: "On-Site",
    salary: "$30K–45K",
    recruiter: "Lena Park",
    recruiterRole: "HR Manager",
    initials: "LP",
  },
  {
    id: 9,
    title: "Catering Chef",
    type: "Contract",
    location: "Remote",
    salary: "$55K–70K",
    recruiter: "Sara Mills",
    recruiterRole: "HR Manager",
    initials: "SM",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#7F77DD"
      stroke="#7F77DD"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

function JobCard({ job }: { job: (typeof jobs)[0] }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/explore-jobs/job-details`)}
      className="cursor-pointer bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
            <StarIcon />
          </div>
          <span className="text-sm font-medium text-gray-800">PizzaBurg</span>
        </div>

        <span className="text-xs font-medium text-[#581C87] bg-[#F3E8FF] px-3 py-1 rounded-md">
          Chef
        </span>
      </div>

      <h3 className="text-base font-bold text-gray-900">{job.title}</h3>

      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-gray-500 border border-gray-200 rounded-md px-2 py-1">
          {job.type}
        </span>
        <span className="text-xs text-gray-500 border border-gray-200 rounded-md px-2 py-1">
          {job.location}
        </span>
        <span className="text-xs text-gray-500 border border-gray-200 rounded-md px-2 py-1">
          {job.salary}
        </span>
      </div>

      {/* divider line */}
      <div className="w-full h-px bg-gray-200"></div>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-800">
            {job.initials}
          </div>
          <div>
            <p className="text-xs font-medium text-gray-800">{job.recruiter}</p>
            <p className="text-xs text-gray-500">{job.recruiterRole}</p>
          </div>
        </div>
        <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors">
          Apply →
        </button>
      </div>
    </div>
  );
}

function page() {
  const [activeTab, setActiveTab] = useState<"active" | "inactive">(
    "active",
  );

  const displayedJobs = activeTab === "active" ? jobs : inactiveJobs;

  return (
    <div className="min-h-screen">
      {/* Tabs */}
      <div className="border-gray-200 px-4 pt-4">
        <div className="flex gap-0">
          <button
            onClick={() => setActiveTab("active")}
            className={`cursor-pointer flex items-center gap-2 px-1 py-3 mr-5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "active"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-500"
            }`}
          >
            Active Jobs
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                activeTab === "active"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              6
            </span>
          </button>
          <button
            onClick={() => setActiveTab("inactive")}
            className={`cursor-pointer flex items-center gap-2 px-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "inactive"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-500"
            }`}
          >
            Inactive Jobs
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                activeTab === "inactive"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              3
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-800 mb-4">
          {activeTab === "active" ? "6 Active Jobs" : "3 Inactive Jobs"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {displayedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
