"use client";
import React, { useState } from "react";
import DeleteAccount from "./DeleteAccount";

function AccountDetails() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const accountEmail = "lucas@kokgespot.nl";

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-lg font-bold text-gray-900">Email & Password</h2>
        <p className="text-sm text-gray-500 mt-1">
          Your account email:{" "}
          <span className="text-blue-700 font-semibold">{accountEmail}</span>
        </p>
        <div className="flex gap-3 mt-4 mb-8">
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 text-sm font-semibold px-4 py-2 rounded-full transition-colors">
            Change Email
          </button>
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 text-sm font-semibold px-4 py-2 rounded-full transition-colors">
            Connect With Google
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>

        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
          Update password
        </button>
      </div>

      <DeleteAccount />
    </div>
  );
}

export default AccountDetails;
