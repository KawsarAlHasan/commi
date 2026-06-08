"use client";
import React, { useState } from "react";

function DeleteAccount() {
  const [step, setStep] = useState<null | "confirm" | "reason">(null);
  const [reason, setReason] = useState("");

  const handleConfirm = () => setStep("reason");
  const handleClose = () => {
    setStep(null);
    setReason("");
  };
  const handleSubmit = () => {
    // handle delete logic here
    handleClose();
  };

  return (
    <>
      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mt-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Delete Account</h2>
            <p className="text-sm text-gray-500 mt-1 mb-6">
              Deleting your account is permanent. All your data will be removed
              and cannot be recovered.
            </p>
            <button
              onClick={() => setStep("confirm")}
              className="cursor-pointer flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {step && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          {/* Step 1 — Confirm */}
          {step === "confirm" && (
            <div
              className="bg-white rounded-2xl p-8 w-full max-w-[558px] mx-4 flex flex-col items-center text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Trash Icon */}
              <div className="text-orange-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>

              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Confirm Account Deletion
              </h2>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                This will permanently delete your account and all associated
                data. Are you sure you want to continue?
              </p>

              <div className="flex gap-3 w-full">
                <button
                  onClick={handleClose}
                  className="cursor-pointer flex-1 border border-gray-300 text-gray-700 text-sm font-semibold py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="cursor-pointer flex-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  I want to delete my account
                </button>
              </div>
            </div>
          )}

          {/* Step 2 — Reason */}
          {step === "reason" && (
            <div
              className="bg-white rounded-2xl p-8 w-full max-w-[558px] mx-4 flex flex-col items-center text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-5 leading-snug">
                Please let us know why
                <br />
                you are deleting your account
              </h2>

              <input
                type="text"
                placeholder="Type here...."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none mb-6 focus:ring-2 focus:ring-orange-400 transition"
              />

              <div className="flex gap-3 w-full">
                <button
                  onClick={handleClose}
                  className="cursor-pointer flex-1 border border-gray-300 text-orange-500 text-sm font-semibold py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="cursor-pointer flex-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DeleteAccount;
