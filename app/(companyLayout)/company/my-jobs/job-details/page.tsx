import React from "react";

function page() {
  return (
    <div className="min-h-screen p-2 lg:p-4">
      <div className="mx-auto space-y-4">
        {/* Header Card */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
          {/* Orange Banner */}
          <div className="h-14 lg:h-24 bg-orange-400" />

          {/* Profile Info */}
          <div className="px-6 pb-4 mt-1">
            <div className="flex items-end justify-between -mt-6 lg:-mt-8 mb-1.5 lg:mb-3">
              <div className="flex items-end gap-4">
                {/* Avatar */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-sm">
                  JD
                </div>
                {/* Name & Company */}
                <div className="mb-1">
                  <h1 className="text-lg lg:text-xl font-bold text-gray-900">
                    Cafe de Parties
                  </h1>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mt-0 lg:mt-0.5">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span>PizzaBurg</span>
                  </div>
                </div>
              </div>
              {/* Apply Button */}
              <button className="hidden md:block bg-red-400 hover:bg-red-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                Edit Job
              </button>
            </div>

            <button className="md:hidden cursor-pointer w-full bg-red-400 hover:bg-red-500 text-white text-sm font-semibold py-1.5 rounded-lg transition-colors mb-1">
              Edit Job
            </button>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                San Francisco, CA
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                john.doe@email.com
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1 (555) 123-4567
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                linkedin.com/in/johndoe
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                johndoe.dev
              </span>
            </div>
          </div>
        </div>

        {/* About This Role */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            About This Role
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We are looking for an experienced and passionate Head Chef to lead
            our kitchen operations. You will be responsible for managing the
            culinary team, maintaining food quality standards, and creating
            innovative menus that enhance customer satisfaction.
          </p>
        </div>

        {/* Key Responsibilities */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-bold text-gray-900 mb-3">
            Key Responsibilities
          </h2>
          <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
            <li>Oversee daily kitchen operations</li>
            <li>Manage and train kitchen staff</li>
            <li>Design and update menus</li>
            <li>Ensure food quality and presentation standards</li>
            <li>Maintain hygiene and safety regulations</li>
            <li>Control food costs and inventory</li>
          </ul>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <p className="text-xs font-bold text-gray-900 mb-2">
              Salary & Benefits
            </p>
            <p className="text-sm text-gray-600">€2500 – €2600 per month</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <p className="text-xs font-bold text-gray-900 mb-2">
              Working Hours
            </p>
            <p className="text-sm text-gray-600">8–10 hours/day</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <p className="text-xs font-bold text-gray-900 mb-2">
              Contract Duration
            </p>
            <p className="text-sm text-gray-600">2 years</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <p className="text-xs font-bold text-gray-900 mb-2">Weekly Off:</p>
            <p className="text-sm text-gray-600">1 day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
