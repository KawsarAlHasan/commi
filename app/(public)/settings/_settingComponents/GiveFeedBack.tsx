"use client";
import React, { useState } from "react";

function GiveFeedBack() {
  const [feedbackText, setFeedbackText] = useState("");
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-lg font-bold text-gray-900">Give Feedback</h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        Help us improve your experience by sharing your thoughts.
      </p>
      <hr className="border-gray-100 mb-6" />
      <label className="block text-sm font-semibold text-gray-800 mb-3">
        Your Feedback
      </label>
      <textarea
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        placeholder="Write your feedback here..."
        rows={3}
        className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-orange-200"
      />
      <button className="cursor-pointer mt-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
        Submit Feedback
      </button>
    </div>
  );
}

export default GiveFeedBack;
