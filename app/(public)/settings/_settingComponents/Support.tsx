"use client";
import React, { useState } from "react";

function Support() {
  const supportEmail = "support@commi.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-lg font-bold text-gray-900">Request contact</h2>
        <p className="text-sm text-gray-500 mt-1">
          Need help? We&apos;re here for you. You can contact on{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="text-blue-700 font-semibold hover:underline"
          >
            {supportEmail}
          </a>
          .{" "}
          <button
            onClick={handleCopy}
            title="Copy email"
            className="inline-flex items-center ml-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {copied ? (
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Support;
