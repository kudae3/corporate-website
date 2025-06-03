"use client";

import { Alert } from "@/app/(root)/components/AlertDialog";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Career } from "../../Types/career";

const Submit = ({ career }: { career: Career }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    resume: null as File | null,
    message: "",
    terms: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form whenever formData changes
  useEffect(() => {
    const { fullName, email, resume, terms } = formData;
    const isValid =
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && // Basic email validation
      resume !== null &&
      terms;

    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const SubmitJob = (id: number) => {
    console.log(`Job Submitted to id: ${id}`);
    console.log("Form data:", formData);
  };

  return (
    <Alert
      onAction={() => SubmitJob(career._id)}
      action="Submit"
      btnDisabled={!isFormValid}
      trigger={
        <Button className="flex-1 bg-primary hover:bg-primary/90 text-white cursor-pointer">
          Apply Now
        </Button>
      }
    >
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Apply for {career.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Fill out the form below to submit your application
          </p>
        </div>

        <form className="space-y-5">
          {/* Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3  rounded-lg  focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Resume/CV *
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary/90 transition-colors"
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Accepted formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>

          {/* Cover Letter/Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Cover Letter / Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              className="w-full px-4 py-3  rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white placeholder-gray-400 resize-vertical transition-colors"
            ></textarea>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              checked={formData.terms}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
        </form>
      </div>
    </Alert>
  );
};

export default Submit;
